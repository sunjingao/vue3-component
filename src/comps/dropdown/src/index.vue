<template>
  <div
    :class="[`${CLS_PRE}-dropdown`]"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    v-click-outside="handleClickOutside"
  >
    <div ref="referenceD" @click="handleRefClick" :class="[`reference`]">
      <v-button-group v-if="splitButton">
        <v-button v-bind="$attrs" @click.stop>
          <slot></slot>
        </v-button>
        <v-button v-bind="$attrs" :class="[`split-right-button`]">
          <i
            :class="[
              `iconfont`,
              `icon-v-down`,
              `arrow`,
              {
                up: isShowPopperRf,
              },
            ]"
          ></i>
        </v-button>
      </v-button-group>
      <template v-else>
        <slot></slot>
        <i
          :class="[
            `iconfont`,
            `icon-v-down`,
            `arrow`,
            {
              up: isShowPopperRf,
            },
          ]"
        ></i>
      </template>
    </div>
    <div ref="popperD" :class="[`${CLS_PRE}-popper`]">
      <slot name="dropdown" :class="[`${CLS_PRE}-popper-content`]"></slot>
      <div :class="[`${CLS_PRE}-popper-arrow`]"></div>
    </div>
  </div>
</template>

<script>
import vButtonGroup from '@/comps/buttonGroup/src/index';
import vButton from '@/comps/button/src/index';
import clickOutside from '@/directives/clickoutside/index';
import { usePopper } from '@/hooks/usePopper';
import { provide, reactive } from 'vue';

import {
  COMP_NAME,
  CLS_PRE,
  EMITS,
  EMITS_DEC,
  PROPS_DES,
  PROVIDE_KEY,
} from './config';

export default {
  name: COMP_NAME,

  inheritAttrs: false,

  components: {
    vButtonGroup,
    vButton,
  },

  directives: {
    clickOutside,
  },

  emits: EMITS_DEC,

  props: PROPS_DES,

  setup(props, { emit, expose }) {
    const hideTimeout = 200;
    let hideTimer = null; // 因为下拉框和展示部分之间有一段距离，需要用延时来实现下拉框不隐藏的效果

    const { referenceD, popperD, showPopper, hidePopper, isShowPopperRf } =
      usePopper(props.placement);

    function closeTips() {
      hidePopper();
    }

    function openTips() {
      showPopper();
    }

    function toggleTips() {
      if (isShowPopperRf.value) {
        closeTips();
      } else {
        openTips();
      }
    }

    function handleClickOutside(sign) {
      if (!sign || props.hoverTrigger || !props.hideOnClick) {
        return;
      }
      closeTips();
    }

    function handleRefClick() {
      if (props.hoverTrigger) {
        return;
      }

      if (props.hideOnClick) {
        toggleTips();
      } else {
        openTips();
      }
    }

    function handleMouseEnter() {
      if (!props.hoverTrigger) {
        return;
      }

      clearTimeout(hideTimer);

      openTips();
    }

    function handleMouseLeave() {
      if (!props.hoverTrigger) {
        return;
      }

      hideTimer = setTimeout(() => {
        closeTips();
      }, hideTimeout);
    }

    // dropdown-item触发了点击事件
    function changeOption(val, event) {
      emit(EMITS.COMMAND, val, event);

      if (props.hideOnClick) {
        closeTips();
      }
    }

    provide(
      PROVIDE_KEY,
      reactive({
        changeOption,
      })
    );

    expose();

    return {
      CLS_PRE,
      referenceD,
      popperD,
      isShowPopperRf,
      handleMouseEnter,
      handleMouseLeave,
      handleClickOutside,
      handleRefClick,
    };
  },
};
</script>

<style lang="scss" src="./css/index.scss" scoped></style>
