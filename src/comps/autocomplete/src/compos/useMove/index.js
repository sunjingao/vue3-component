import { nextTick } from 'vue';

export function useMove(popperContentRef, tipsData, activeIndexRef) {
  // 处理按键事件
  function handleMove(type) {
    handlerActive(type);
    handlerPlace();
  }

  // 处理选中元素
  function handlerActive(type) {
    if (activeIndexRef.value < 0) {
      return (activeIndexRef.value = 0);
    }
    if (type === 'up' && activeIndexRef.value !== 0) {
      activeIndexRef.value -= 1;
    } else if (
      type === 'down' &&
      activeIndexRef.value !== tipsData.length - 1
    ) {
      activeIndexRef.value += 1;
    }
  }

  // 让活动元素在正确的位置展示
  function handlerPlace() {
    nextTick(() => {
      const popper = popperContentRef.value;
      const activeEle = popper.querySelector('.active');
      if (!activeEle) {
        return;
      }
      const popperClientRect = popper.getBoundingClientRect();
      const activeClientRect = activeEle.getBoundingClientRect();
      const itemHeight = activeClientRect.height;

      if (
        activeClientRect.top >
        popperClientRect.top + popperClientRect.height - itemHeight
      ) {
        popper.scrollTop += itemHeight;
        handlerPlace();
      } else if (activeClientRect.top < popperClientRect.top) {
        popper.scrollTop -= itemHeight;
        handlerPlace();
      }
    });
  }

  return {
    handleMove,
  };
}
