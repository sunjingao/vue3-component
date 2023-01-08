<template>
  <div :class="[`${CLS_PRE}-pagination`]">
    <pager
      v-show="layoutArrRf.includes('pager')"
      :style="{ order: layoutArrRf.indexOf('pager') }"
      v-model="inputValueRf"
      :total="pagerTotalRf"
      :isButton="isButton"
      @pageChange="handlePageChange"
    ></pager>
    <jumper
      v-show="layoutArrRf.includes('jumper')"
      :style="{ order: layoutArrRf.indexOf('jumper') }"
      :modelValue="inputValueRf"
      :total="total"
      @update:modelValue="handleChangeCurPage"
    ></jumper>
    <sizes
      v-show="layoutArrRf.includes('sizes')"
      :selectArr="selectArr"
      :pageSize="pageSize"
      :style="{ order: layoutArrRf.indexOf('sizes') }"
      @selectChange="handleSelectChange"
    ></sizes>
    <total
      v-show="layoutArrRf.includes('total')"
      :total="total"
      :style="{ order: layoutArrRf.indexOf('total') }"
    ></total>
  </div>
</template>

<script>
import { computed, defineComponent, ref, watch } from 'vue';

import jumper from './comps/jumper/index';
import pager from './comps/pager/index';
import sizes from './comps/sizes/index';
import total from './comps/total/index';

import { COMP_NAME, CLS_PRE, EMITS, EMITS_DEC, PROPS_DES } from './config';

export default defineComponent({
  name: COMP_NAME,

  components: { jumper, pager, sizes, total },

  emits: EMITS_DEC,

  props: PROPS_DES,

  setup(props, { emit, expose }) {
    const inputValueRf = ref(0);
    const pagerTotalRf = ref(0);

    const layoutArrRf = computed(() => {
      return props.layout ? [...props.layout] : ['pager'];
    });

    function initInputValue() {
      inputValueRf.value = 1;
    }

    function setPagerTotalRf(val) {
      if (props.total <= 0) {
        pagerTotalRf.value = 0;
      } else {
        pagerTotalRf.value = Math.ceil(props.total / val);
      }
    }

    function handlePageChange(val) {
      emit(EMITS.PAGE_CHANGE, val);
    }

    // 当输入框发生失去焦点或回车事件时，触发
    function handleChangeCurPage(val) {
      inputValueRf.value = val;
      emit(EMITS.PAGE_CHANGE, val);
    }

    // 下拉框改变时的操作
    function handleSelectChange(val) {
      initInputValue();
      setPagerTotalRf(val);
      emit(EMITS.SELECT_CHANGE, val);
    }

    watch(
      () => props.total,
      () => {
        initInputValue();
        setPagerTotalRf(props.pageSize);
      },
      {
        immediate: true,
      }
    );

    expose();

    return {
      CLS_PRE,
      layoutArrRf,
      pagerTotalRf,
      inputValueRf,
      handlePageChange,
      handleChangeCurPage,
      handleSelectChange,
    };
  },
});
</script>

<style lang="scss" src="./css/index.scss" scoped></style>
