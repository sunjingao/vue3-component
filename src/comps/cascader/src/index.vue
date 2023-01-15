<template>
  <div :class="[`${CLS_PRE}-cascader`]" v-click-outside="handleClickOutside">
    <v-input
      ref="referenceD"
      readonly
      :placeholder="placeholder"
      :modelValue="inputValueCp"
      :width="width"
      :height="height"
      :clearable="clearable"
      :title="inputValueCp"
      @clear="handleClear"
    >
      <template #behind>
        <span
          v-show="!clearable || (clearable && !inputValueCp)"
          :class="[`select-direction`]"
        >
          <i :class="['iconfont', 'icon-v-down', { up: isShowPopperRf }]"></i>
        </span>
      </template>
    </v-input>

    <div :class="[`${CLS_PRE}-popper`]" ref="popperD">
      <div :class="[`${CLS_PRE}-popper-content`]">
        <auto
          ref="autoD"
          :modelValue="modelValue"
          :options="options"
          :itemWidth="itemWidth"
          :popperMaxHeight="popperMaxHeight"
          :itemHeight="itemHeight"
          :hoverTrigger="hoverTrigger"
          @mouseEnter="handleMouseEnter"
          @select="handleSelect"
        >
          <template #default="{ item }" v-if="$slots.default">
            <slot :item="item"></slot>
          </template>
        </auto>
        <div :class="[`${CLS_PRE}-popper-arrow`]"></div>
      </div>
    </div>
  </div>
</template>

<script>
import clickOutside from '@/directives/clickoutside/index';
import { usePopper } from '@/hooks/usePopper';

import { defineComponent, ref, computed, nextTick } from 'vue';

import { COMP_NAME, CLS_PRE, EMITS, EMITS_DEC, PROPS_DES } from './config';

import auto from './comps/auto/index';

export default defineComponent({
  name: COMP_NAME,

  directives: {
    clickOutside: clickOutside,
  },

  components: {
    auto,
  },

  emits: EMITS_DEC,

  props: PROPS_DES,

  setup(props, { emit, expose }) {
    const {
      referenceD,
      popperD,
      showPopper,
      hidePopper,
      updatePopper,
      isShowPopperRf,
    } = usePopper();

    const autoD = ref(null);

    const inputValueCp = computed(() => {
      if (
        !autoD.value ||
        !autoD.value.selectedArrCp ||
        autoD.value.selectedArrCp.length === 0
      ) {
        return '';
      }

      if (props.showAllLevels) {
        return autoD.value.selectedArrCp
          .map((item) => item.label)
          .join(props.separator);
      } else {
        return autoD.value.selectedArrCp[autoD.value.selectedArrCp.length - 1]
          .label;
      }
    });

    function emitSelected(val) {
      const res = val.map((item) => item.value);
      emit(EMITS.UPDATE_MODEL_VALUE, res);
      emit(EMITS.SELECT, res);
    }

    function handleMouseEnter() {
      nextTick(() => updatePopper());
    }

    function handleSelect(val) {
      emitSelected(val);
      setTimeout(() => {
        hidePopper();
      });
    }

    function handleClickOutside(sign) {
      sign ? hidePopper() : showPopper();
    }

    // 清除input框中的内容
    function handleClear(event) {
      emit(EMITS.CLEAR, event);
      autoD.value.clear();
    }

    expose();

    return {
      CLS_PRE,
      referenceD,
      popperD,
      autoD,
      isShowPopperRf,
      inputValueCp,
      handleClickOutside,
      handleSelect,
      handleMouseEnter,
      handleClear,
    };
  },
});
</script>

<style lang="scss" src="./css/index.scss" scoped></style>
