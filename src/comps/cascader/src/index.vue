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
          <i
            :class="[
              'iconfont',
              'icon-v-down',
              {
                up: isShowPopperRf,
              },
            ]"
          ></i>
        </span>
      </template>
    </v-input>

    <div :class="[`${CLS_PRE}-popper`]" ref="popperD">
      <div :class="[`${CLS_PRE}-panel`, `${CLS_PRE}-popper-content`]">
        <v-cascader-info
          v-for="(item, index) in tipsArrRf"
          :key="index"
          :item="item"
          :index="index"
          :itemWidth="itemWidth"
          :popperMaxHeight="popperMaxHeight"
          :itemHeight="itemHeight"
          :hoverTrigger="hoverTrigger"
          :style="{
            marginLeft: (index > 0 ? -1 : 0) + 'px',
          }"
          @select="handleSelect"
          @over="handleOver"
        >
          <template v-if="$slots.default" #default="{ item }">
            <slot :item="item"></slot>
          </template>
        </v-cascader-info>
      </div>

      <div :class="[`${CLS_PRE}-popper-arrow`]"></div>
    </div>
  </div>
</template>

<script>
import deepClone from '@/assets/js/deepClone';
import clickOutside from '@/directives/clickoutside/index';
import vCascaderInfo from './comps/cascaderInfo/index';
import { usePopper } from '@/hooks/usePopper';

import { defineComponent, ref, computed, nextTick, watch } from 'vue';

import { COMP_NAME, CLS_PRE, EMITS, EMITS_DEC, PROPS_DES } from './config';

export default defineComponent({
  name: COMP_NAME,

  directives: {
    clickOutside: clickOutside,
  },

  components: {
    vCascaderInfo,
  },

  emits: EMITS_DEC,

  props: PROPS_DES,

  setup(props, { emit, expose }) {
    const tipsArrRf = ref([]); // 展示数组，即选中项所在的数组集合
    const selectedArrRf = ref([]); // 展示数组，即选中项所在的数组集合

    const {
      referenceD,
      popperD,
      showPopper,
      hidePopper,
      updatePopper,
      isShowPopperRf,
    } = usePopper();

    // 处理 inputValueCp
    const inputValueCp = computed(() => {
      if (selectedArrRf.value.length === 0) {
        return '';
      }

      if (props.showAllLevels) {
        return selectedArrRf.value.map((item) => item.label).join(' / ');
      } else {
        return selectedArrRf.value[selectedArrRf.value.length - 1].label;
      }
    });

    // 设置当前选中内容的集合
    function setSelectedArr() {
      const selectedTemp = [];
      const showTemp = tipsArrRf.value;

      for (const item of Object.values(showTemp)) {
        for (const value of Object.values(item)) {
          if (value.selected) {
            selectedTemp.push(value);
          }
        }
      }

      selectedArrRf.value = selectedTemp;
    }

    // 清除上次选中项内容
    function clearSelected(item, arrIndex, itemIndex) {
      selectedArrRf.value.forEach((obj) => {
        obj.selected = !!obj.over;
      });
    }

    function setShowArr(item, arrIndex, itemIndex) {
      tipsArrRf.value.forEach((arr) => {
        arr.forEach((obj) => {
          obj.selected = !!obj.over;
        });
      });

      for (const [key, val] of Object.entries(tipsArrRf.value[arrIndex])) {
        val.selected = Number(key) === Number(itemIndex);
        val.over = Number(key) === Number(itemIndex);
      }
    }

    // 将被选中的item原样传递上去
    function emitSelected(item) {
      if (item.children && item.children.length > 0) {
        return;
      }

      let temp = tipsArrRf.value[0];
      let tipsArray = props.tipsArray;
      let selectedTemp = {};
      let selectedObj = {};

      while (true) {
        for (const [key, value] of Object.entries(temp)) {
          if (value.selected) {
            selectedTemp = temp[key];
            selectedObj = tipsArray[key];
            break;
          }
        }
        if (selectedTemp.children && selectedTemp.children.length > 0) {
          temp = selectedTemp.children;
          tipsArray = selectedObj.children;
        } else {
          break;
        }
      }
      emit(EMITS.AUTO_SELECTED, selectedObj);
    }

    function showTips() {
      showPopper();
    }

    function hideTips() {
      hidePopper();
    }

    // 初始化被选中的数组集合,用于渲染展示
    function initShowArray() {
      const arr = [deepClone(props.tipsArray)];
      let item = arr && arr[0];

      let index = -1;
      while (item && (index = item.findIndex((obj) => obj.selected)) !== -1) {
        const children = item[index].children;
        if (children) {
          children && arr.push((item = item[index].children));
        } else {
          break;
        }
      }

      tipsArrRf.value = arr;
    }

    // 初始化数据
    function initData() {
      initShowArray();
      setSelectedArr();
    }

    function handleClickOutside(sign) {
      sign ? hideTips() : showTips();
    }

    // 清除input框中的内容
    function handleClear() {
      emit(EMITS.AUTO_SELECTED, {});
      initData();
    }

    // 处理over事件
    function handleOver(item, arrIndex, itemIndex) {
      const clearArr = tipsArrRf.value.slice(arrIndex);
      for (let index = 0; index < clearArr.length; index++) {
        for (const value of Object.values(clearArr[index])) {
          value.over = false;
        }
      }
      tipsArrRf.value.splice(arrIndex + 1);

      item.over = true;
      tipsArrRf.value.push(item.children);
      // 当自身内容改变时，可能要触发位置的改变
      nextTick(() => updatePopper());
    }

    // 选中
    function handleSelect(item, arrIndex, itemIndex) {
      // 要在 setShowArr 方法前操作
      clearSelected(item, arrIndex, itemIndex);

      setShowArr(item, arrIndex, itemIndex);

      setSelectedArr();

      emitSelected(item);

      // 因为点击的时候触发了clickOutside，所以在这加个延时关闭
      setTimeout(() => {
        hidePopper();
      });
    }

    watch(
      () => props.tipsArray,
      () => {
        initData();
      },
      {
        immediate: true,
      }
    );

    expose();

    return {
      CLS_PRE,
      referenceD,
      popperD,
      isShowPopperRf,
      inputValueCp,
      tipsArrRf,
      handleClickOutside,
      handleSelect,
      handleOver,
      handleClear,
    };
  },
});
</script>

<style lang="scss" src="./css/index.scss" scoped></style>
