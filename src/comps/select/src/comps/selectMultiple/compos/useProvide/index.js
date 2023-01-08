import { ref } from 'vue';

export function useProvide() {
  const regisInfoArrRf = ref([]);

  function register(obj) {
    regisInfoArrRf.value.push(obj);
  }

  function deleteItem(ins) {
    const index = regisInfoArrRf.value.indexOf(ins);
    regisInfoArrRf.value.splice(index, 1);
  }
  return {
    regisInfoArrRf,
    register,
    deleteItem,
  };
}
