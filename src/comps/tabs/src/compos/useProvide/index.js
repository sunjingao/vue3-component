import { computed, reactive, ref, toRefs } from 'vue';

export function useProvide(modelValueRf, closableRf) {
  const regisInfoArrRf = ref([]);

  function register(item) {
    const isHoverRf = ref(false);
    const isShowCloseCp = computed(
      () =>
        closableRf.value &&
        ((!item.disabled && isHoverRf.value) || item.isActiveCp)
    );
    item = reactive({
      isShow: true,
      isHoverRf,
      isShowCloseCp,
      ...toRefs(item),
    });
    regisInfoArrRf.value.push(item);
  }

  function destroyItem(sign) {
    const index = regisInfoArrRf.value.indexOf(sign);
    regisInfoArrRf.value.splice(index, 1);
  }

  return {
    regisInfoArrRf,
    register,
    destroyItem,
  };
}
