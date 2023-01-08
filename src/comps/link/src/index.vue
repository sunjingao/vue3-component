<template>
  <a
    :href="hrefCp"
    :class="[
      `${CLS_PRE}-link`,
      type,
      {
        [`disabled`]: disabled,
        [`underline`]: underline,
      },
    ]"
    @click="handleClick"
  >
    <slot></slot>
  </a>
</template>

<script>
import { defineComponent, computed } from 'vue';

import { COMP_NAME, CLS_PRE, EMITS, EMITS_DEC, PROPS_DES } from './config';

export default defineComponent({
  name: COMP_NAME,

  emits: EMITS_DEC,

  props: PROPS_DES,

  setup(props, { emit, expose }) {
    const hrefCp = computed(() => {
      return !props.disabled && props.href ? props.href : 'javascript:void(0);';
    });

    function handleClick(event) {
      if (props.disabled) {
        return;
      }

      emit(EMITS.CLICK, event);
    }

    expose();

    return {
      CLS_PRE,
      hrefCp,
      handleClick,
    };
  },
});
</script>

<style lang="scss" src="./css/index.scss" scoped></style>
