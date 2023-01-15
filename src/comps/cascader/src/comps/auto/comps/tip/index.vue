<template>
  <div
    :class="[`${CLS_PRE}-cascader-auto`, `${CLS_PRE}-hover-show-scrollbar`]"
    :style="{
      width: itemWidth,
      maxHeight: popperMaxHeight,
    }"
  >
    <ul :class="[`${CLS_PRE}-cascader-ul`]">
      <li
        v-for="(val, index) in item"
        :class="[
          {
            over: val.over,
            selected: val.selected,
            disabled: val.disabled,
          },
        ]"
        :style="{
          height: itemHeight,
          lineHeight: itemHeight,
        }"
        :title="val.label"
        :key="index"
        @click="handleClick(val, index)"
        @mouseenter="handleMouseEnter(val, index)"
      >
        <!--存在插槽时渲染-->
        <span v-if="$slots.default" :class="[`${CLS_PRE}-dib`]">
          <slot :item="val"></slot>
        </span>
        <!--不存在模板时渲染-->
        <span v-else>
          {{ val.label }}
        </span>
        <i
          v-if="val.selected"
          :class="[`iconfont`, `icon-v-correcct`, `direction-left`]"
        ></i>
        <i
          v-if="val.hasChildren"
          :class="[`iconfont`, `icon-v-right`, `direction-right`]"
        ></i>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

import { COMP_NAME, CLS_PRE, EMITS, EMITS_DEC, PROPS_DES } from './config';

export default defineComponent({
  name: COMP_NAME,

  emits: EMITS_DEC,

  props: PROPS_DES,

  setup(props, { emit, expose }) {
    function handleClick(item, index) {
      if (item.disabled) {
        return;
      }

      if (item.hasChildren) {
        if (!item.hoverTrigger) {
          emit(EMITS.MOUSE_ENTER, item, props.index, index);
        }
      } else {
        emit(EMITS.SELECT, item, props.index, index);
      }
    }

    function handleMouseEnter(item, index) {
      if (item.disabled || !props.hoverTrigger || !item.hasChildren) {
        return;
      }

      emit(EMITS.MOUSE_ENTER, item, props.index, index);
    }

    expose();

    return {
      CLS_PRE,
      handleClick,
      handleMouseEnter,
    };
  },
});
</script>

<style lang="scss" src="./css/index.scss" scoped></style>
