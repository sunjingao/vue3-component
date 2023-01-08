<template>
  <div :class="[`${CLS_PRE}-carousel-item`]">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent, inject } from 'vue';

import { COMP_NAME, CLS_PRE, EMITS_DEC, PROPS_DES } from './config';

import { PROVIDE_KEY } from '@/comps/carousel/src/config';

export default defineComponent({
  name: COMP_NAME,

  emits: EMITS_DEC,

  props: PROPS_DES,

  setup(_, { expose }) {
    const injectOps = inject(PROVIDE_KEY);

    injectOps.register({});

    expose();

    return {
      CLS_PRE,
    };
  },
});
</script>

<style lang="scss" src="./css/index.scss" scoped></style>
