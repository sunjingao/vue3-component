import { getDomByType } from '@/comps/timepicker/src/utils';
import { ref } from 'vue';

export function useScroll(contentCp, itemHeightRf) {
  let timer = null;

  const hourD = ref(null);
  const minuteD = ref(null);
  const secondD = ref(null);

  function scrollByTypeAIndex(type, itemIndex) {
    const element = getDomByType(type, hourD, minuteD, secondD);
    element.scrollTop = (itemIndex - 2) * itemHeightRf.value;
  }

  function scrollToSelected() {
    for (const [type, item] of Object.entries(contentCp.value)) {
      const selectedIndex = item.findIndex((item) => item.isSelected);
      if (selectedIndex !== -1) {
        scrollByTypeAIndex(type, selectedIndex);
      }
    }
  }

  function handleScroll(type) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      const element = getDomByType(type, hourD, minuteD, secondD);
      const scrollTop = element.scrollTop;
      const isNeedScroll =
        Math.abs(itemHeightRf.value - (scrollTop % itemHeightRf.value)) > 1;
      if (isNeedScroll) {
        const scrollTopItemNums =
          Math.round(scrollTop / itemHeightRf.value) + 2;
        scrollByTypeAIndex(type, scrollTopItemNums);
      }
    }, 100);
  }

  return {
    hourD,
    minuteD,
    secondD,
    scrollByTypeAIndex,
    scrollToSelected,
    handleScroll,
  };
}
