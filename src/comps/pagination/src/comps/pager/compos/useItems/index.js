import { computed } from 'vue';

export function useItems(totalRf, currentPageRf) {
  const itemArrCp = computed(() => {
    let itemArr = [];
    if (totalRf.value <= 7) {
      itemArr = initPageLess7();
    } else if (currentPageRf.value <= 4) {
      itemArr = initCurPageLess4();
    } else if (currentPageRf.value >= totalRf.value - 3) {
      itemArr = initCurPageMore3();
    } else {
      itemArr = initPageMiddle();
    }
    return itemArr;
  });

  const isLeftCanMoveCp = computed(() => {
    const item = itemArrCp.value.find((x) => x.selected);
    return item.value !== 1;
  });

  const isRightCanMoveCp = computed(() => {
    const item = itemArrCp.value.find((x) => x.selected);
    return item.value !== totalRf.value;
  });

  /*
   * 当总页数小于7时，全部展示 */
  function initPageLess7() {
    const itemArr = [];
    for (let index = 1; index <= totalRf.value; index++) {
      itemArr.value.push({
        value: index,
        selected: index === currentPageRf.value,
      });
    }
    return itemArr;
  }

  /*
   * 当选中页数小于等于4时 */
  function initCurPageLess4() {
    const itemArr = [];
    if (currentPageRf.value < 1) {
      currentPageRf.value = 1;
    }
    for (let index = 1; index < 7; index++) {
      itemArr.push({
        value: index,
        selected: index === currentPageRf.value,
      });
    }
    itemArr.push({
      value: 'right',
      selected: false,
    });
    itemArr.push({
      value: totalRf.value,
      selected: false,
    });
    return itemArr;
  }

  /*
   * 当选中页数大于等于总数-3时 */
  function initCurPageMore3() {
    const itemArr = [];
    if (currentPageRf.value > totalRf.value) {
      currentPageRf.value = totalRf.value;
    }

    itemArr.push({
      value: 1,
      selected: false,
    });
    itemArr.push({
      value: 'left',
      selected: false,
    });
    for (let index = totalRf.value - 5; index <= totalRf.value; index++) {
      itemArr.push({
        value: index,
        selected: index === currentPageRf.value,
      });
    }

    return itemArr;
  }

  /*
   * 当总页数不在上面的情况中时，即选中的内容左右两侧都出现省略号 */
  function initPageMiddle() {
    const itemArr = [];

    itemArr.push({
      value: 1,
      selected: false,
    });
    itemArr.push({
      value: 'left',
      selected: false,
    });

    for (
      let index = currentPageRf.value - 2;
      index <= currentPageRf.value + 2;
      index++
    ) {
      itemArr.push({
        value: index,
        selected: index === currentPageRf.value,
      });
    }

    itemArr.push({
      value: 'right',
      selected: false,
    });
    itemArr.push({
      value: totalRf.value,
      selected: false,
    });
    return itemArr;
  }

  return {
    itemArrCp,
    isLeftCanMoveCp,
    isRightCanMoveCp,
  };
}
