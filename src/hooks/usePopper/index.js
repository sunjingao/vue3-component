import { onMounted, onUnmounted, ref } from 'vue';

export function usePopper(placement = 'bottom-start') {
  let popperHandler = null; // popper组件实例化后的句柄

  const referenceD = ref(null);
  const popperD = ref(null);

  const isShowPopperRf = ref(true);

  function updatePopper() {
    popperHandler.update();
  }

  function showPopper() {
    if (isShowPopperRf.value) {
      return;
    }
    popperHandler.show();
    isShowPopperRf.value = true;
  }

  function hidePopper() {
    if (!isShowPopperRf.value) {
      return;
    }
    popperHandler.hide();
    isShowPopperRf.value = false;
  }

  // 三种情况 dom，ref dom，ref 组件
  function getDom(val) {
    if (val.nodeType) {
      return val;
    } else {
      const value = val.value;
      if (value.$el) {
        return value.$el;
      } else {
        return value;
      }
    }
  }

  onMounted(() => {
    // 三种情况 dom，ref dom， ref 组件
    const refDom = getDom(referenceD);
    const popperDom = getDom(popperD);

    popperHandler = new Popper(refDom, popperDom, {
      updateImmediately: false,
      placement: placement,
      modifiers: {
        // 设置输入框和弹层之间的距离
        offset: {
          offset: [0, 10],
        },
      },
    });
    hidePopper();
  });

  onUnmounted(() => {
    popperHandler.destroy();
  });

  return {
    isShowPopperRf,
    updatePopper,
    showPopper,
    hidePopper,
    referenceD,
    popperD,
  };
}
