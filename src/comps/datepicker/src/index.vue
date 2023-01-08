<template>
  <div
    ref="referenceD"
    :class="[`${CLS_PRE}-date-picker`]"
    :style="{ width: width }"
    v-click-outside="handleClickOutside"
  >
    <!--input组件-->
    <v-input
      ref="inputD"
      :readonly="!editable"
      :modelValue="inputValueCp"
      :placeholder="placeholder"
      :width="width"
      :height="height"
      :clearable="clearable"
      @clear="handleClear"
      @blur="handleBlur"
      @keydown.enter="handleEnter"
      @keydown.esc="handleEsc"
    >
      <template #front>
        <i
          :class="[`iconfont`, `icon-v-date`, `${CLS_PRE}-date-picker-front`]"
        ></i>
      </template>
      <template #behind>
        <i
          :class="[`iconfont`, `icon-v-down`, `arrow`, { up: isShowPopperRf }]"
        ></i>
      </template>
    </v-input>

    <div ref="popperD">
      <component
        v-if="type === 'year'"
        :is="'year-picker'"
        :range="range"
        :selectedDate="selectedDateRt"
        @select="handleSelect"
      ></component>
      <component
        v-if="type === 'month'"
        :is="'month-picker'"
        :range="range"
        :selectedDate="selectedDateRt"
        @select="handleSelect"
      ></component>
      <component
        v-if="type === 'date'"
        :is="'date-picker'"
        :range="range"
        :selectedDate="selectedDateRt"
        @select="handleSelect"
      ></component>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, toRef } from 'vue';

import datePicker from './comps/datePicker/index.vue';
import monthPicker from './comps/monthpicker/index.vue';
import yearPicker from './comps/yearpicker/index.vue';

import clickOutside from '@/directives/clickoutside/index';
import { usePopper } from '@/hooks/usePopper';
import { useSelectedData } from '@/comps/datepicker/src/compos/useSelectedData';
import { useInput } from '@/comps/datepicker/src/compos/useInput';
import { COMP_NAME, CLS_PRE, EMITS_DEC, PROPS_DES } from './config';

export default defineComponent({
  name: COMP_NAME,

  directives: {
    clickOutside: clickOutside,
  },

  components: {
    datePicker: datePicker,
    monthPicker: monthPicker,
    yearPicker: yearPicker,
  },

  emits: EMITS_DEC,

  props: PROPS_DES,

  setup(props, { expose }) {
    const inputD = ref(null);

    const { referenceD, popperD, showPopper, hidePopper, isShowPopperRf } =
      usePopper();

    const { selectedDateRt, setSelectedValue } = useSelectedData(
      toRef(props, 'defaultTime'),
      toRef(props, 'range'),
      toRef(props, 'type')
    );

    const { inputValueCp, handleClear, handleEnter, handleEsc, handleBlur } =
      useInput(
        toRef(props, 'type'),
        toRef(props, 'separator'),
        toRef(props, 'editable'),
        toRef(props, 'range'),
        inputD,
        selectedDateRt,
        hidePopper,
        setSelectedValue
      );

    function handleClickOutside(sign) {
      if (sign) {
        hidePopper();
      } else {
        showPopper();
      }
    }

    // 用户选中时间
    function handleSelect(value) {
      hidePopper();
      setSelectedValue(value);
    }

    expose();

    return {
      CLS_PRE,
      referenceD,
      popperD,
      inputD,
      isShowPopperRf,
      inputValueCp,
      handleClickOutside,
      handleClear,
      handleEnter,
      handleEsc,
      handleBlur,
      handleSelect,
      selectedDateRt,
    };
  },
});
</script>

<style lang="scss" src="./css/index.scss" scoped></style>
