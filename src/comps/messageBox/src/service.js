import MessageBox from './index.vue';
import { createApp } from 'vue';

const parent = document.documentElement;

function nullCb() {
  return true;
}

const getInstance = function (options) {
  return createApp(MessageBox, {
    // message confirm prompt
    type: options.type || 'message',
    title: options.title || '',
    content: options.content || '',
    cancelButtonText: options.cancelButtonText || '取消',
    confirmButtonText: options.confirmButtonText || '确认',
    cancelCallBack: options.cancelCallBack || nullCb,
    confirmCallBack: options.confirmCallBack || nullCb,
    closeCallBack: options.closeCallBack || nullCb,
  }).mount(document.createElement('div'));
};

export default function (options) {
  const instance = getInstance(options);

  return {
    open: () => {
      parent.appendChild(instance.$el);
      instance.show();
    },
    close: () => {
      parent.removeChild(instance.$el);
      instance.hide();
    },
  };
}
