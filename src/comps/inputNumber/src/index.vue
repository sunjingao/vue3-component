<template>
  <v-input
    v-model="inputValueCp"
    :class="[`${CLS_PRE}-input-number`]"
    type="number"
    :width="width"
    :height="height"
    :max="max"
    :min="min"
    :disabled="disabled"
    @change="handleChange"
    text-align="center"
  >
    <!--触发区域在左右-->
    <template #front>
      <div
        v-if="controlsPosition === 'bothSides'"
        :class="[
          `${CLS_PRE}-input-number-front`,
          {
            disabled: !isCanDecCp,
          },
        ]"
        :style="{
          lineHeight: `calc(${height} - 2px)`,
          height: `calc(${height} - 2px)`,
        }"
        v-repeat-click="handleDecrease"
      >
        <span :class="[`iconfont`, `icon-v-decrease`]"></span>
      </div>
    </template>
    <template #behind>
      <div
        v-if="controlsPosition === 'bothSides'"
        :class="[`${CLS_PRE}-input-number-behind`, { disabled: !isCanIncCp }]"
        :style="{
          lineHeight: `calc(${height} - 2px)`,
          height: `calc(${height} - 2px)`,
        }"
        v-repeat-click="handleIncrease"
      >
        <span :class="[`iconfont`, `icon-v-increase`]"></span>
      </div>
      <div v-else :class="[`${CLS_PRE}-input-number-right`]">
        <div
          :class="[`${CLS_PRE}-input-number-top`, { disabled: !isCanIncCp }]"
          :style="{
            lineHeight: `calc((${height} - 2px) / 2)`,
            height: `calc((${height} - 2px) / 2)`,
          }"
          v-repeat-click="handleIncrease"
        >
          <span :class="[`iconfont`, `icon-v-increase`]"></span>
        </div>
        <div
          :class="[`${CLS_PRE}-input-number-bottom`, { disabled: !isCanDecCp }]"
          :style="{
            lineHeight: `calc((${height} - 2px) / 2)px`,
            height: `calc((${height} - 2px) / 2)px`,
          }"
          v-repeat-click="handleDecrease"
        >
          <span :class="[`iconfont`, `icon-v-decrease`]"></span>
        </div>
      </div>
    </template>
  </v-input>
</template>

<script>
import repeatClick from '@/directives/repeatclick/index.js';
import { defineComponent, computed } from 'vue';

import { COMP_NAME, CLS_PRE, EMITS, EMITS_DEC, PROPS_DES } from './config';

export default defineComponent({
  name: COMP_NAME,

  directives: {
    repeatClick: repeatClick,
  },

  emits: EMITS_DEC,

  props: PROPS_DES,

  setup(props, { emit, expose }) {
    const inputValueCp = computed({
      get() {
        return props.modelValue;
      },
      set(data) {
        emit(EMITS.UPDATE_MODEL_VALUE, data);
        emit(EMITS.INPUT, data);
      },
    });

    const isCanDecCp = computed(() => {
      return !props.disabled && inputValueCp.value - props.step >= props.min;
    });
    const isCanIncCp = computed(() => {
      return !props.disabled && inputValueCp.value + props.step <= props.max;
    });

    // 点击减小按钮
    function handleDecrease() {
      if (!isCanDecCp.value) {
        return;
      }
      inputValueCp.value -= props.step;
    }

    // 点击增加按钮
    function handleIncrease() {
      if (!isCanIncCp.value) {
        return;
      }
      inputValueCp.value += props.step;
    }

    function handleChange(val) {
      inputValueCp.value = val;
    }

    expose();

    return {
      CLS_PRE,
      inputValueCp,
      isCanDecCp,
      isCanIncCp,
      handleDecrease,
      handleIncrease,
      handleChange,
    };
  },
});
</script>

<style lang="scss" src="./css/index.scss" scoped></style>
