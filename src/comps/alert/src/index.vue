<template>
  <div
    v-if="isShowRf"
    :class="[`${CLS_PRE}-alert`]"
    :style="{ zIndex: zIndex }"
  >
    <!--最外面加一层元素的原因是在message中会改变最外面的position为fixed，如果是flex布局会有问题-->
    <div
      :class="[
        `${CLS_PRE}-alert-part`,
        type,
        {
          'is-center': textCenter,
        },
      ]"
      :style="{
        textAlign: !!textCenter ? 'center' : 'left',
      }"
    >
      <div v-if="showIcon" :class="[`icon`]">
        <i
          v-if="type === 'success'"
          :class="[`iconfont`, `icon-v-success`]"
        ></i>
        <i v-if="type === 'error'" :class="[`iconfont`, `icon-v-error`]"></i>
        <i
          v-if="type === 'warning'"
          :class="[`iconfont`, `icon-v-warning`]"
        ></i>
        <i v-if="type === 'tip'" :class="[`iconfont`, `icon-v-tip`]"></i>
      </div>
      <div :class="[`content`]">
        <div :class="[`title`]">
          <div v-if="$slots.title">
            <slot name="title"></slot>
          </div>
          <div v-else>
            {{ title }}
          </div>
        </div>
        <div :class="[`description`]">
          <slot></slot>
        </div>
      </div>
      <div v-if="closable" :class="[`close`]" @click="handleClose">
        <div v-if="$slots.close"></div>
        <div v-else-if="closeText">{{ closeText }}</div>
        <div v-else>×</div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

import { COMP_NAME, CLS_PRE, EMITS, EMITS_DEC, PROPS_DES } from './config';

export default defineComponent({
  name: COMP_NAME,

  emits: EMITS_DEC,

  props: PROPS_DES,

  setup(props, { emit, expose }) {
    const isShowRf = ref(true);

    function handleClose(event) {
      if (props.closeMethod) {
        return props.closeMethod();
      } else {
        close();
        emit(EMITS.CLOSE, event);
      }
    }

    function open() {
      isShowRf.value = true;
    }

    function close() {
      isShowRf.value = false;
    }

    expose({
      isShowRf: isShowRf,
      open: open,
      close: close,
    });

    return {
      CLS_PRE,
      isShowRf,
      handleClose,
    };
  },
});
</script>

<style lang="scss" src="./css/index.scss" scoped></style>
