<template>
  <div
    :class="[`${CLS_PRE}-carousel`]"
    :style="{ height: height }"
    @mouseenter="isHoverRf = true"
    @mouseleave="isHoverRf = false"
  >
    <div :class="[`content-part`]">
      <div
        :class="[`content`]"
        :style="{ left: leftPerCp, transition: `${transition / 1000}s` }"
      >
        <slot></slot>
      </div>
    </div>
    <div :class="[`arrow-part`]" v-show="isShowArrowCp">
      <div :class="[`before`]" @click="handlePrevClick">&lt;</div>
      <div :class="[`next`]" @click="handleNextClick">&gt;</div>
    </div>
    <div v-if="indicator !== 'none'" :class="[`indicator-part`, indicator]">
      <div
        v-for="(_, index) in regisInfoArrRf"
        :class="[`item`]"
        @click="handleLocate(index)"
        @mouseenter="handleIndicatorEnter(index)"
        :key="index"
      >
        <i :class="[{ 'is-active': curActiveIndexRf === index }]"></i>
      </div>
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  reactive,
  ref,
  computed,
  watch,
  provide,
  onMounted,
  onBeforeUnmount,
} from 'vue';

import {
  COMP_NAME,
  CLS_PRE,
  EMITS,
  EMITS_DEC,
  PROPS_DES,
  PROVIDE_KEY,
} from './config';

import { useProvide } from './compos/useProvide/index';

const TYPES = {
  PREV: 'pre',
  NEXT: 'next',
  LOCATE: 'locate',
};

export default defineComponent({
  name: COMP_NAME,

  emits: EMITS_DEC,

  props: PROPS_DES,

  setup(props, { emit, expose }) {
    const isHoverRf = ref(false); // 当前是否在hover中
    const curActiveIndexRf = ref(-1); // 本次激活索引
    let intervalHandle = null; // 循环句柄

    const { regisInfoArrRf, register } = useProvide();

    const leftPerCp = computed(() => {
      return `-${curActiveIndexRf.value * 100}%`;
    });

    const isShowArrowCp = computed(() => {
      if (props.arrow === 'always') {
        return true;
      } else if (props.arrow === 'hover') {
        return isHoverRf.value;
      } else if (props.arrow === 'never') {
        return false;
      } else {
        return false;
      }
    });

    function startAutoPlayEvent() {
      intervalHandle = setInterval(() => {
        setNextActiveIndex(TYPES.NEXT);
        emit(EMITS.CHANGE, curActiveIndexRf.value + 1);
      }, props.interval + props.transition);
    }

    function finishAutoPlayEvent() {
      clearInterval(intervalHandle);
      intervalHandle = null;
    }

    function setNextActiveIndex(type, targetIndex) {
      finishAutoPlayEvent();

      let activeIndex = curActiveIndexRf.value;

      if (type === TYPES.PREV) {
        activeIndex--;
        if (activeIndex === -1) {
          activeIndex = regisInfoArrRf.value.length - 1;
        }
      } else if (type === TYPES.NEXT) {
        activeIndex++;
        if (activeIndex === regisInfoArrRf.value.length) {
          activeIndex = 0;
        }
      } else {
        activeIndex = targetIndex;
      }
      curActiveIndexRf.value = activeIndex;

      startAutoPlayEvent();
    }

    function handlePrevClick() {
      setNextActiveIndex(TYPES.PREV);
      emit(EMITS.PREV, curActiveIndexRf.value + 1);
      emit(EMITS.CHANGE, curActiveIndexRf.value + 1);
    }

    function handleNextClick() {
      setNextActiveIndex(TYPES.NEXT);
      emit(EMITS.NEXT, curActiveIndexRf.value + 1);
      emit(EMITS.CHANGE, curActiveIndexRf.value + 1);
    }

    function handleLocate(index) {
      setNextActiveIndex(TYPES.LOCATE, index);
      emit(EMITS.LOCATE, curActiveIndexRf.value + 1);
      emit(EMITS.CHANGE, curActiveIndexRf.value + 1);
    }

    function handleIndicatorEnter(index) {
      if (props.trigger === 'hover') {
        setNextActiveIndex(TYPES.LOCATE, index);
        emit(EMITS.CHANGE, curActiveIndexRf.value + 1);
      }
    }

    watch(
      () => props.initIndex,
      (val) => {
        curActiveIndexRf.value = val - 1;
      },
      {
        immediate: true,
      }
    );

    watch(isHoverRf, (val) => {
      if (!props.autoplay) {
        return;
      }
      finishAutoPlayEvent();
      !val && startAutoPlayEvent();
    });

    onMounted(() => {
      if (!props.autoplay) {
        return;
      }
      startAutoPlayEvent();
    });

    onBeforeUnmount(() => {
      if (!props.autoplay) {
        return;
      }
      finishAutoPlayEvent();
    });

    provide(
      PROVIDE_KEY,
      reactive({
        register,
      })
    );

    expose();

    return {
      CLS_PRE,
      isShowArrowCp,
      regisInfoArrRf,
      leftPerCp,
      handlePrevClick,
      handleNextClick,
      handleLocate,
      handleIndicatorEnter,
      curActiveIndexRf,
      isHoverRf,
    };
  },
});
</script>

<style lang="scss" src="./css/index.scss" scoped></style>
