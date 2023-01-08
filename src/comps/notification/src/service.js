import { createApp } from 'vue';
import './css/index.scss';
import Alert from '@/comps/alert/src/index.vue';
import { CLS_PRE } from './config';
import { getStyle } from '@/utils/dom';

const getInstance = function (options) {
  const self = this;
  return createApp(Alert, {
    type: options.type || 'tip',
    title: options.title || '',
    closable: options.closable === undefined ? true : options.closable,
    showIcon: options.showIcon === undefined ? true : options.showIcon,
    plain: options.plain === undefined ? true : options.plain,
    closeText: options.closeText || '',
    textCenter: options.textCenter === undefined ? false : options.textCenter,
    description: options.description || '',
    closeMethod: function () {
      self.close();
    },
  }).mount(document.createElement('div'));
};

function getSettings(options) {
  const settings = {
    isOpen: false,
    timer: null,
    direction: options.direction,
    container: document.querySelector(
      `.${CLS_PRE}-notification-${options.direction}`
    ),
    timeout: options.timeout || 3000,
  };
  if (!settings.container) {
    settings.container = document.createElement('div');
    settings.container.classList.add(
      `${CLS_PRE}-notification-${settings.direction}`
    );
    if (settings.direction.includes('top')) {
      settings.container.style.marginTop = `${options.offset}px`;
    } else {
      settings.container.style.marginBottom = `${options.offset}px`;
    }
    document.documentElement.appendChild(settings.container);
  }
  return settings;
}

function setZIndex(ins) {
  ins.$el.style.zIndex = Popper.addZIndex();
}

function setOpenSetting(settings) {
  settings.isOpen = true;
}

function closeOpenSetting(settings) {
  settings.isOpen = false;
  clearTimeout(settings.timer);
  settings.timer = null;
}

function addCls(settings, instance) {
  instance.$el.classList.add(`${CLS_PRE}-notification-item`);
  if (settings.direction.includes('bottom')) {
    instance.$el.classList.add(`${CLS_PRE}-mb10`);
  } else {
    instance.$el.classList.add(`${CLS_PRE}-mt10`);
  }
}

function removeCls(instance) {
  instance.$el.classList.remove(`${CLS_PRE}-notification-item`);
  instance.$el.classList.remove(`${CLS_PRE}-mb10`);
  instance.$el.classList.remove(`${CLS_PRE}-mt10`);
}

function addDom(settings, instance) {
  settings.container.appendChild(instance.$el);
}

function removeDom(settings, instance) {
  settings.container.removeChild(instance.$el);
}

function addAni(instance) {
  return new Promise((resolve) => {
    setTimeout(() => {
      instance.$el.classList.add(`${CLS_PRE}-opa-show`);
      resolve();
    });
  });
}

function removeAni(instance) {
  let transitionTime = getStyle(instance.$el, 'transition-duration');
  transitionTime = (transitionTime && parseFloat(transitionTime) * 1000) || 0;
  return new Promise((resolve) => {
    instance.$el.classList.remove(`${CLS_PRE}-opa-show`);
    setTimeout(() => {
      resolve();
    }, transitionTime);
  });
}

function closeAuto(settings) {
  settings.timer = setTimeout(() => {
    this.close();
  }, settings.timeout);
}

export default function (options) {
  const retObj = {};
  const instance = getInstance.call(retObj, options);
  const settings = getSettings.call(retObj, options);

  return Object.assign(retObj, {
    open: async function () {
      if (settings.isOpen) {
        return;
      }

      setOpenSetting(settings);

      setZIndex(instance);

      addCls(settings, instance);

      addDom(settings, instance);

      await addAni(instance);

      closeAuto.call(this, settings);
    },
    close: async function () {
      if (!settings.isOpen) {
        return;
      }

      closeOpenSetting(settings);

      await removeAni(instance);

      removeCls(instance);

      removeDom(settings, instance);
    },
  });
}
