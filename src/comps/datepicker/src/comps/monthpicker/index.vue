<template>
  <div :class="[`${CLS_PRE}-month-picker`, `${CLS_PRE}-popper`]">
    <div :class="[`${CLS_PRE}-popper-content`]">
      <div :class="[`title`]">
        <div @click="handleYears(OPERATE_NUM.MIN_YEAR)">&lt;&lt;</div>
        <div>{{ shownYearRf }}</div>
        <div @click="handleYears(OPERATE_NUM.ADD_YEAR)">&gt;&gt;</div>
      </div>
      <div :class="[`content`]">
        <div
          v-for="(item, index) in itemArrRf"
          @click.stop="handleConfirm(item)"
          :class="[
            item.isDisabled ? 'disabled' : 'able',
            {
              selected: item.isSelected,
            },
          ]"
          :key="index"
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
import { useData } from '@/comps/datepicker/src/comps/monthpicker/compos/useData';

const OPERATE_NUM = {
  ADD_YEAR: 1,
  MIN_YEAR: -1,
};

export default defineComponent({
  name: COMP_NAME,

  emits: EMITS_DEC,

  props: PROPS_DES,

  setup(props, { emit, expose }) {
    const { shownYearRf, itemArrRf, setContent } = useData(
      toRef(props, 'range'),
      toRef(props, 'selectedDate')
    );

    // 进行前十年或后十年的操作时
    function handleYears(num) {
      shownYearRf.value = shownYearRf.value + num; // 标题
      setContent();
    }

    // 选中某个时间点的时候
    function handleConfirm(item) {
      if (item.isDisabled) {
        return;
      }

      emit(EMITS.SELECT, {
        year: shownYearRf.value,
        month: item.monthIndex + 1,
      });
    }

    expose();

    return {
      CLS_PRE,
      OPERATE_NUM,
      shownYearRf,
      itemArrRf,
      handleYears,
      handleConfirm,
    };
  },
});
</script>

<style lang="scss" src="./css/index.scss" scoped></style>
