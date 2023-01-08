<template>
  <div :class="[`${CLS_PRE}-timeline-item`]">
    <div :class="[`chart-part`]">
      <slot v-if="$slots.circular" name="circular"></slot>
      <div
        v-else
        :class="[`circular`]"
        :style="{ backgroundColor: circularColor }"
      ></div>

      <slot v-if="$slots.line" name="line"></slot>
      <div
        v-else
        :class="[`line`, { isLast: isLastCp }]"
        :style="{ backgroundColor: circularColor }"
      ></div>
    </div>
    <div :class="[`words-part`]">
      <slot v-if="$slots.default"></slot>
      <template v-else>
        <template v-if="$slots.title">
          <slot name="title"></slot>
        </template>
        <template v-else-if="title">
          <div
            :style="{ order: placement === 'top' ? 1 : 0 }"
            :class="[`title`, { bottom: placement === 'top' }]"
          >
            {{ title }}
          </div>
        </template>

        <template v-if="$slots.content">
          <slot name="content"></slot>
        </template>
        <template v-else-if="content">
          <div
            :style="{ order: placement === 'top' ? 0 : 1 }"
            :class="[`content`, { bottom: placement === 'bottom' }]"
          >
            {{ content }}
          </div>
        </template>
      </template>
    </div>
  </div>
</template>

<script>
import { defineComponent, inject, onBeforeMount, onBeforeUnmount } from 'vue';

import { COMP_NAME, CLS_PRE, EMITS_DEC, PROPS_DES } from './config';

import { PROVIDE_KEY } from '@/comps/timeline/src/config';

export default defineComponent({
  name: COMP_NAME,

  emits: EMITS_DEC,

  props: PROPS_DES,

  setup(_, { expose }) {
    const injectOps = inject(PROVIDE_KEY);
    const registerOps = {};

    const isLastCp = injectOps.getIsLastCp(registerOps);

    onBeforeMount(() => {
      injectOps.register(registerOps);
    });

    onBeforeUnmount(() => {
      injectOps.destroyItem();
    });

    expose();

    return {
      CLS_PRE,
      isLastCp,
    };
  },
});
</script>

<style lang="scss" src="./css/index.scss" scoped></style>
