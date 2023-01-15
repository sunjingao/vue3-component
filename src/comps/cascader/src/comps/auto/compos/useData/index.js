import { computed, ref, watch } from 'vue';

export function useData(modelValueRf, optionsRf) {
  const selectedArrRf = ref([]);

  const shownArrRf = ref([]);

  const shownArrCp = computed(() => {
    if (shownArrRf.value.length === 0) {
      if (!optionsRf.value || optionsRf.value.length === 0) {
        return [];
      } else {
        return [optionsRf.value.map((item) => getNodeByTipIndex(item, 0))];
      }
    }
    const retArr = [];
    let lastArr = [];

    for (let index = 0; index <= shownArrRf.value.length; index++) {
      if (index === 0) {
        lastArr = optionsRf.value;
      } else {
        lastArr = lastArr.find((item) => {
          return (
            item.value ===
            (shownArrRf.value[index - 1] && shownArrRf.value[index - 1].value)
          );
        }).children;
      }

      retArr.push(lastArr.map((item) => getNodeByTipIndex(item, index)));
    }
    return retArr;
  });

  function getEmptyTipNode() {
    return {
      value: '',
      label: '',
      disabled: false,
      selected: false,
      over: false,
      hasChildren: false,
    };
  }

  function getModelNode(item) {
    return {
      value: item.value,
      label: item.label,
      disabled: item.disabled,
    };
  }

  function getNodeByTipIndex(item, index) {
    const selected =
      item.value ===
      (selectedArrRf.value[index] && selectedArrRf.value[index].value);
    const over =
      item.value === (shownArrRf.value[index] && shownArrRf.value[index].value);
    const disabled = item.disabled || false;
    const hasChildren = (item.children && item.children.length > 0) || false;

    const node = getEmptyTipNode();
    node.value = item.value;
    node.label = item.label;
    node.selected = selected;
    node.over = over;
    node.disabled = disabled;
    node.hasChildren = hasChildren;

    return node;
  }

  function resetValue() {
    if (!modelValueRf.value || modelValueRf.value.length === 0) {
      return (selectedArrRf.value = []);
    }

    const tempArr = [];

    let lastChild = optionsRf.value;
    for (let index = 0; index < modelValueRf.value.length; index++) {
      const item = lastChild.find(
        (item) => item.value === modelValueRf.value[index]
      );

      tempArr.push(getModelNode(item));

      lastChild = item.children;
    }

    selectedArrRf.value = tempArr;
    shownArrRf.value = tempArr.slice(0, -1);
  }

  watch(
    () => modelValueRf.value,
    () => {
      resetValue();
    },
    {
      immediate: true,
      deep: true,
    }
  );

  return {
    selectedArrRf,
    shownArrRf,
    shownArrCp,
  };
}
