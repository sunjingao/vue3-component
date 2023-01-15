<template>
  <div
    v-show="isShowRf"
    :class="[`${CLS_PRE}-back-top`]"
    :style="{
      right: right,
      bottom: bottom,
      zIndex: zIndex,
    }"
    @click="handleClick"
  >
    <template v-if="$slots.default">
      <slot></slot>
    </template>
    <template v-else>
      <i :class="[`iconfont`, `icon-v-scrollTop`]" />
    </template>
  </div>
</template>

<script>
import { throttle } from '@/utils/bom';
import {
  defineComponent,
  ref,
  computed,
  onMounted,
  onBeforeUnmount,
} from 'vue';

import { COMP_NAME, CLS_PRE, EMITS_DEC, PROPS_DES, EMITS } from './config';

export default defineComponent({
  name: COMP_NAME,

  emits: EMITS_DEC,

  props: PROPS_DES,

  setup(props, { emit, expose }) {
    const isShowRf = ref(false);
    const zIndex = 9999;
    let rootElement = null;
    let throttleHandler = null;

    const isRootCp = computed(() => {
      return props.selector.trim() === 'root';
    });

    function scroll() {
      requestAnimationFrame(() => {
        const scrollTop = rootElement.scrollTop;
        rootElement.scrollTop = scrollTop / 2;
        if (scrollTop <= 1) {
          rootElement.scrollTop = 0;
        } else {
          scroll();
        }
      });
    }

    function show() {
      if (isShowRf.value) {
        return;
      }

      isShowRf.value = true;
    }

    function hide() {
      if (!isShowRf.value) {
        return;
      }

      isShowRf.value = false;
    }

    function setUpdater() {
      throttleHandler = throttle(update, props.timeout);
    }

    function update() {
      rootElement.scrollTop > props.visibilityHeight ? show() : hide();
    }

    function bindEvents() {
      rootElement.addEventListener('scroll', throttleHandler);
    }

    function removeEvents() {
      (isRootCp.value ? window : rootElement).removeEventListener(
        'scroll',
        throttleHandler
      );
    }

    function handleClick(event) {
      emit(EMITS.CLICK, event);
      scroll();
    }

    onMounted(() => {
      setUpdater();
      const ele = isRootCp.value
        ? document.documentElement
        : document.querySelector(props.selector);
      rootElement = Array.isArray(ele) ? ele[0] : ele;
      bindEvents();
      update();
    });

    onBeforeUnmount(() => {
      removeEvents();
    });

    expose();

    return {
      CLS_PRE,
      isShowRf,
      zIndex,
      isRootCp,
      handleClick,
    };
  },
});
</script>

<style lang="scss" src="./css/index.scss" scoped></style>
