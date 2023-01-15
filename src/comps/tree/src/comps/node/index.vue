<template>
  <div :class="[`${CLS_PRE}-tree-node`]">
    <ul
      v-for="(item, index) in nodeList"
      :class="[`${CLS_PRE}-tree-ul`]"
      :key="index"
    >
      <li
        :class="[
          `${CLS_PRE}-tree-li`,
          {
            selected: item.selected,
            disabled: item.disabled,
          },
        ]"
        @click.stop="handleClick(item, index)"
        :style="{ paddingLeft: level * 20 + 'px' }"
      >
        <i
          v-if="item.isParent"
          :style="{ left: level * 20 - 16 - 2 + 'px' }"
          :class="[
            `iconfont`,
            `icon-v-down`,
            `${CLS_PRE}-icon-direction`,
            {
              'v-parent-not-expand': !item.expandNode,
            },
          ]"
        ></i>
        <v-checkbox
          v-if="showCheckbox"
          :disabled="item.disabled"
          :isIndeterminate="item.checkType === CHECK_TYPES.PART"
          :modelValue="getCheckboxShow(item)"
          @click.stop
          @update:modelValue="handleCheckChange(item)"
          @part-check-change="handleCheckChange(item)"
        ></v-checkbox>
        <template v-if="$slots.default">
          <slot :item="item"></slot>
        </template>
        <a v-else :class="['a-link']">{{ item.label }}</a>
      </li>
      <!--递归展示子节点-->
      <template
        v-if="
          item.nodeList &&
          item.nodeList.length > 0 &&
          item.isParent &&
          item.expandNode
        "
      >
        <component
          :is="COMP_NAME"
          :level="level + 1"
          :showCheckbox="showCheckbox"
          :nodeList="item.nodeList"
          :parentSelected="parentSelected"
        >
          <template v-if="$slots.default" #default="{ item }">
            <slot :item="item"></slot>
          </template>
        </component>
      </template>
    </ul>
  </div>
</template>

<script>
import { defineComponent, inject } from 'vue';
import vCheckbox from '@/comps/checkbox/src/index';

import { COMP_NAME, CLS_PRE, EMITS_DEC, PROPS_DES } from './config';

import { PROVIDE_KEY, CHECK_TYPES } from '../../config';

export default defineComponent({
  name: COMP_NAME,

  components: {
    vCheckbox,
  },

  props: PROPS_DES,

  emits: EMITS_DEC,

  setup(props) {
    const injectOps = inject(PROVIDE_KEY);

    function getCheckboxShow(item) {
      return item.checkType === CHECK_TYPES.ALL;
    }

    function handleClick(item) {
      if (item.isParent) {
        injectOps.changeExpand(item);
      }

      if (item.disabled) {
        return;
      }

      if (props.parentSelected) {
        injectOps.changeSelect(item);
      } else if (!item.isParent) {
        injectOps.changeSelect(item);
      }
    }

    function handleCheckChange(item) {
      if (item.disabled) {
        return;
      }
      injectOps.changeCheck(item);
    }

    return {
      CLS_PRE,
      COMP_NAME,
      CHECK_TYPES,
      getCheckboxShow,
      handleCheckChange,
      handleClick,
    };
  },
});
</script>

<style lang="scss" src="./css/index.scss" scoped></style>
