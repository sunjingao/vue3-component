<template>
  <div :class="[`${CLS_PRE}-breadcrumb-item`, { 'show-href': isShowHrefCp }]">
    <div @click="handleJump">
      <slot></slot>
    </div>
    <span :class="[`separator`]">{{ separator }}</span>
  </div>
</template>

<script>
import { defineComponent, computed, inject } from 'vue';

import { COMP_NAME, CLS_PRE, EMITS_DEC, PROPS_DES } from './config';

import { PROVIDE_KEY } from '@/comps/breadcrumb/src/config';

export default defineComponent({
  name: COMP_NAME,

  emits: EMITS_DEC,

  props: PROPS_DES,

  setup(props, { expose }) {
    const injectOps = inject(PROVIDE_KEY);
    const isShowHrefCp = computed(() => {
      return !!props.to;
    });

    function handleJump() {
      props.to && (window.location.href = String(props.to));
    }

    expose();

    return {
      CLS_PRE,
      separator: injectOps.separator,
      isShowHrefCp,
      handleJump,
    };
  },
});
</script>

<style lang="scss" src="./css/index.scss" scoped></style>
