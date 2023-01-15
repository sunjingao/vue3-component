<template>
  <div :class="[`${CLS_PRE}-panel`]">
    <tip
      v-for="(item, index) in shownArrCp"
      :key="index"
      :item="item"
      :index="index"
      :itemWidth="itemWidth"
      :popperMaxHeight="popperMaxHeight"
      :itemHeight="itemHeight"
      :hoverTrigger="hoverTrigger"
      :style="{
        marginLeft: (index > 0 ? -1 : 0) + 'px',
      }"
      @mouseEnter="handleMouseEnter"
      @select="handleSelect"
    >
      <template #default="{ item }" v-if="$slots.default">
        <slot :item="item"></slot>
      </template>
    </tip>
  </div>
</template>

<script>
import { computed, defineComponent, toRef } from 'vue';

import { COMP_NAME, CLS_PRE, EMITS, EMITS_DEC, PROPS_DES } from './config';

import tip from './comps/tip/index';
import { useData } from '@/comps/cascader/src/comps/auto/compos/useData';

export default defineComponent({
  name: COMP_NAME,

  components: {
    tip,
  },

  emits: EMITS_DEC,

  props: PROPS_DES,

  setup(props, { emit, expose }) {
    const { selectedArrRf, shownArrRf, shownArrCp } = useData(
      toRef(props, 'modelValue'),
      toRef(props, 'options')
    );

    function emitSelected() {
      emit(EMITS.SELECT, selectedArrRf.value);
    }

    function handleMouseEnter(item, arrIndex) {
      shownArrRf.value.splice(arrIndex, shownArrRf.value.length, item);
      emit(EMITS.MOUSE_ENTER);
    }

    function handleSelect(item) {
      selectedArrRf.value = [...shownArrRf.value, item];
      emitSelected();
    }

    // 清除input框中的内容
    function clear() {
      selectedArrRf.value = [];
      shownArrRf.value = [];
      emit(EMITS.SELECT, []);
    }

    // 禁止外部修改
    const selectedArrCp = computed(() => selectedArrRf.value);

    expose({
      clear,
      selectedArrCp,
    });

    return {
      CLS_PRE,
      shownArrCp,
      handleMouseEnter,
      handleSelect,
    };
  },
});
</script>

<style lang="scss" src="./css/index.scss" scoped></style>
