<template>
  <div
    :class="[`${CLS_PRE}-step`]"
    :style="{
      width: !!injectOps.space ? `${injectOps.space}px` : 'auto',
      flex: !!injectOps.space || isLastCp ? 'none' : '1',
    }"
  >
    <div :class="[`chart-part`]">
      <!--自定义图形-->
      <slot v-if="$slots.step" name="step"></slot>
      <!--默认图形,简单模式时无图形-->
      <template v-else-if="!injectOps.simple">
        <template v-if="injectOps.error && injectOps.active === currentIndexCp">
          <div :class="[`step`, `error`]">×</div>
        </template>
        <template v-else>
          <div
            v-show="currentStatusCp === TYPES.SUCCESS"
            :class="[`step`, `success`, `iconfont`, `icon-v-correcct`]"
          ></div>
          <div
            v-show="currentStatusCp === TYPES.ACTIVE"
            :class="[`step`, `process`]"
          >
            {{ currentIndexCp + 1 }}
          </div>
          <div
            v-show="currentStatusCp === TYPES.WAIT"
            :class="[`step`, `wait`]"
          >
            {{ currentIndexCp + 1 }}
          </div>
          <div
            v-show="currentStatusCp === TYPES.ERROR"
            :class="[`step`, `error`]"
          >
            {{ currentIndexCp + 1 }}
          </div>
        </template>
      </template>
      <!--中间的图形部分-->
      <template v-if="!isLastCp">
        <!--简单模式的中间内容-->
        <div v-if="injectOps.simple" :class="[`simple`]">></div>
        <!--默认的中间内容-->
        <div
          v-else
          :class="[`line`, { process: currentIndexCp < injectOps.active - 1 }]"
        ></div>
      </template>
    </div>

    <div
      :class="[`content-part`, currentStatusCp]"
      style="display: flex; flex-direction: column"
    >
      <div>
        <div
          v-if="title || $slots.title"
          :class="[`title`, { center: injectOps.alignCenter }]"
        >
          <template v-if="$slots.title">
            <slot name="title"></slot>
          </template>
          <template v-else>
            {{ title }}
          </template>
        </div>
      </div>

      <div v-if="content || $slots.default">
        <div
          v-if="$slots.default"
          :class="[`content`, { center: injectOps.alignCenter }]"
        >
          <slot></slot>
        </div>
        <div v-else>
          {{ content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  computed,
  defineComponent,
  inject,
  onBeforeMount,
  onUnmounted,
} from 'vue';

import { COMP_NAME, CLS_PRE, EMITS_DEC, PROPS_DES } from './config';

import { PROVIDE_KEY } from '@/comps/steps/src/config';

const TYPES = {
  ERROR: 'error',
  ACTIVE: 'active',
  SUCCESS: 'success',
  WAIT: 'wait',
};

export default defineComponent({
  name: COMP_NAME,

  emits: EMITS_DEC,

  props: PROPS_DES,

  setup(_, { expose }) {
    const injectOps = inject(PROVIDE_KEY);

    const registerOps = {};

    const currentIndexCp = injectOps.getCurIndexCp(registerOps);

    const isLastCp = injectOps.getIsLastCp(registerOps);

    const currentStatusCp = computed(() => {
      let status = '';
      if (injectOps.active === currentIndexCp.value && injectOps.error) {
        status = TYPES.ERROR;
      } else if (injectOps.active === currentIndexCp.value) {
        status = TYPES.ACTIVE;
      } else if (injectOps.active > currentIndexCp.value) {
        status = TYPES.SUCCESS;
      } else {
        status = TYPES.WAIT;
      }
      return status;
    });

    onBeforeMount(() => {
      injectOps.register(registerOps);
    });

    onUnmounted(() => {
      injectOps.destroyItem(registerOps);
    });

    expose();

    return {
      TYPES,
      CLS_PRE,
      isLastCp,
      currentIndexCp,
      currentStatusCp,
      injectOps,
    };
  },
});
</script>

<style lang="scss" src="./css/index.scss" scoped></style>
