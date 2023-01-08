<template>
  <div :class="[`hour-and-minute-and-second-part`]">
    <ul
      v-for="(time, name) in contentCp"
      :ref="`${name}D`"
      :class="[
        `${CLS_PRE}-hour-or-minute-or-second-part_ul`,
        `${CLS_PRE}-hover-show-scrollbar`,
      ]"
      :style="{
        height: `${itemHeight * 5}px`,
        lineHeight: `${itemHeight}px`,
        width: `${itemWidth}px`,
      }"
      :key="name"
      @scroll="handleScroll(`${name}`)"
    >
      <li
        v-for="(item, itemIndex) in time"
        @click="handleClick(`${name}`, item, itemIndex)"
        :class="[
          'type',
          {
            selected: item.isSelected,
            'is-disabled': item.isDisabled,
          },
        ]"
        :style="{
          height: `${itemHeight}px`,
          width: `${contentWidthCp}px`,
        }"
        :key="itemIndex"
      >
        {{ item.value }}
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent, toRef, watch } from 'vue';
import { useContentWidth } from './compos/useContentWidth';
import { useScroll } from './compos/useScroll';

import { COMP_NAME, CLS_PRE, EMITS_DEC, PROPS_DES } from './config';
import { useData } from '@/comps/timepicker/src/comps/auto/comps/picker/compos/useData';
import { getDom } from '@/comps/timepicker/src/utils';

export default defineComponent({
  name: COMP_NAME,

  emits: EMITS_DEC,

  props: PROPS_DES,

  setup(props, { expose }) {
    const { contentCp } = useData(
      toRef(props, 'modelValue'),
      toRef(props, 'range')
    );

    const contentWidthCp = useContentWidth(toRef(props, 'itemWidth'));

    const {
      hourD,
      minuteD,
      secondD,
      scrollByTypeAIndex,
      scrollToSelected,
      handleScroll,
    } = useScroll(contentCp, toRef(props, 'itemHeight'));

    function handleClick(type, item, itemIndex) {
      scrollByTypeAIndex(type, itemIndex);
    }

    watch(
      () => props.isShowPopper,
      () => {
        if (props.isShowPopper) {
          scrollToSelected();
        }
      }
    );

    watch(
      () => props.modelValue,
      () => {
        scrollToSelected();
      },
      {
        deep: true,
      }
    );

    function getVal() {
      const hourIndex =
        Math.round(getDom(hourD).scrollTop / props.itemHeight) + 2;
      const minuteIndex =
        Math.round(getDom(minuteD).scrollTop / props.itemHeight) + 2;
      const secondIndex =
        Math.round(getDom(secondD).scrollTop / props.itemHeight) + 2;

      const hourItem = contentCp.value.hour[hourIndex];
      const minuteItem = contentCp.value.minute[minuteIndex];
      const secondItem = contentCp.value.second[secondIndex];

      return {
        hour: hourItem.value,
        minute: minuteItem.value,
        second: secondItem.value,
      };
    }

    function getIsScrollDisabled() {
      const hourIndex =
        Math.round(getDom(hourD).scrollTop / props.itemHeight) + 2;
      const minuteIndex =
        Math.round(getDom(minuteD).scrollTop / props.itemHeight) + 2;
      const secondIndex =
        Math.round(getDom(secondD).scrollTop / props.itemHeight) + 2;

      const hourItem = contentCp.value.hour[hourIndex];
      const minuteItem = contentCp.value.minute[minuteIndex];
      const secondItem = contentCp.value.second[secondIndex];

      return (
        hourItem.isDisabled || minuteItem.isDisabled || secondItem.isDisabled
      );
    }

    function getIsSelectedDisabled() {
      const selectedHourItem = contentCp.value.hour.find(
        (item) => item.isSelected
      );
      const selectedMinuteItem = contentCp.value.minute.find(
        (item) => item.isSelected
      );
      const selectedSecondItem = contentCp.value.second.find(
        (item) => item.isSelected
      );
      return (
        (selectedHourItem && selectedHourItem.isDisabled) ||
        (selectedMinuteItem && selectedMinuteItem.isDisabled) ||
        (selectedSecondItem && selectedSecondItem.isDisabled)
      );
    }

    expose({
      getVal,
      getIsScrollDisabled,
      getIsSelectedDisabled,
    });

    return {
      CLS_PRE,
      hourD,
      minuteD,
      secondD,
      contentWidthCp,
      contentCp,
      handleClick,
      handleScroll,
    };
  },
});
</script>

<style lang="scss" src="./css/index.scss" scoped></style>
