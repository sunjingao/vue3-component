<template>
  <div :class="[`${CLS_PRE}-date-picker`, `v-popper`]">
    <div :class="[`${CLS_PRE}-popper-content`]">
      <div :class="[`title`]">
        <div :class="[`year`]">
          <div :class="[`left-year`]" @click="handleTitle(OPERATE.MIN_YEAR)">
            &lt;&lt;
          </div>
          <div :class="[`left-month`]" @click="handleTitle(OPERATE.MIN_MONTH)">
            &lt;
          </div>
          <div :class="[`year-and-month`]">
            <span :class="[`year`]">{{ shownYearRf }}</span>
            <span> 年 </span>
            <span :class="[`month`]">{{ shownMonthRf }}</span>
            <span> 月</span>
          </div>
          <div :class="[`right-year`]" @click="handleTitle(OPERATE.ADD_MONTH)">
            &gt;
          </div>
          <div :class="[`right-month`]" @click="handleTitle(OPERATE.ADD_YEAR)">
            &gt;&gt;
          </div>
        </div>
        <div :class="[`week`]">
          <div v-for="(item, index) in WEEK_SEQ" :key="index">
            {{ item.label }}
          </div>
        </div>
      </div>

      <div :class="[`content`]">
        <div
          v-for="(item, index) in itemArrRf"
          @click.stop="handleConfirm(item, index)"
          :class="[
            {
              disabled: item.isDisabled,
              selected: item.isSelected,
              'can-select': !item.isDisabled,
              'not-self-month': item.month !== shownMonthRf - 1,
            },
          ]"
          :key="index"
        >
          {{ item.date }}
        </div>
      </div>
    </div>
    <div :class="[`${CLS_PRE}-popper-arrow`]"></div>
  </div>
</template>

<script>
import { defineComponent, toRef } from 'vue';

import {
  COMP_NAME,
  CLS_PRE,
  EMITS,
  EMITS_DEC,
  PROPS_DES,
  WEEK_SEQ,
} from './config';
import { useData } from '@/comps/datepicker/src/comps/datePicker/compos/useData';

const OPERATE = {
  ADD_YEAR: 'add_year',
  MIN_YEAR: 'min_year',
  ADD_MONTH: 'add_month',
  MIN_MONTH: 'min_month',
};

export default defineComponent({
  name: COMP_NAME,

  emits: EMITS_DEC,

  props: PROPS_DES,

  setup(props, { emit, expose }) {
    const { shownYearRf, shownMonthRf, itemArrRf, setContent } = useData(
      toRef(props, 'range'),
      toRef(props, 'selectedDate')
    );

    function handleTitle(type) {
      let year = shownYearRf.value;
      let month = shownMonthRf.value - 1;

      if (type === OPERATE.MIN_YEAR) {
        --year;
      } else if (type === OPERATE.MIN_MONTH) {
        --month;
      } else if (type === OPERATE.ADD_MONTH) {
        month++;
      } else if (type === OPERATE.ADD_YEAR) {
        year++;
      }

      const time = new Date(year, month);
      shownYearRf.value = time.getFullYear();
      shownMonthRf.value = time.getMonth() + 1;

      setContent();
    }

    function handleConfirm(item) {
      if (item.isDisabled) {
        return;
      }
      emit(EMITS.SELECT, {
        year: item.year,
        month: item.month + 1,
        date: item.date,
      });
    }

    expose();

    return {
      CLS_PRE,
      OPERATE,
      WEEK_SEQ,
      shownYearRf,
      shownMonthRf,
      itemArrRf,
      handleTitle,
      handleConfirm,
    };
  },
});
</script>

<style lang="scss" src="./css/index.scss" scoped></style>
