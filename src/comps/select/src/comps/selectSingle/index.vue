<template>
  <div :class="[`${CLS_PRE}-select`]" ref="referenceD">
    <v-input
      v-bind="$attrs"
      :modelValue="selectedObjRt.label"
      v-click-outside="handleClickOutside"
      @clear="handleClear"
      :placeholder="placeholder"
      :clearable="clearable"
      readonly
    >
      <template #behind>
        <span
          v-show="!clearable || (clearable && !modelValue)"
          :class="[`select-direction`]"
        >
          <i :class="[`iconfont`, `icon-v-down`, { up: isShowPopperRf }]"></i>
        </span>
      </template>
    </v-input>

    <div ref="popperD" :class="[`${CLS_PRE}-popper`]">
      <ul
        :class="[
          `${CLS_PRE}-popper-content`,
          `${CLS_PRE}-hover-show-scrollbar`,
        ]"
      >
        <slot></slot>
      </ul>
      <div :class="[`${CLS_PRE}-popper-arrow`]"></div>
    </div>
  </div>
</template>

<script>
import { defineComponent, provide, reactive, toRef } from 'vue';
import clickOutside from '@/directives/clickoutside/index';
import vInput from '@/comps/input/src/index';
import { usePopper } from '@/hooks/usePopper';

import {
  COMP_NAME,
  CLS_PRE,
  EMITS,
  EMITS_DEC,
  PROPS_DES,
  PROVIDE_KEY,
} from './config';

export default defineComponent({
  name: COMP_NAME,

  inheritAttrs: false,

  directives: {
    clickOutside,
  },

  emits: EMITS_DEC,

  components: [vInput],

  props: PROPS_DES,

  setup(props, { emit, expose }) {
    const selectedObjRt = reactive({
      label: '',
      value: '',
    });

    const { referenceD, popperD, showPopper, hidePopper, isShowPopperRf } =
      usePopper();

    // 存在选中条目时，要让选中条目处于展示的最下方
    function adaptPosition() {
      const scrollContainer = popperD.value.querySelector(
        `.${CLS_PRE}-popper-content`
      );
      const activeItem = popperD.value.querySelector('.active');
      if (!activeItem) {
        return;
      }
      scrollContainer.scrollTop = activeItem.offsetTop;
    }

    function closeTip() {
      hidePopper();
    }

    function showTip() {
      showPopper();
      adaptPosition();
    }

    function handleClickOutside(sign) {
      if (sign) {
        closeTip();
      } else {
        showTip();
      }
    }

    function handleClear(event) {
      emit(EMITS.UPDATE_MODEL_VALUE, '');
      emit(EMITS.CLEAR, event);
      selectedObjRt.label = '';
      selectedObjRt.value = '';
    }

    function triggerClick(obj) {
      emit(EMITS.UPDATE_MODEL_VALUE, obj.value);
      selectedObjRt.value = obj.value;
      selectedObjRt.label = obj.label;
      closeTip();
    }

    function register(obj) {
      if (obj.isActive) {
        selectedObjRt.value = obj.value;
        selectedObjRt.label = obj.label;
      }
    }

    function deleteItem() {}

    provide(
      PROVIDE_KEY,
      reactive({
        modelValue: toRef(props, 'modelValue'),
        register,
        triggerClick,
        deleteItem,
      })
    );

    expose();

    return {
      CLS_PRE,
      referenceD,
      popperD,
      isShowPopperRf,
      selectedObjRt,
      handleClickOutside,
      handleClear,
    };
  },
});
</script>

<style lang="scss" src="./css/index.scss" scoped></style>
