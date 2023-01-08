<template>
  <div
    :class="[`${CLS_PRE}-autocomplete`]"
    v-click-outside="handleClickOutside"
  >
    <v-input
      ref="referenceD"
      v-bind="$attrs"
      v-model="inputValueCp"
      @focus="handleFocus"
      @keydown.up.prevent="handleMove('up')"
      @keydown.down.prevent="handleMove('down')"
      @keydown.enter="handleEnter"
      @keydown.esc="handleEsc"
    >
      <template #front>
        <slot name="front"></slot>
      </template>
      <template #behind>
        <slot name="behind"></slot>
        <i :class="[`iconfont`, `icon-v-down`, { up: isShowPopperRf }]"></i>
      </template>
    </v-input>
    <div
      ref="popperD"
      :class="[`${CLS_PRE}-popper`, `${CLS_PRE}-hover-show-scrollbar`]"
      :style="{ lineHeight: itemHeight }"
    >
      <!--存在插槽时渲染-->
      <template v-if="$slots.default">
        <div
          v-for="(item, index) in options"
          :class="[
            `${CLS_PRE}-popper-item`,
            {
              active: activeIndexRf === index,
            },
          ]"
          :key="index"
          @click="handleClickOpn(item)"
        >
          <slot :item="item"></slot>
        </div>
      </template>
      <!--不存在插槽时渲染-->
      <template v-else>
        <div
          v-for="(item, index) in options"
          :class="[
            `${CLS_PRE}-popper-item`,
            {
              active: activeIndexRf === index,
            },
          ]"
          :key="index"
          @click="handleClickOpn(item)"
          v-html="item.label"
        ></div>
      </template>

      <div :class="[`${CLS_PRE}-popper-arrow`]"></div>
    </div>
  </div>
</template>

<script>
import clickOutside from '@/directives/clickoutside/index';
import { useMove } from './compos/useMove/index';
import { defineComponent, ref, computed } from 'vue';
import { usePopper } from '@/hooks/usePopper';

import { COMP_NAME, CLS_PRE, EMITS, EMITS_DEC, PROPS_DES } from './config';

export default defineComponent({
  name: COMP_NAME,

  inheritAttrs: false,

  directives: {
    clickOutside: clickOutside,
  },

  emits: EMITS_DEC,

  props: PROPS_DES,

  setup(props, { emit, expose }) {
    const activeIndexRf = ref(-1);

    const { referenceD, popperD, isShowPopperRf, showPopper, hidePopper } =
      usePopper();

    const { handleMove } = useMove(popperD, props.options, activeIndexRf);

    const inputValueCp = computed({
      get() {
        return props.modelValue;
      },
      set(val) {
        emit(EMITS.UPDATE_MODEL_VALUE, val);
        emit(EMITS.INPUT, val);
        showTips();
      },
    });

    function showTips() {
      if (isShowPopperRf.value) {
        return;
      }
      showPopper();
      popperD.value.scrollTop = 0;
    }

    function closeTips() {
      if (!isShowPopperRf.value) {
        return;
      }
      hidePopper();
      activeIndexRf.value = -1;
      referenceD.value && referenceD.value.blur();
    }

    function confirmItem(item) {
      emit(EMITS.UPDATE_MODEL_VALUE, item.label);
      emit(EMITS.CHANGE, { ...item });
      closeTips();
    }

    function handleClickOutside(sign) {
      if (!sign) {
        return;
      }
      closeTips();
    }

    function handleFocus() {
      emit(EMITS.FOCUS, inputValueCp.value);
      showTips();
    }

    function handleClickOpn(item) {
      confirmItem(item);
    }

    function handleEnter() {
      if (activeIndexRf.value === -1) {
        return;
      }
      confirmItem(props.options[activeIndexRf.value]);
    }

    function handleEsc() {
      closeTips();
    }

    expose();

    return {
      CLS_PRE,
      activeIndexRf,
      referenceD,
      popperD,
      isShowPopperRf,
      inputValueCp,
      handleMove,
      handleEnter,
      handleEsc,
      handleClickOpn,
      handleClickOutside,
      handleFocus,
    };
  },
});
</script>

<style lang="scss" src="./css/index.scss" scoped></style>
