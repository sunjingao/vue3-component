<template>
  <div
    :class="[
      `${CLS_PRE}-input`,
      classCp,
      {
        focus: isFocusRf,
        disabled: disabled,
      },
    ]"
    :style="{
      ...styleCp,
      width: width,
      height: height,
    }"
  >
    <slot name="front"></slot>

    <!--因为input有默认最小宽度，所以嵌套在div中进行宽度限制-->
    <input
      ref="inputD"
      v-bind="$attrs"
      :value="modelValue"
      :type="showPassword ? (isShowPwdIconRf ? 'text' : 'password') : type"
      :disabled="disabled"
      :class="[
        `${CLS_PRE}-input-content`,
        {
          disabled: disabled,
        },
      ]"
      :style="{
        fontSize: fz,
        textAlign: textAlign,
      }"
      @input="handleInput"
      @change="handleChange"
      @focus="handleFocus"
      @blur="handleBlur"
      @keyup.enter="handleEnter"
      @compositionstart="handleCompositionStart"
      @compositionupdate="handleCompositionUpdate"
      @compositionend="handleCompositionEnd"
    />

    <div v-if="showPassword" @click="handleTgPwd">
      <i
        v-show="isShowPwdIconRf"
        :class="['iconfont', 'icon-v-show-pwd', `${CLS_PRE}-icon`]"
      ></i>
      <i
        v-show="!isShowPwdIconRf"
        :class="['iconfont', 'icon-v-hide-pwd', `${CLS_PRE}-icon`]"
      ></i>
    </div>

    <!--清除图标 showValue -->
    <i
      v-if="clearable && String(modelValue).length > 0"
      @click="handleClear"
      :class="[
        `iconfont`,
        `icon-v-delete`,
        `${CLS_PRE}-icon`,
        {
          [`${CLS_PRE}-hidden`]: !modelValue,
        },
      ]"
    ></i>

    <slot name="behind"></slot>

    <span v-if="showWordLimit" :class="[`${CLS_PRE}-counter`]">
      {{ textLenCp }} / {{ maxLength }}
    </span>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from 'vue';
import { useExpose } from './compos/useExpose/index';
import { isNotUndefined } from '@/utils/type';
import { resetEditValue } from '@/utils/dom';

import { COMP_NAME, CLS_PRE, EMITS, EMITS_DEC, PROPS_DES } from './config';

export default defineComponent({
  name: COMP_NAME,

  inheritAttrs: false,

  emits: EMITS_DEC,

  props: PROPS_DES,

  setup(props, { emit, expose }) {
    const inputD = ref(null);

    const isFocusRf = ref(false);

    const isShowPwdIconRf = ref(false);

    const classCp = computed(() => props.class);

    const styleCp = computed(() => props.style);

    const textLenCp = computed(() => String(props.modelValue).length);

    // 中文处理标识
    let isComposition = false;

    function getInputVal(event) {
      let value = event.target.value;
      if (props.type === 'number') {
        if (String(value) === '') {
          return '';
        }

        if (value < props.min) {
          value = props.min;
        } else if (value > props.max) {
          value = props.max;
        }

        if (props.numberInt) {
          value = parseInt(value);
        } else {
          value = parseFloat(value);
        }
      }

      return value;
    }

    function getFitLenVal(value) {
      value = String(value);
      if (isNotUndefined(props.maxLength) && value.length > props.maxLength) {
        value = value.slice(0, props.maxLength);
      }
      value =
        props.type === 'number' && value !== '' ? parseFloat(value) : value;
      return value;
    }

    function resetLeaveNumberValue() {
      let value = props.modelValue;
      if (props.numberRequired && props.modelValue === '') {
        value = props.numberRequiredDefault;
        emit(EMITS.UPDATE_MODEL_VALUE, value);
      }
      resetEditValue(inputD.value, value);
    }

    function processNumber(event) {
      const inputVal = getInputVal(event);

      const correctVal = getFitLenVal(inputVal);

      if (String(correctVal) !== event.target.value) {
        resetEditValue(inputD.value, correctVal);
      }

      if (correctVal !== props.modelValue) {
        emit(EMITS.UPDATE_MODEL_VALUE, correctVal);
        emit(EMITS.INPUT, correctVal);
      }
    }

    function processNotNumber(event) {
      const eventVal = event.target.value;

      const inputVal = getInputVal(event);

      const correctVal = getFitLenVal(inputVal);

      if (correctVal !== eventVal) {
        resetEditValue(inputD.value, correctVal);
      }

      if (correctVal !== props.modelValue) {
        emit(EMITS.UPDATE_MODEL_VALUE, correctVal);
        emit(EMITS.INPUT, correctVal);
      }
    }

    function handleTgPwd() {
      isShowPwdIconRf.value = !isShowPwdIconRf.value;
    }

    function handleInput(event) {
      if (isComposition) {
        return;
      }
      if (props.type === 'number') {
        processNumber(event);
      } else {
        processNotNumber(event);
      }
    }

    function handleFocus(event) {
      isFocusRf.value = true;
      emit(EMITS.FOCUS, event);
    }

    function handleBlur(event) {
      if (props.type === 'number') {
        resetLeaveNumberValue();
      }
      isFocusRf.value = false;
      emit(EMITS.BLUR, event);
    }

    function handleChange(event) {
      if (props.type === 'number') {
        resetLeaveNumberValue();
      }
      emit(EMITS.CHANGE, event);
    }

    function handleEnter(event) {
      if (props.type === 'number') {
        resetLeaveNumberValue();
      }
      emit(EMITS.ENTER, event);
    }

    function handleClear(event) {
      inputD.value.focus();
      emit(EMITS.CLEAR, event);
      emit(EMITS.UPDATE_MODEL_VALUE, '');
      emit(EMITS.INPUT, '');
    }

    function handleCompositionStart(event) {
      isComposition = true;
      emit(EMITS.COMPOSITIONSTART, event);
    }

    function handleCompositionUpdate(event) {
      emit(EMITS.COMPOSITIONUPDATE, event);
    }

    function handleCompositionEnd(event) {
      emit(EMITS.COMPOSITIONEND, event);
      isComposition = false;
      handleInput(event);
    }

    const { select, focus, blur } = useExpose(inputD);

    expose({
      focus,
      blur,
      select,
      clear: handleClear,
      ref: inputD,
    });

    return {
      CLS_PRE,
      classCp,
      styleCp,
      inputD,
      isFocusRf,
      isShowPwdIconRf,
      textLenCp,
      handleFocus,
      handleBlur,
      handleEnter,
      handleClear,
      handleInput,
      handleChange,
      handleTgPwd,
      handleCompositionStart,
      handleCompositionUpdate,
      handleCompositionEnd,
    };
  },
});
</script>

<style lang="scss" src="./css/index.scss" scoped></style>
