<template>
  <div :class="[`${CLS_PRE}-button-group`]">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent, provide, reactive, toRef } from 'vue';

import {
  COMP_NAME,
  CLS_PRE,
  EMITS_DEC,
  PROPS_DES,
  PROVIDE_KEY,
} from './config';

export default defineComponent({
  name: COMP_NAME,

  emits: EMITS_DEC,

  props: PROPS_DES,

  setup(props, { expose }) {
    provide(
      PROVIDE_KEY,
      reactive({
        type: toRef(props, 'type'),
        width: toRef(props, 'width'),
        height: toRef(props, 'height'),
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
