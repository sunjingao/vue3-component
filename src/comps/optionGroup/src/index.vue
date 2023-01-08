<template>
  <div :class="[`${CLS_PRE}-select-group`]">
    <div :class="[`${CLS_PRE}-select-group-title`]" @click.stop>
      {{ label }}
    </div>
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

import { COMP_NAME, CLS_PRE, EMITS_DEC, PROPS_DES } from './config';

export default defineComponent({
  name: COMP_NAME,

  emits: EMITS_DEC,

  props: PROPS_DES,

  setup(_, { expose }) {
    expose();

    return {
      CLS_PRE,
    };
  },
});
</script>

<style lang="scss" src="./css/index.scss" scoped></style>
