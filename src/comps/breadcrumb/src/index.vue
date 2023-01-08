<template>
  <div :class="[`${CLS_PRE}-breadcrumb`]">
    <slot></slot>
  </div>
</template>

<script>
import { provide, reactive, toRef } from 'vue';

import {
  COMP_NAME,
  CLS_PRE,
  EMITS_DEC,
  PROPS_DES,
  PROVIDE_KEY,
} from './config';

export default {
  name: COMP_NAME,

  emits: EMITS_DEC,

  props: PROPS_DES,
  setup(props, { expose }) {
    provide(
      PROVIDE_KEY,
      reactive({
        separator: toRef(props, 'separator'),
      })
    );

    expose();

    return {
      CLS_PRE,
    };
  },
};
</script>

<style lang="scss" src="./css/index.scss" scoped></style>
