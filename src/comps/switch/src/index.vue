<template>
  <div
    @click="handleToggle"
    :class="[`${CLS_PRE}-switch`, { disabled: disabled }]"
  >
    <div
      v-if="$slots.before"
      :class="[`${CLS_PRE}-switch-before`]"
      :style="{
        color: modelValue ? inactiveFontColor : activeFontColor,
      }"
    >
      <slot name="before"></slot>
    </div>

    <div
      :class="[`${CLS_PRE}-switch-middle`]"
      :style="{
        width: `${width}px`,
        height: `${height}px`,
        border: `1px solid ${modelValue ? activeBgColor : inactiveBgColor}`,
        borderRadius: `${height}px`,
        backgroundColor: modelValue ? activeBgColor : inactiveBgColor,
      }"
    >
      <i
        :class="[`${CLS_PRE}-switch-middle-move-circle`]"
        :style="{
          width: `${height - 2}px`,
          height: `${height - 2}px`,
          left: `${circleLeftCp}px`,
          backgroundColor: circleBgColor,
        }"
      ></i>
    </div>

    <div
      v-if="$slots.behind"
      :class="[`${CLS_PRE}-switch-behind`]"
      :style="{
        color: modelValue ? activeFontColor : inactiveFontColor,
      }"
    >
      <slot name="behind"></slot>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';

import { COMP_NAME, CLS_PRE, EMITS, EMITS_DEC, PROPS_DES } from './config';

export default defineComponent({
  name: COMP_NAME,

  emits: EMITS_DEC,

  props: PROPS_DES,

  setup(props, { emit, expose }) {
    const circleLeftCp = computed(() => {
      return props.modelValue ? props.width - props.height : 0;
    });

    function handleToggle() {
      if (props.disabled) {
        return;
      }
      emit(EMITS.UPDATE_MODEL_VALUE, !props.modelValue);
      emit(EMITS.CHANGE, !props.modelValue);
    }

    expose();

    return {
      CLS_PRE,
      circleLeftCp,
      handleToggle,
    };
  },
});
</script>

<style lang="scss" src="./css/index.scss" scoped></style>
