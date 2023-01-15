<template>
  <div :class="[`${CLS_PRE}-card`]">
    <template v-if="$slots.header">
      <div :class="[`header`]" :style="headerStyle">
        <slot name="header"></slot>
      </div>
    </template>
    <template v-if="$slots.default">
      <div :class="[`content`]" :style="contentStyle">
        <slot></slot>
      </div>
    </template>
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
