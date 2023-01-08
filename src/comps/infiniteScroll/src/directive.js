import { throttle } from '@/utils/bom';

const addEvents = function () {
  this.el.addEventListener('scroll', this.scrollThrottle);
};

const removeEvents = function () {
  this.el.removeEventListener('scroll', this.scrollThrottle);
};

function scroll() {
  if (this.isCancel) {
    return;
  }
  const height = this.el.clientHeight + this.el.scrollTop + this.distance;
  if (height >= this.el.scrollHeight) {
    this.isCancel = true;
    removeEvents.bind(this);
    this.callBack(() => {
      this.isCancel = false;
      addEvents.call(this);
    });
  }
}

export default {
  name: 'infinite-scroll',

  mounted: function (el, binding, vnode) {
    const settings = {
      el: el,
      isCancel: false,
      delay: el.getAttribute('infinite-scroll-delay') || 500, // 默认延时
      disabled: el.getAttribute('infinite-scroll-disabled') || false, // 默认是否禁止选中
      distance: el.getAttribute('infinite-scroll-distance') || 100, // 默认触发回调的距离
      callBack: binding.value || function () {}, // 默认回调函数
      scrollThrottle: null,
    };

    if (settings.disabled) {
      return;
    }

    settings.scrollThrottle = throttle(scroll.bind(settings), settings.delay);

    addEvents.call(settings);
  },
};
