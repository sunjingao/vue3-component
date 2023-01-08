import { computed } from 'vue';

import { CLS_PRE } from '@/comps/timepicker/src/config';

export function useContentWidth(itemWidthRf) {
  const itemContentWidthCp = computed(() => {
    return itemWidthRf.value - getScrollBarWidth();
  });

  function getScrollBarWidth() {
    const eleOuter = document.createElement('div');
    eleOuter.style.width = '20px';
    eleOuter.style.height = '20px';
    eleOuter.style.overflow = 'scroll';
    eleOuter.classList.add(`${CLS_PRE}-scroll-test`); // 展示当前滚动条
    eleOuter.style.position = 'absolute';
    eleOuter.style.top = '0';
    eleOuter.style.left = '0';
    eleOuter.style.zIndex = '-9999';
    eleOuter.style.visibility = 'hidden';

    document.body.appendChild(eleOuter);

    const scrollBarWidth = eleOuter.offsetWidth - eleOuter.clientWidth;
    document.body.removeChild(eleOuter);
    return scrollBarWidth;
  }

  return itemContentWidthCp;
}
