<template>
  <span
    :class="[
      `${CLS_PRE}-checkbox-button`,
      {
        disabled: isDisabledCp,
        checked: isCheckedCp,
      },
    ]"
    @click="handleToggle"
  >
    <span :class="[`${CLS_PRE}-checkbox-content`]">
      <slot></slot>
    </span>
  </span>
</template>

<script>
import { defineComponent, computed, inject } from 'vue';

import { COMP_NAME, CLS_PRE, EMITS_DEC, PROPS_DES } from './config';

import { PROVIDE_KEY } from '@/comps/checkboxGroup/src/config';

export default defineComponent({
  name: COMP_NAME,

  emits: EMITS_DEC,

  props: PROPS_DES,

  setup(props, { expose }) {
    const injectOps = inject(PROVIDE_KEY);

    const isCheckedCp = computed(() =>
      injectOps.modelValue.includes(props.value)
    );

    const isDisabledCp = computed(() => {
      return props.disabled || injectOps.disabled;
    });

    function handleToggle() {
      if (isDisabledCp.value) {
        return;
      }

      let checkedValueArr = [...injectOps.modelValue];

      if (isCheckedCp.value) {
        checkedValueArr = checkedValueArr.filter((x) => x !== props.value);
      } else {
        checkedValueArr.push(props.value);
      }

      injectOps.changeMV(checkedValueArr.sort((a, b) => a - b));
    }

    expose();

    return {
      CLS_PRE,
      isDisabledCp,
      isCheckedCp,
      handleToggle,
    };
  },
});
</script>

<style lang="scss" src="./css/index.scss" scoped></style>
