<template>
  <div :class="[`${CLS_PRE}-rate`]">
    <div :class="[`${CLS_PRE}-rate-content`]" @mouseout="handleMouseout">
      <div v-for="(_, index) in max" :class="[`${CLS_PRE}-item`]" :key="index">
        <div
          :class="[
            `iconfont`,
            `icon-v-rateDefault`,
            `${CLS_PRE}-mr5`,
            `${CLS_PRE}-pr`,
            disabled ? '${CLS_PRE}-cna' : '${CLS_PRE}-rate-pointer',
          ]"
          @mouseover="handleOver(index)"
          @click="handleClick(index)"
        >
          <div
            :class="[
              `iconfont`,
              `icon-v-rateDefault`,
              `${CLS_PRE}-hidden`,
              `${CLS_PRE}-pa1`,
              `${CLS_PRE}-item-score-select`,
              `${CLS_PRE}-rate-item-select-color`,
            ]"
            :style="{ width: getWidth(index) }"
          ></div>
        </div>
      </div>
    </div>
    <span :class="[`${CLS_PRE}-font`]">
      {{ texts[shownIndexRf] }}
    </span>
  </div>
</template>

<script>
import { defineComponent, ref, watch } from 'vue';

import { COMP_NAME, CLS_PRE, EMITS, EMITS_DEC, PROPS_DES } from './config';

export default defineComponent({
  name: COMP_NAME,

  emits: EMITS_DEC,

  props: PROPS_DES,

  setup(props, { emit, expose }) {
    const shownIndexRf = ref(props.modelValue - 1);

    function handleOver(overIndex) {
      if (props.disabled) {
        return;
      }
      shownIndexRf.value = overIndex;
    }

    function handleMouseout() {
      if (props.disabled) {
        return;
      }
      shownIndexRf.value = props.modelValue - 1;
    }

    function handleClick(index) {
      if (props.disabled || props.modelValue === index + 1) {
        return;
      }
      shownIndexRf.value = index;
      emit(EMITS.UPDATE_MODEL_VALUE, index + 1);
      emit(EMITS.CHANGE, index + 1);
    }

    function getWidth(index) {
      let percent = 0;
      if (shownIndexRf.value - index >= 0) {
        return '100%';
      } else if (shownIndexRf.value - index > -1) {
        percent = `${(shownIndexRf.value + 1 - index) * 100}%`;
      } else {
        percent = 0;
      }
      return percent;
    }

    watch(
      () => props.modelValue,
      () => {
        shownIndexRf.value = props.modelValue - 1;
      }
    );

    expose();

    return {
      CLS_PRE,
      shownIndexRf,
      handleMouseout,
      handleOver,
      handleClick,
      getWidth,
    };
  },
});
</script>

<style lang="scss" src="./css/index.scss" scoped></style>
