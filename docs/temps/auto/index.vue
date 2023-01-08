<template>
  <div>label:{{ item.label }} value:{{ item.value }}</div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'auto',
  props: {
    item: {
      require: true,
      type: Object,
    },
  },
});
</script>
