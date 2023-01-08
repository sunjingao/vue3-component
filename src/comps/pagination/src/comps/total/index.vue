<template>
  <span :class="[`${CLS_PRE}-total`]">共{{ total }}条</span>
</template>

<script>
import { defineComponent } from 'vue';

import { COMP_NAME, CLS_PRE, PROPS_DES } from './config';

export default defineComponent({
  name: COMP_NAME,
  props: PROPS_DES,
  setup() {
    return {
      CLS_PRE,
    };
  },
});
</script>

<style lang="scss" src="./css/index.scss" scoped></style>
