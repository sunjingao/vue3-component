<template>
  <div :class="[`${CLS_PRE}-badge`]">
    <slot></slot>
    <span v-if="tipContentCp && !isDot" :class="[`${CLS_PRE}-icon`, iconClass]">
      {{ tipContentCp }}
    </span>
    <span v-else-if="isDot" :class="[`${CLS_PRE}-dot`, iconClass]"> </span>
  </div>
</template>

<script>
import { computed, defineComponent } from 'vue';

import { COMP_NAME, CLS_PRE, EMITS_DEC, PROPS_DES } from './config';

export default defineComponent({
  name: COMP_NAME,

  emits: EMITS_DEC,

  props: PROPS_DES,

  setup(props, { expose }) {
    const tipContentCp = computed(() => {
      if (props.max && props.max < props.value) {
        return `${props.max}+`;
      }
      return props.value;
    });

    expose();

    return {
      CLS_PRE,
      tipContentCp,
    };
  },
});
</script>

<style lang="scss" src="./css/index.scss" scoped></style>
