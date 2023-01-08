import { ref } from 'vue';

export function useProvide() {
  const regisInfoArrRf = ref([]);

  function register(val) {
    regisInfoArrRf.value.push(val);
  }

  return {
    regisInfoArrRf,
    register,
  };
}
