<template>
  <span
    :class="[
      `${CLS_PRE}-checkbox`,
      {
        border: isBorderCp,
        disabled: isDisabledCp,
        checked: isCheckedCp,
        notAll: isIndeterminate,
      },
    ]"
    @click="handleToggle"
  >
    <i :class="[`${CLS_PRE}-checkbox-icon`]"></i>
    <span :class="[`${CLS_PRE}-checkbox-content`]">
      <slot></slot>
    </span>
  </span>
</template>

<script>
import { defineComponent, computed, inject } from 'vue';

import { COMP_NAME, CLS_PRE, EMITS, EMITS_DEC, PROPS_DES } from './config';

import { PROVIDE_KEY } from '@/comps/checkboxGroup/src/config';

export default defineComponent({
  name: COMP_NAME,

  emits: EMITS_DEC,

  props: PROPS_DES,

  setup(props, { emit, expose }) {
    const injectOps = inject(PROVIDE_KEY, undefined);

    const isSingle = !injectOps;

    const isCheckedCp = computed(() => {
      if (isSingle) {
        if (props.isIndeterminate) {
          return false;
        } else {
          return props.modelValue === true;
        }
      } else {
        const checkedValue = injectOps.modelValue;
        return checkedValue.includes(props.value);
      }
    });

    const isBorderCp = computed(() => {
      return isSingle ? props.border : injectOps.border;
    });

    const isDisabledCp = computed(() => {
      return isSingle ? props.disabled : props.disabled || injectOps.disabled;
    });

    function handleToggle() {
      if (isDisabledCp.value) {
        return;
      } else if (props.isIndeterminate) {
        emit(EMITS.PART_CHECK_CHANGE);
        return;
      }

      if (isSingle) {
        emit(EMITS.UPDATE_MODEL_VALUE, !props.modelValue);
        emit(EMITS.CHANGE, !props.modelValue);
      } else {
        let checkedArr = [...injectOps.modelValue];

        if (isCheckedCp.value) {
          checkedArr = checkedArr.filter((x) => x !== props.value);
        } else {
          checkedArr.push(props.value);
        }

        injectOps.changeMV(checkedArr.sort((a, b) => a - b));
      }
    }

    expose();

    return {
      CLS_PRE,
      isCheckedCp,
      isDisabledCp,
      isBorderCp,
      handleToggle,
    };
  },
});
</script>

<style lang="scss" src="./css/index.scss" scoped></style>
