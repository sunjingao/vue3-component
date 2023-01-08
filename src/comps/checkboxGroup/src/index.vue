<template>
  <div :class="[`${CLS_PRE}-checkbox-group`]">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent, reactive, provide, toRef } from 'vue';

import {
  COMP_NAME,
  CLS_PRE,
  EMITS,
  EMITS_DEC,
  PROPS_DES,
  PROVIDE_KEY,
} from './config';

export default defineComponent({
  name: COMP_NAME,

  emits: EMITS_DEC,

  props: PROPS_DES,

  setup(props, { emit, expose }) {
    function changeMV(val) {
      emit(EMITS.UPDATE_MODEL_VALUE, val);
      emit(EMITS.CHANGE, val);
    }

    provide(
      PROVIDE_KEY,
      reactive({
        border: toRef(props, 'border'),
        modelValue: toRef(props, 'modelValue'),
        disabled: toRef(props, 'disabled'),
        isIndeterminate: toRef(props, 'isIndeterminate'),
        changeMV,
      })
    );

    expose();

    return {
      CLS_PRE,
    };
  },
});
</script>

<style lang="scss" src="./css/index.scss" scoped></style>
