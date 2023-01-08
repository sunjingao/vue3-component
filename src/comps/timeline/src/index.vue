<template>
  <div :class="[`${CLS_PRE}-timeline`]">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent, provide } from 'vue';
import { useProvide } from './compos/useProvide/index';

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
  setup(_, { expose }) {
    const { register, getIsLastCp, destroyItem } = useProvide();

    provide(PROVIDE_KEY, {
      register,
      getIsLastCp,
      destroyItem,
    });

    expose();

    return {
      CLS_PRE,
    };
  },
});
</script>

<style lang="scss" src="./css/index.scss" scoped></style>
