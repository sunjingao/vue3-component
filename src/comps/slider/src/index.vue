<template>
  <div
    :class="[`${CLS_PRE}-slider`]"
    @mousedown="handleMoveStart"
    ref="sliderD"
  >
    <div
      :class="[`finished-part`, { disabled: disabled }]"
      :style="{ width: pointPercentCp }"
    ></div>

    <template v-if="showTooltip">
      <div
        :class="[
          `circular-part`,
          {
            isMoving: isMovingRf,
            isHover: isHoverRf,
            disabled: disabled,
          },
        ]"
        :style="{ left: pointPercentCp }"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
      >
        <v-tooltip
          ref="tooltipD"
          :content="tipContentCp"
          placement="top"
          :disabled="true"
        >
          <div :class="[`tooltip-reference`]"></div>
        </v-tooltip>
      </div>
    </template>
    <template v-else>
      <div
        :style="{ left: pointPercentCp }"
        :class="[`circular-part`, { isMoving: isMovingRf, disabled: disabled }]"
      ></div>
    </template>

    <div v-if="showStops || marks.length > 0" :class="[`stop-part`]">
      <template v-if="marks.length > 0">
        <div
          v-for="(item, index) in marks"
          :style="{ left: item.left }"
          :class="[`item`]"
          :key="index"
        >
          <div v-html="item.value" :class="[`mark-html`]"></div>
        </div>
      </template>
      <template v-else>
        <div
          v-for="(item, index) in pointPositionArrCp"
          :style="{ left: item }"
          :class="[`item`]"
          :key="index"
        ></div>
      </template>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, toRef } from 'vue';

import { COMP_NAME, CLS_PRE, EMITS, EMITS_DEC, PROPS_DES } from './config';
import { useMouse } from './compos/useMouse/index';
import { usePoints } from './compos/usePoints/index';
import { useTip } from './compos/useTip';

export default defineComponent({
  name: COMP_NAME,

  emits: EMITS_DEC,

  props: PROPS_DES,

  setup(props, { emit, expose }) {
    const sliderD = ref(null);

    const { pointValRf, pointPositionArrCp, pointPercentCp, getPointVal } =
      usePoints(
        toRef(props, 'modelValue'),
        toRef(props, 'min'),
        toRef(props, 'max'),
        toRef(props, 'step')
      );

    const {
      isMovingRf,
      isHoverRf,
      handleMoveStart,
      handleMouseEnter,
      handleMouseLeave,
    } = useMouse(
      toRef(props, 'disabled'),
      sliderD,
      handleMoveCb,
      handleMoveEndCb
    );

    const { tooltipD, tipContentCp } = useTip(
      toRef(props, 'formatTooltip'),
      toRef(props, 'showTooltip'),
      pointValRf,
      isHoverRf,
      isMovingRf
    );

    function handleMoveCb(finishedPercent) {
      pointValRf.value = getPointVal(finishedPercent);
    }

    function handleMoveEndCb() {
      emit(EMITS.UPDATE_MODEL_VALUE, pointValRf.value);
      emit(EMITS.CHANGE, pointValRf.value);
    }

    expose();

    return {
      CLS_PRE,
      sliderD,
      tooltipD,
      pointPercentCp,
      isMovingRf,
      isHoverRf,
      handleMoveStart,
      handleMouseEnter,
      handleMouseLeave,
      tipContentCp,
      pointPositionArrCp,
    };
  },
});
</script>

<style lang="scss" src="./css/index.scss" scoped></style>
