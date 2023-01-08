<template>
  <div :class="[classCp, `${CLS_PRE}-textarea`]" :style="styleCp">
    <textarea
      ref="textareaD"
      :value="modelValue"
      :placeholder="placeholder"
      v-bind="$attrs"
      :style="{
        ...styles,
        resize: resize,
      }"
      :class="[`${CLS_PRE}-textarea-content`]"
      @input="handleInput"
      @change="handleChange"
      @focus="handleFocus"
      @blur="handleBlur"
      @keyup.enter="handleEnter"
      @compositionstart="handleCompositionStart"
      @compositionupdate="handleCompositionUpdate"
      @compositionend="handleCompositionEnd"
    >
    </textarea>
    <span v-if="showWordLimit" :class="[`${CLS_PRE}-counter`]">
      {{ textLenCp }} / {{ maxLength }}
    </span>
  </div>
</template>

<script>
import { computed, defineComponent, ref, toRef } from 'vue';
import { useExpose } from './compos/useExpose';
import { useResize } from './compos/useResize';

import { COMP_NAME, CLS_PRE, EMITS, EMITS_DEC, PROPS_DES } from './config';
import { isNotUndefined } from '@/utils/type';
import { resetEditValue } from '@/utils/dom';

export default defineComponent({
  name: COMP_NAME,

  inheritAttrs: false,

  emits: EMITS_DEC,

  props: PROPS_DES,

  setup(props, { emit, expose }) {
    const textareaD = ref(null);

    const classCp = computed(() => props.class);

    const styleCp = computed(() => props.style);

    let isComposition = false;

    function handleInput(event) {
      if (isComposition) {
        return;
      }
      const data = event.target.value;
      let curData = data;
      if (isNotUndefined(props.maxLength) && data.length > props.maxLength) {
        curData = data.slice(0, props.maxLength);
        resetEditValue(textareaD.value, curData);
      }
      if (curData !== props.modelValue) {
        emit(EMITS.UPDATE_MODEL_VALUE, curData);
        emit(EMITS.INPUT, curData);
      }
    }

    function handleFocus(event) {
      emit(EMITS.FOCUS, event);
    }

    function handleBlur(event) {
      emit(EMITS.BLUR, event);
    }

    function handleEnter(event) {
      emit(EMITS.ENTER, event);
    }

    function handleCompositionStart(event) {
      isComposition = true;
      emit(EMITS.COMPOSITIONSTART, event);
    }

    function handleCompositionUpdate(event) {
      emit(EMITS.COMPOSITIONUPDATE, event);
    }

    function handleCompositionEnd(event) {
      isComposition = false;
      emit(EMITS.COMPOSITIONEND, event);
      handleInput(event);
    }

    const textLenCp = computed(() => String(props.modelValue).length);

    const { styles } = useResize(
      textareaD,
      toRef(props, 'modelValue'),
      toRef(props, 'width'),
      toRef(props, 'autosize')
    );

    const { clear, select, focus, blur } = useExpose(
      textareaD,
      toRef(props, 'modelValue')
    );

    function handleChange(v) {
      emit(EMITS.CHANGE, v.target.value);
    }

    expose({
      clear,
      select,
      focus,
      blur,
      ref: textareaD,
    });

    return {
      CLS_PRE,
      classCp,
      styleCp,
      textareaD,
      textLenCp,
      styles,
      handleInput,
      handleChange,
      handleFocus,
      handleBlur,
      handleEnter,
      handleCompositionStart,
      handleCompositionUpdate,
      handleCompositionEnd,
    };
  },
});
</script>

<style lang="scss" src="./css/index.scss"></style>
