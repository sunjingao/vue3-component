<template>
  <v-select
    v-model="modelValue"
    @change="handleChangeVal"
    width="70px"
    height="30px"
    :class="[`${CLS_PRE}-sizes`]"
  >
    <v-option
      v-for="(item, key) in optionsArrCp"
      :key="key"
      :label="item.label"
      :disabled="item.disabled"
      :value="item.value"
    >
    </v-option>
  </v-select>
</template>

<script>
import { computed, defineComponent, ref, watch } from 'vue';
import vSelect from '@/comps/select';
import vOption from '@/comps/option';

import { CLS_PRE, COMP_NAME, EMITS, EMITS_DEC, PROPS_DES } from './config';

export default defineComponent({
  name: COMP_NAME,
  components: [vSelect, vOption],
  emits: EMITS_DEC,
  props: PROPS_DES,
  setup(props, { emit, expose }) {
    const modelValue = ref(0);

    const optionsArrCp = computed(() => {
      return (
        (props.selectArr && [...props.selectArr]) || [
          { value: 10, label: 10 },
          { value: 20, label: 20 },
          { value: 30, label: 30 },
        ]
      );
    });

    function handleChangeVal(val) {
      emit(EMITS.SELECT_CHANGE, val);
    }

    watch(
      () => props.pageSize,
      (val) => {
        modelValue.value = val;
      },
      {
        immediate: true,
      }
    );

    expose();

    return {
      CLS_PRE,
      modelValue,
      optionsArrCp,
      handleChangeVal,
    };
  },
});
</script>

<style lang="scss" src="./css/index.scss" scoped></style>
