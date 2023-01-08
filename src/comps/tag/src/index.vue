<template>
  <span
    v-show="isShowRf"
    :class="[`${CLS_PRE}-tag`, type]"
    :style="{
      width: width === 'auto' ? 'auto' : `${width}px`,
      height: `${height}px`,
      lineHeight: `${height}px`,
    }"
  >
    <slot></slot>
    <i
      v-if="closeable"
      :class="[`iconfont`, `icon-v-delete`, `delete`]"
      @click.stop="handleClose"
    ></i>
  </span>
</template>

<script>
import { defineComponent, ref } from 'vue';

import { COMP_NAME, CLS_PRE, EMITS, EMITS_DEC, PROPS_DES } from './config';

export default defineComponent({
  name: COMP_NAME,

  emits: EMITS_DEC,

  props: PROPS_DES,

  setup(props, { emit, expose }) {
    const isShowRf = ref(true);

    function handleClose(event) {
      hide();
      emit(EMITS.CLOSE, event);
    }

    function show() {
      isShowRf.value = true;
    }

    function hide() {
      isShowRf.value = false;
    }

    expose({
      show,
      hide,
    });

    return {
      CLS_PRE,
      isShowRf,
      handleClose,
    };
  },
});
</script>

<style lang="scss" src="./css/index.scss" scoped></style>
