<template>
  <div
    :class="[`${CLS_PRE}-loading`, loadingClass]"
    :style="{
      top: top,
      left: left,
      width: width,
      height: height,
      opacity: opacity,
      zIndex: zIndex,
    }"
  >
    <div :class="[`content`, contentClass]">
      <component v-if="componentName" :is="componentName"></component>
      <template v-else>
        <i
          v-if="showLoadingIcon"
          :class="[`iconfont`, `icon-v-loading`, `loading-img`]"
        ></i>
        <div :class="[`text`]" v-if="content" v-html="content"></div>
      </template>
    </div>
  </div>
</template>

<script>
import { defineComponent, toRefs } from 'vue';

import { COMP_NAME, CLS_PRE, EMITS_DEC, PROPS_DES } from './config';

export default defineComponent({
  name: COMP_NAME,

  emits: EMITS_DEC,

  props: PROPS_DES,

  setup(props, { expose }) {
    expose();

    return {
      CLS_PRE,
      ...toRefs(props.params),
    };
  },
});
</script>

<style lang="scss" src="./css/index.scss" scoped></style>
