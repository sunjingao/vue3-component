<template>
  <div :class="[`${CLS_PRE}-dropdown-menu`]">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

import { COMP_NAME, CLS_PRE } from './config';

export default defineComponent({
  name: COMP_NAME,
  setup(_, { expose }) {
    expose();

    return {
      CLS_PRE,
    };
  },
});
</script>

<style lang="scss" src="./css/index.scss" scoped></style>
