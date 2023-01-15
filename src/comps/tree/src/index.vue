<template>
  <div :class="[`${CLS_PRE}-tree`]">
    <div v-if="nodeListRf.length > 0">
      <node
        :showCheckbox="isShowCheckboxCp"
        :nodeList="nodeListRf"
        :parentSelected="isParentSelectedCp"
        :level="1"
      >
        <template v-if="$slots.default" #default="{ item }">
          <slot :item="item"></slot>
        </template>
      </node>
    </div>
    <div v-else class="v-tree-no-data">
      <span>暂无数据</span>
    </div>
  </div>
</template>

<script>
import node from './comps/node/index';
import { defineComponent, provide, reactive, toRef } from 'vue';

import {
  COMP_NAME,
  CLS_PRE,
  EMITS_DEC,
  PROPS_DES,
  PROVIDE_KEY,
} from './config';
import { useExpand } from '@/comps/tree/src/compos/useExpand';
import { useCheckbox } from '@/comps/tree/src/compos/useCheckbox';
import { useSelected } from '@/comps/tree/src/compos/useSelected';
import { useNodeList } from '@/comps/tree/src/compos/useNodeList';

export default defineComponent({
  name: COMP_NAME,

  components: {
    node: node,
  },

  emits: EMITS_DEC,

  props: PROPS_DES,

  setup(props, { emit }) {
    const { expandKeysRf, changeExpand, getIsParent } = useExpand(
      toRef(props, 'expandOps'),
      toRef(props, 'nodeList')
    );

    const { selectedKeyRf, isParentSelectedCp, changeSelect } = useSelected(
      toRef(props, 'selectedOps')
    );

    const { checkedKeysRf, isShowCheckboxCp, changeCheck, getIsBaseChild } =
      useCheckbox(toRef(props, 'checkedOps'), toRef(props, 'nodeList'));

    const { nodeListRf } = useNodeList(
      toRef(props, 'nodeList'),
      selectedKeyRf,
      expandKeysRf,
      checkedKeysRf,
      getIsBaseChild,
      getIsParent
    );

    provide(
      PROVIDE_KEY,
      reactive({
        changeCheck: changeCheck,
        changeSelect: changeSelect,
        changeExpand: changeExpand,
      })
    );

    return {
      CLS_PRE,
      nodeListRf,
      isShowCheckboxCp,
      isParentSelectedCp,
    };
  },
});
</script>

<style lang="scss" src="./css/index.scss" scoped></style>
