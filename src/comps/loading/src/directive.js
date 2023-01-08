import { createApp, reactive, watch } from 'vue';
import Loading from './index.vue';
import { getStyle, setStyle } from '@/utils/dom';
import Popper from '@sunjingao/popper';

function getInstance(options) {
  const props = reactive({
    showLoadingIcon:
      options.showLoadingIcon === undefined ? true : options.showLoadingIcon,
    content: options.content || '',
    loadingClass: options.loadingClass || '',
    contentClass: options.contentClass || '',
    componentName: options.componentName || '',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0,
    zIndex: 0,
  });

  const settings = {
    target:
      typeof options.target === 'string'
        ? document.querySelector(options.target)
        : options.target,
    isOpen: false,
    parentOriginalOverflow: getStyle(options.target, 'overflow'),
    parentOriginalPosition: getStyle(options.target, 'position'),
    zIndex: 0,
    bindResizeEvents: null,
    resize: null,
  };

  const instance = createApp(Loading, { params: props }).mount(
    document.createElement('div')
  );

  function changeTargetPosition() {
    if (settings.parentOriginalOverflow !== 'hidden') {
      setStyle(settings.target, 'overflow', 'hidden');
    }
    if (
      settings.parentOriginalPosition === 'static' ||
      settings.target.parentOriginalPosition === ''
    ) {
      setStyle(settings.target, 'position', 'relative');
    }
  }

  function resetTargetPosition() {
    setStyle(settings.target, 'overflow', settings.parentOriginalOverflow);
    setStyle(settings.target, 'position', settings.parentOriginalPosition);
  }

  function getBodyWidthOrHeight(type) {
    const dom = document.createElement('div');

    type = type === 'width' ? 'Width' : 'Height';

    setStyle(dom, 'width', '100%');
    setStyle(dom, 'height', '100%');
    setStyle(dom, 'position', 'fixed');

    document.body.appendChild(dom);

    const typeWidthOrHeight = dom[`client${type}`];
    document.body.removeChild(dom);

    return typeWidthOrHeight;
  }

  function changeTargetBounding() {
    const borderLeft =
      parseFloat(getStyle(settings.target, 'border-left-width')) || 0;
    const borderTop =
      parseFloat(getStyle(settings.target, 'border-top-width')) || 0;

    if ([document.documentElement, document.body].includes(settings.target)) {
      props.top = `${document.documentElement.scrollTop - borderTop}px`;
      props.left = `${document.documentElement.scrollLeft - borderLeft}px`;
      props.width = `${getBodyWidthOrHeight('width')}px`;
      props.height = `${getBodyWidthOrHeight('height')}px`;
    } else {
      const width = settings.target.offsetWidth;
      const height = settings.target.offsetHeight;
      props.top = `${settings.target.scrollTop - borderTop}px`;
      props.left = `${settings.target.scrollLeft - borderLeft}px`;
      props.width = `${width}px`;
      props.height = `${height}px`;
    }
  }

  function bindResizeEvents() {
    settings.resize = () => {
      requestAnimationFrame(() => changeTargetBounding());
    };

    window.addEventListener('resize', settings.resize);
  }

  function removeResizeEvents() {
    window.removeEventListener('resize', settings.resize);
  }

  function addAnimation() {
    return new Promise((resolve) => {
      requestAnimationFrame(() => {
        props.opacity = 1;
        resolve();
      });
    });
  }

  // 延时设置opacity属性，展示动画效果
  function changeAnimation() {
    props.opacity = 0;
    return new Promise((resolve) => {
      let transitionTime = getStyle(instance.$el, 'transition-duration');
      transitionTime =
        (transitionTime && parseFloat(transitionTime) * 1000) || 0;
      setTimeout(() => {
        resolve();
      }, transitionTime);
    });
  }

  function addDom() {
    settings.target.appendChild(instance.$el);
  }

  function removeDom() {
    settings.target.removeChild(instance.$el);
  }

  async function open() {
    if (!settings.target) {
      console.error(`${options.target} is no exist`);
    }

    if (settings.isOpen) {
      return;
    }

    settings.zIndex = Popper.addZIndex();
    settings.isOpen = true;

    changeTargetPosition();

    changeTargetBounding();

    bindResizeEvents();

    addDom();

    await addAnimation();
  }

  async function close() {
    if (!settings.isOpen) {
      return;
    }

    settings.isOpen = false;

    await changeAnimation();

    removeDom();

    removeResizeEvents();

    resetTargetPosition();
  }
  return {
    open,
    close,
  };
}

export default {
  name: 'loading',
  mounted: function (el, binding, vnode) {
    const instance = getInstance(Object.assign({ target: el }, binding.value));

    watch(
      () => binding.value.isOpen,
      (val) => {
        if (val) {
          instance.open();
        } else {
          instance.close();
        }
      },
      {
        immediate: true,
      }
    );
  },

  // 需要清除增加的dom
  beforeUnmount: function (el, binding) {},
};
