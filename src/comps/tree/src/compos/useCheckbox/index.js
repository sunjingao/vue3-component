import { computed, getCurrentInstance, ref, watch } from 'vue';
import { CHECK_TYPES, EMITS } from '@/comps/tree/src/config';

export function useCheckbox(checkedOpsRf, nodeListRf) {
  const { emit } = getCurrentInstance();

  // 选中节点key值数组
  const checkedKeysRf = ref([]);

  function getIsBaseChild(node) {
    return !node.nodeList || node.nodeList.length === 0;
  }

  function changeBaseChildCheck(item, type) {
    if (type === CHECK_TYPES.ALL) {
      if (!checkedKeysRf.value.includes(item.key)) {
        checkedKeysRf.value.push(item.key);
      }
    } else {
      if (checkedKeysRf.value.includes(item.key)) {
        const index = checkedKeysRf.value.indexOf(item.key);
        checkedKeysRf.value.splice(index, 1);
      }
    }
  }

  function setNodeCheckType(node, type) {
    if (getIsBaseChild(node)) {
      changeBaseChildCheck(node, type);
      return;
    }

    node.nodeList.forEach((item) => {
      setNodeCheckType(item, type);
    });
  }

  function setSpecialChildNodes(nodeList) {
    nodeList.forEach((item) => {
      if (checkedOpsRf.value.defaultCheckedKeys.includes(item.key)) {
        setNodeCheckType(item, CHECK_TYPES.ALL);
        return;
      }
      if (!getIsBaseChild(item)) {
        setSpecialChildNodes(item.nodeList);
      }
    });
  }

  function resetCheckKeys() {
    if (checkedOpsRf.value.isShow === false) {
      return (checkedKeysRf.value = []);
    }

    if (checkedOpsRf.value.checkedAll) {
      for (const item of Object.values(nodeListRf.value)) {
        setNodeCheckType(item, CHECK_TYPES.ALL);
      }
    }

    if (checkedOpsRf.value.defaultCheckedKeys) {
      setSpecialChildNodes(nodeListRf.value);
    }
  }

  watch(
    () => checkedOpsRf.value,
    () => {
      resetCheckKeys();
    },
    {
      immediate: true,
      deep: true,
    }
  );

  const isShowCheckboxCp = computed(() => {
    return checkedOpsRf.value && checkedOpsRf.value.isShow;
  });

  function changeCheck(item) {
    let res = -1;
    if (
      item.checkType === CHECK_TYPES.NONE ||
      item.checkType === CHECK_TYPES.PART
    ) {
      res = CHECK_TYPES.ALL;
    } else {
      res = CHECK_TYPES.NONE;
    }

    setNodeCheckType(item, res);

    emit(EMITS.CHECK, item, checkedKeysRf);
  }

  return {
    checkedKeysRf,
    isShowCheckboxCp,
    changeCheck,
    getIsBaseChild,
  };
}
