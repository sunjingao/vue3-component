<template>
  <div :class="[`${CLS_PRE}-progress`]">
    <template v-if="type === 'line'">
      <div :class="[`out-line`]" :style="{ width: width, height: height }">
        <div :class="[`line`]" :style="{ borderRadius: `calc(${height} / 2)` }">
          <div
            :class="[`finished`]"
            :style="{
              width: `${percentage}%`,
              height: height,
              borderRadius: `calc(${height} / 2)`,
              backgroundColor: bgColorCp,
            }"
          ></div>
        </div>
        <template v-if="$slots.text">
          <div :class="[`text`]">
            <slot name="text"></slot>
          </div>
        </template>
        <div
          v-else
          :style="{
            width: textWidth,
            left: textInside
              ? `calc(${percentage}% - ${textWidth} - 10px)`
              : 'auto',
          }"
          :class="[`text`, { inside: textInside }]"
        >
          {{ textCp }}
        </div>
      </div>
    </template>
    <template v-else>
      <div :class="[`circle`]" :style="{ width: diameter, height: diameter }">
        <div
          :class="[`inner`]"
          :style="{
            width: `calc(${diameter} - ${height} * 2)`,
            height: `calc(${diameter} - ${height} * 2)`,
            marginTop: height,
            marginLeft: height,
          }"
        ></div>

        <div :class="[`right`]">
          <div
            :class="[`right-finish`]"
            :style="{ transform: rightDegCp, backgroundColor: bgColor }"
          ></div>
        </div>

        <div :class="[`left`]">
          <div
            :class="[`left-finish`]"
            :style="{ transform: leftDeg, backgroundColor: bgColor }"
          ></div>
        </div>

        <div :class="[`text`]">{{ textCp }}</div>
      </div>
    </template>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';

import { COMP_NAME, CLS_PRE, EMITS_DEC, PROPS_DES } from './config';

export default defineComponent({
  name: COMP_NAME,

  emits: EMITS_DEC,

  props: PROPS_DES,

  setup(props, { expose }) {
    const textCp = computed(() => {
      return props.format
        ? props.format(props.percentage)
        : `${props.percentage}%`;
    });

    const bgColorCp = computed(() => {
      const colorType = typeof props.bgColor;
      if (colorType === 'string') {
        return props.bgColor;
      } else if (colorType === 'object') {
        const arr = [...props.bgColor];
        arr.sort((a, b) => a.percentage - b.percentage);
        return arr.find((item) => props.percentage <= item.percentage).bgColor;
      } else if (colorType === 'function') {
        return props.bgColor(props.percentage);
      } else {
        return '';
      }
    });

    const rightDegCp = computed(() => {
      const deg = (props.percentage > 50 ? 1 : props.percentage / 50) * 180;
      return `rotate(${deg}deg)`;
    });

    const leftDeg = computed(() => {
      const percentage = props.percentage - 50;
      const deg = (percentage <= 0 ? 0 : percentage / 50) * 180;
      return `rotate(${deg}deg)`;
    });

    expose();

    return {
      CLS_PRE,
      textCp,
      bgColorCp,
      rightDegCp,
      leftDeg,
    };
  },
});
</script>

<style lang="scss" src="./css/index.scss" scoped></style>
