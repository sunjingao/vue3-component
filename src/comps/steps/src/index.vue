<template>
  <div :class="[`${CLS_PRE}-steps`]">
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

import { useProvide } from './compos/useProvide/index';

export default defineComponent({
  name: COMP_NAME,

  emits: EMITS_DEC,

  props: PROPS_DES,
  setup(props, { expose }) {
    const { register, getCurIndexCp, getIsLastCp, destroyItem } = useProvide();

    provide(
      PROVIDE_KEY,
      reactive({
        alignCenter: toRef(props, 'alignCenter'),
        space: toRef(props, 'space'),
        active: toRef(props, 'active'),
        error: toRef(props, 'error'),
        simple: toRef(props, 'simple'),
        register,
        getCurIndexCp,
        getIsLastCp,
        destroyItem,
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
