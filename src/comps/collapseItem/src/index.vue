<template>
  <div :class="[`${CLS_PRE}-collapse-item`]">
    <div :class="[`title`, { disabled: disabled }]" @click="handleToggle">
      <template v-if="$slots.title">
        <div :class="[`title-content`]">
          <slot name="title"></slot>
        </div>
      </template>
      <template v-else>
        <div :class="[`title-content`]">{{ title }}</div>
      </template>
      <i
        v-if="showDirection"
        :class="[
          `iconfont`,
          `icon-v-down`,
          `arrow`,
          {
            up: isShowContentCp,
          },
        ]"
      ></i>
    </div>
    <div :class="[`content`]" :style="{ height: heightCp }">
      <div :class="[`words`]" ref="wordsD">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, inject, computed } from 'vue';

import { COMP_NAME, CLS_PRE, PROPS_DES } from './config';
import { PROVIDE_KEY } from '@/comps/collapse/src/config';

export default defineComponent({
  name: COMP_NAME,

  props: PROPS_DES,

  setup(props, { expose }) {
    const injectOps = inject(PROVIDE_KEY);

    const wordsD = ref(null);

    const isShowContentCp = computed(() => {
      if (injectOps.accordion) {
        return injectOps.modelValue === props.value;
      } else {
        return injectOps.modelValue.includes(props.value);
      }
    });

    const heightCp = computed(() => {
      const element = wordsD.value;
      return isShowContentCp.value
        ? `${element && element.getBoundingClientRect().height}px`
        : `0px`;
    });

    function handleToggle() {
      if (props.disabled) {
        return;
      }

      injectOps.changeActive(props.value);
    }

    expose();

    return {
      CLS_PRE,
      wordsD,
      handleToggle,
      isShowContentCp,
      heightCp,
    };
  },
});
</script>

<style lang="scss" src="./css/index.scss" scoped></style>
