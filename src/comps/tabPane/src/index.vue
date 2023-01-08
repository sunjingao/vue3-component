<template>
  <div v-show="isActiveCp" :class="[`${CLS_PRE}-tab-pane`]">
    <slot></slot>
  </div>
</template>

<script>
import {
  defineComponent,
  inject,
  reactive,
  onBeforeMount,
  onBeforeUnmount,
  toRef,
  computed,
} from 'vue';

import { COMP_NAME, CLS_PRE, EMITS_DEC, PROPS_DES } from './config';

import { PROVIDE_KEY } from '@/comps/tabs/src/config';

export default defineComponent({
  name: COMP_NAME,

  emits: EMITS_DEC,

  props: PROPS_DES,

  setup(props, { expose }) {
    const injectOps = inject(PROVIDE_KEY);
    const isActiveCp = computed(() => props.value === injectOps.modelValue);

    const registerOps = reactive({
      value: undefined,
      label: undefined,
      disabled: false,
      isActiveCp: false,
    });

    function registerCur() {
      registerOps.value = toRef(props, 'value');
      registerOps.label = toRef(props, 'label');
      registerOps.disabled = toRef(props, 'disabled');
      registerOps.isActiveCp = isActiveCp;

      injectOps.register(registerOps);
    }

    onBeforeMount(() => {
      registerCur();
    });

    onBeforeUnmount(() => {
      injectOps.destroyItem(registerOps);
    });

    expose();

    return {
      CLS_PRE,
      isActiveCp,
    };
  },
});
</script>

<style lang="scss" src="./css/index.scss" scoped></style>
