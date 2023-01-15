import { computed, getCurrentInstance, ref, watch } from 'vue';
import { EMITS } from '@/comps/tree/src/config';

export function useSelected(selectedOpsRf) {
  const { emit } = getCurrentInstance();

  // 选中节点key值数组
  const selectedKeyRf = ref('');

  const isParentSelectedCp = computed(() => {
    return selectedOpsRf.value && selectedOpsRf.value.parentSelected;
  });

  watch(
    () => selectedOpsRf.value,
    () => {
      selectedKeyRf.value = selectedOpsRf.value.defaultSelected;
    },
    {
      immediate: true,
      deep: true,
    }
  );

  function changeSelect(item) {
    selectedKeyRf.value = item.key;
    emit(EMITS.SELECT, item);
  }

  return {
    selectedKeyRf,
    isParentSelectedCp,
    changeSelect,
  };
}
