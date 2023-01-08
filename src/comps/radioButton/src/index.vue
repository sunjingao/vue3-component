<template>
  <span
    :class="[
      `${CLS_PRE}-radio-button`,
      {
        checked: isCheckedCp,
        disabled: isDisabledCp,
      },
    ]"
    @click="handleToggle"
  >
    <span :class="[`${CLS_PRE}-radio-content`]">
      <slot></slot>
    </span>
  </span>
</template>

<script>
import { defineComponent, computed, inject } from 'vue';

import { COMP_NAME, CLS_PRE, EMITS, EMITS_DEC, PROPS_DES } from './config';
import { PROVIDE_KEY } from '@/comps/radioGroup/src/config';

export default defineComponent({
  name: COMP_NAME,

  emits: EMITS_DEC,

  props: PROPS_DES,

  setup(props, { emit, expose }) {
    const injectOps = inject(PROVIDE_KEY, undefined);

    const isSingle = !injectOps;

    const isCheckedCp = computed(() => {
      if (isSingle) {
        return props.modelValue === props.value;
      } else {
        return injectOps.modelValue === props.value;
      }
    });

    const isDisabledCp = computed(() => {
      return props.disabled || (!isSingle && injectOps.disabled) || false;
    });

    function handleToggle() {
      if (isDisabledCp.value) {
        return;
      }

      if (
        (isSingle && props.modelValue === props.value) ||
        (!isSingle && injectOps.modelValue === props.value)
      ) {
        return;
      }

      if (isSingle) {
        emit(EMITS.CHANGE, props.value);
      } else {
        injectOps.changeMV(props.value);
      }
    }

    expose();

    return {
      CLS_PRE,
      isCheckedCp,
      isDisabledCp,
      handleToggle,
    };
  },
});
</script>

<style lang="scss" src="./css/index.scss" scoped></style>
