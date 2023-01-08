import { computed, ref } from 'vue';

export function useProvide() {
  const regisInfoArrRf = ref([]);

  function register(val) {
    regisInfoArrRf.value.push(val);
  }

  function getIsLastCp(val) {
    return computed(() => {
      return (
        regisInfoArrRf.value.indexOf(val) === regisInfoArrRf.value.length - 1
      );
    });
  }

  function destroyItem(val) {
    const index = regisInfoArrRf.value.indexOf(val);
    regisInfoArrRf.value.splice(index, 1);
  }

  return {
    register,
    getIsLastCp,
    destroyItem,
  };
}
