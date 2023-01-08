<template>
  <div
    :class="[`${CLS_PRE}-popover`]"
    @mouseenter="handleMouseenter"
    @mouseleave="handleMouseleave"
    @mousedown="handleMousedown"
    @mouseup="handleMouseup"
    @click="handleClick"
    v-click-outside="handleClickOutside"
    ref="referenceD"
  >
    <slot></slot>
    <div
      ref="popperD"
      v-show="isShowPopperRf"
      :class="[`${CLS_PRE}-popper`, theme]"
      @click.stop
    >
      <div :class="[`${CLS_PRE}-popper-content`]">
        <template v-if="$slots.content">
          <slot name="content"></slot>
        </template>
        <template v-else>{{ content }}</template>
      </div>

      <div :class="[`${CLS_PRE}-popper-arrow`]"></div>
    </div>
  </div>
</template>

<script>
import clickOutside from '@/directives/clickoutside/index';
import { usePopper } from '@/hooks/usePopper';
import { defineComponent, watch } from 'vue';

import { COMP_NAME, CLS_PRE, EMITS_DEC, PROPS_DES } from './config';

// 所有的事件
const TYPES = {
  HOVER: 'hover',
  FOCUS: 'focus',
  CLICK: 'click',
  MANUAL: 'manual',
};

// 关闭延时
const hiddenTimeout = 200;

export default defineComponent({
  name: COMP_NAME,

  directives: {
    clickOutside: clickOutside,
  },

  emits: EMITS_DEC,

  props: PROPS_DES,

  setup(props, { expose }) {
    // 关闭句柄
    let hideTimer = null;

    const { referenceD, popperD, showPopper, hidePopper, isShowPopperRf } =
      usePopper(props.placement);

    function showTips() {
      clearTimeout(hideTimer);

      if (props.disabled || isShowPopperRf.value) {
        return;
      }
      showPopper();
    }

    function hideTips() {
      if (props.disabled || !isShowPopperRf.value) {
        return;
      }

      hideTimer = setTimeout(() => {
        hidePopper();
      }, hiddenTimeout);
    }

    function handleMouseenter() {
      if (props.trigger !== TYPES.HOVER) {
        return;
      }

      showTips();
    }

    function handleMouseleave() {
      if (props.trigger !== TYPES.HOVER) {
        return;
      }

      hideTips();
    }

    function handleMousedown() {
      if (props.trigger !== TYPES.FOCUS) {
        return;
      }
      showTips();
    }

    function handleMouseup() {
      if (props.trigger !== TYPES.FOCUS) {
        return;
      }
      hideTips();
    }

    function handleClick() {
      if (![TYPES.CLICK, TYPES.MANUAL].includes(props.trigger)) {
        return;
      }

      isShowPopperRf.value ? hideTips() : showTips();
    }

    function handleClickOutside(sign) {
      if (props.trigger !== TYPES.CLICK) {
        return;
      }

      if (sign) {
        hideTips();
      }
    }

    watch(
      () => props.disabled,
      (val) => {
        if (val) {
          hideTips();
        }
      }
    );

    expose();

    return {
      CLS_PRE,
      referenceD,
      popperD,
      isShowPopperRf,
      handleMouseenter,
      handleMouseleave,
      handleMousedown,
      handleMouseup,
      handleClick,
      handleClickOutside,
    };
  },
});
</script>

<style lang="scss" src="./css/index.scss" scoped></style>
