<template>
  <div
    :class="[
      `${CLS_PRE}-divider`,
      direction,
      {
        'show-line': showLine,
      },
    ]"
  >
    <template v-if="direction === 'horizontal'">
      <template v-if="$slots.default">
        <div :class="[`slot`, position]">
          <slot></slot>
        </div>
      </template>
      <template v-else>
        <div
          :class="[
            {
              'show-line': showLine,
            },
          ]"
        ></div>
      </template>
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
