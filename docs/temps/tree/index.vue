<template>
  <li @click.stop="handleClickBlank">
    <i
      v-if="item.isParent"
      class="iconfont icon-v-down v-icon-direction"
      :style="{ left: level * 20 - 16 - 2 + 'px' }"
      :class="!item.expandNode && 'v-parent-not-expand'"
    ></i>
    <a :class="['a-link']" @click.stop="handleClickWords(item)">
      自定义{{ item.value }}
    </a>
  </li>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'test-tree',
  emits: ['click-blank', 'click-words'],
  props: {
    index: {},
    level: {},
    nodeData: {},
    setting: {},
    item: {},
  },
  setup(props, { emit }) {
    function handleClickBlank() {
      emit('click-blank', props.item, props.index);
    }
    function handleClickWords() {
      emit('click-words', props.item);
    }
    return {
      handleClickBlank,
      handleClickWords,
    };
  },
});
</script>
