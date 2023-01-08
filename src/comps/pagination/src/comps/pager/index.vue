<template>
  <div :class="[`${CLS_PRE}-pager`]">
    <div
      :class="[
        `prev`,
        {
          disabled: !isLeftCanMoveCp,
          btns: isButton,
        },
      ]"
      @click="handleMove(-1, isLeftCanMoveCp)"
    >
      &lt;
    </div>

    <ul :class="[`content`]">
      <li
        v-for="(item, index) in itemArrCp"
        :class="[{ selected: item.selected, btns: isButton }]"
        :key="index"
      >
        <div
          v-if="item.value === 'left'"
          @click="handleMove(-5)"
          :class="[`left-icon`]"
        ></div>
        <div
          v-else-if="item.value === 'right'"
          @click="handleMove(5)"
          :class="[`right-icon`]"
        ></div>
        <div
          v-else
          :class="[`${CLS_PRE}-value-content`]"
          @click="handleChangeSelect(item)"
        >
          {{ item.value }}
        </div>
      </li>
    </ul>

    <div
      :class="[`next`, { disabled: !isRightCanMoveCp }]"
      @click="handleMove(1, isRightCanMoveCp)"
    >
      &gt;
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, toRef, watch } from 'vue';

import { COMP_NAME, CLS_PRE, EMITS, EMITS_DEC, PROPS_DES } from './config';

import { useItems } from './compos/useItems/index';

export default defineComponent({
  name: COMP_NAME,
  emits: EMITS_DEC,
  props: PROPS_DES,
  setup(props, { emit, expose }) {
    const currentPageRf = ref(0);

    const { itemArrCp, isLeftCanMoveCp, isRightCanMoveCp } = useItems(
      toRef(props, 'total'),
      currentPageRf
    );

    // 移动元素
    function handleMove(step, isCanMove = true) {
      if (!isCanMove) {
        return false;
      }

      currentPageRf.value += step;
      emit(EMITS.UPDATE_MODEL_VALUE, currentPageRf.value);
      emit(EMITS.PAGE_CHANGE, currentPageRf.value);
    }

    // 点击某个元素时的操作
    function handleChangeSelect(item) {
      currentPageRf.value = item.value;
      emit(EMITS.UPDATE_MODEL_VALUE, currentPageRf.value);
      emit(EMITS.PAGE_CHANGE, item.value);
    }

    watch(
      [() => props.modelValue, () => props.total],
      () => {
        currentPageRf.value = props.modelValue;
      },
      {
        immediate: true,
      }
    );

    expose();

    return {
      CLS_PRE,
      isLeftCanMoveCp,
      isRightCanMoveCp,
      itemArrCp,
      handleMove,
      handleChangeSelect,
    };
  },
});
</script>

<style lang="scss" src="./css/index.scss" scoped></style>
