<template>
  <span>c{{ item.label }}</span>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'cas',
  props: {
    item: {
      required: true,
      type: Object,
    },
  },
});
</script>
