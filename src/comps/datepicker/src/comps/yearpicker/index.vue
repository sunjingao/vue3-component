<template>
  <div :class="[`${CLS_PRE}-year-picker`, `${CLS_PRE}-popper`]">
    <div :class="[`${CLS_PRE}-popper-content`]">
      <div :class="[`title`]">
        <div @click="handleYears(OPERATE_NUM.MIN_YEAR)">&lt;&lt;</div>
        <div>{{ startYearRf }}-{{ endYearRf }}</div>
        <div @click="handleYears(OPERATE_NUM.ADD_YEAR)">&gt;&gt;</div>
      </div>
      <div :class="[`content`]">
        <div
          v-for="(item, index) in itemArrRf"
          :key="index"
          :class="[
            {
              disabled: item.isDisabled,
              enable: !item.isDisabled,
              selected: item.isSelected,
            },
          ]"
          @click.stop="handleConfirm(item)"
        >
          {{ item.value }}
        </div>
      </div>
    </div>
    <div :class="[`${CLS_PRE}-popper-arrow`]"></div>
  </div>
</template>

<script>
import { defineComponent, toRef } from 'vue';

import { COMP_NAME, CLS_PRE, EMITS, EMITS_DEC, PROPS_DES } from './config';
import { useData } from '@/comps/datepicker/src/comps/yearpicker/compos/useData';

const OPERATE_NUM = {
  ADD_YEAR: 10,
  MIN_YEAR: -10,
};

export default defineComponent({
  name: COMP_NAME,

  emits: EMITS_DEC,

  props: PROPS_DES,

  setup(props, { emit, expose }) {
    const { startYearRf, endYearRf, itemArrRf, setContent } = useData(
      toRef(props, 'range'),
      toRef(props, 'selectedDate')
    );

    // 进行前十年或后十年的操作时
    function handleYears(num) {
      startYearRf.value = startYearRf.value + num;
      endYearRf.value = endYearRf.value + num;

      setContent();
    }

    // 选中某个时间点的时候
    function handleConfirm(item) {
      if (item.isDisabled) {
        return;
      }

      emit(EMITS.SELECT, {
        year: item.value,
      });
    }

    expose();

    return {
      CLS_PRE,
      OPERATE_NUM,
      startYearRf,
      endYearRf,
      itemArrRf,
      setContent,
      handleYears,
      handleConfirm,
    };
  },
});
</script>

<style lang="scss" src="./css/index.scss" scoped></style>
