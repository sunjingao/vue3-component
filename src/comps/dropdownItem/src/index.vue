<template>
  <div
    :class="[
      `${CLS_PRE}-dropdown-item`,
      { disabled: disabled, divided: divided },
    ]"
  >
    <div @click="handleClick">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { defineComponent, inject } from 'vue';

import { COMP_NAME, CLS_PRE, EMITS_DEC, PROPS_DES } from './config';
import { PROVIDE_KEY } from '@/comps/dropdown/src/config';

export default defineComponent({
  name: COMP_NAME,

  emits: EMITS_DEC,

  props: PROPS_DES,

  setup(props, { expose }) {
    const injectOps = inject(PROVIDE_KEY);

    function handleClick(event) {
      if (props.disabled) {
        return;
      }

      injectOps.changeOption(props.command, event);
    }

    expose();

    return {
      CLS_PRE,
      handleClick,
    };
  },
});
</script>

<style lang="scss" src="./css/index.scss" scoped></style>
