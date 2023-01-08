import { ref } from 'vue';

export function useMouse(disabledRf, sliderD, handleMoveCb, handleMoveEndCb) {
  const isMovingRf = ref(false);
  const isHoverRf = ref(false);

  function handleMoveStart(event) {
    if (disabledRf.value) {
      return;
    }

    isMovingRf.value = true;

    handleMove(event);

    bindEvents();
  }

  function handleMove(event) {
    if (!isMovingRf.value) {
      return;
    }

    const fatherRect = sliderD.value.getBoundingClientRect();

    let finishedPercent = 0;

    if (event.pageX >= fatherRect.left && event.pageX <= fatherRect.right) {
      finishedPercent = (event.pageX - fatherRect.left) / fatherRect.width;
    } else if (event.pageX > fatherRect.right) {
      finishedPercent = 1;
    } else if (event.pageX < fatherRect.left) {
      finishedPercent = 0;
    }

    handleMoveCb(finishedPercent);
  }

  function handleMoveEnd() {
    isMovingRf.value = false;

    removeEvents();

    handleMoveEndCb();
  }

  function handleMouseEnter() {
    isHoverRf.value = true;
  }

  function handleMouseLeave() {
    isHoverRf.value = false;
  }

  function bindEvents() {
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', handleMoveEnd);
  }

  function removeEvents() {
    document.removeEventListener('mousemove', handleMove);
    document.removeEventListener('mouseup', handleMoveEnd);
  }

  return {
    isMovingRf,
    isHoverRf,
    handleMoveStart,
    handleMouseEnter,
    handleMouseLeave,
  };
}
