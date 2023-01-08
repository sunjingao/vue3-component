<template>
  <div :class="[`${CLS_PRE}-timeauto`, `${CLS_PRE}-popper`]">
    <div :class="[`${CLS_PRE}-popper-content`]">
      <div class="time-area p5">
        <div class="start-or-end-part">
          <div class="start-or-end-part_title" v-if="showEndTime">开始时间</div>
          <picker
            ref="startD"
            :modelValue="startTime"
            :range="startRange"
            :itemWidth="itemWidth"
            :itemHeight="itemHeight"
            :isShowPopper="isShowPopper"
            :class="[showEndTime ? 'show-border' : 'show-bottom-border']"
          />
        </div>

        <div v-if="showEndTime" class="start-or-end-part ml10">
          <div class="start-or-end-part_title"><span>结束时间</span></div>
          <picker
            ref="endD"
            :modelValue="endTime"
            :range="endRange"
            :itemWidth="itemWidth"
            :itemHeight="itemHeight"
            :isShowPopper="isShowPopper"
            :class="['show-border']"
          />
        </div>
      </div>

      <div :class="[`button-area`]">
        <span :class="[`cancel`]" @click.stop="handleCancel">取消</span>
        <span :class="[`confirm`]" @click.stop="handleConfirm">确定</span>
      </div>
    </div>

    <div :class="[`${CLS_PRE}-popper-arrow`]"></div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

import picker from './comps/picker/index';

import { COMP_NAME, CLS_PRE, EMITS, EMITS_DEC, PROPS_DES } from './config';

export default defineComponent({
  name: COMP_NAME,

  components: {
    picker,
  },

  emits: EMITS_DEC,

  props: PROPS_DES,

  setup(props, { emit, expose }) {
    const startD = ref(null);
    const endD = ref(null);

    function emitChange() {
      const retObj = {
        startTime: {},
        endTime: {},
      };

      const startTimeObj = startD.value.getVal();
      retObj.startTime.hour = startTimeObj.hour;
      retObj.startTime.minute = startTimeObj.minute;
      retObj.startTime.second = startTimeObj.second;

      if (props.showEndTime) {
        const endTimeObj = endD.value.getVal();
        retObj.endTime.hour = endTimeObj.hour;
        retObj.endTime.minute = endTimeObj.minute;
        retObj.endTime.second = endTimeObj.second;
      }

      emit(EMITS.COMPLETE, retObj);
    }

    function handleConfirm() {
      if (
        startD.value.getIsScrollDisabled() ||
        (props.showEndTime && endD.value.getIsScrollDisabled())
      ) {
        return;
      }

      emitChange();
    }

    function handleCancel() {
      emit(EMITS.CLOSE);
    }

    function getIsSelectedDisabled() {
      return (
        startD.value.getIsSelectedDisabled() ||
        (props.showEndTime && endD.value.getIsSelectedDisabled())
      );
    }

    expose({
      handleConfirm,
      getIsSelectedDisabled,
    });

    return {
      CLS_PRE,
      startD,
      endD,
      handleCancel,
      handleConfirm,
    };
  },
});
</script>

<style lang="scss" src="./css/index.scss" scoped></style>
