<template>
  <div class="v-tree-node">
    <ul v-for="(item, index) in node" class="v-tree-ul" :key="index">
      <li
        v-if="!showComponent"
        :class="[
          'v-tree-li',
          item.selected ? 'selected' : '',
          item.disabled ? 'disabled' : '',
        ]"
        @click.stop="handleClickBlank(item, index)"
        :style="{ paddingLeft: level * 20 + 'px' }"
      >
        <i
          v-if="item.isParent"
          class="iconfont icon-v-down v-icon-direction"
          :style="{ left: level * 20 - 16 - 2 + 'px' }"
          :class="!item.expandNode && 'v-parent-not-expand'"
        ></i>
        <v-checkbox
          v-if="showCheckbox"
          :modelValue="getCheckboxShow(item)"
          :isIndeterminate="item.checkboxType === 1 || item.checkboxType === 2"
          @click.stop
          @update:modelValue="handleCheckChange(item)"
          @part-check-change="handleCheckChange(item)"
        ></v-checkbox>
        <a :class="['a-link']" @click.stop="handleClickWords(item)">{{
          item.value
        }}</a>
      </li>
      <!--自定义展示模板-->
      <template v-else>
        <component
          :is="showComponent"
          :index="index"
          :level="level"
          :nodeData="nodeData"
          :setting="setting"
          :item="item"
          :style="{ paddingLeft: level * 20 + 'px' }"
          :class="[
            'v-tree-li',
            item.selected ? 'selected' : '',
            item.disabled ? 'disabled' : '',
          ]"
          @click-blank="handleClickBlank(item, index)"
          @click-words="handleClickWords(item)"
          @input="handleCheckChange(item)"
          @part-check-change="handleCheckChange(item)"
        ></component>
      </template>
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
          :is="COMPONENT_NAME"
          :level="level + 1"
          :node-data="item.nodeList"
          :setting="setting"
        >
        </component>
      </template>
    </ul>
  </div>
</template>

<script>
import { defineComponent, inject, watch, computed, toRef } from 'vue';
import { useCheckbox } from '../../compos/useCheckbox';
import vCheckbox from '@/comps/checkbox/src/index';

const COMPONENT_NAME = 'v-tree-node';

export default defineComponent({
  name: COMPONENT_NAME,

  components: {
    vCheckbox,
  },

  props: {
    level: {},
    nodeData: {
      required: true,
      type: Array,
    },
    setting: {
      required: true,
      type: Object,
    },
  },

  setup(props) {
    const { changeCheckbox } = useCheckbox(props.setting);
    const injectOps = inject('v-tree');
    const node = toRef(props, 'nodeData');

    const showCheckbox = computed(() => {
      return (
        props.setting.viewSetting &&
        props.setting.viewSetting.showCheckBox === true
      );
    });
    const showComponent = computed(() => {
      return (
        props.setting.viewSetting && props.setting.viewSetting.componentName
      );
    });

    function getCheckboxShow(item) {
      return item.checkboxType === 3;
    }

    // 选中节点时触发
    function itemSelected(item, eachItem) {
      if (!eachItem) {
        itemSelected(item, props.setting.nodeList);
      } else {
        eachItem.forEach((x) => {
          if (x !== item) {
            x.selected = false;
          } else if (!item.selected) {
            x.selected = true;
          }

          if (!!x.nodeList && x.nodeList.length > 0) {
            itemSelected(item, x.nodeList);
          }
        });
      }
    }

    // 点击文字时触发的事件
    function handleClickWords(item) {
      if (item.disabled) {
        return;
      }

      if (
        item.isParent &&
        !props.setting.viewSetting.parentLevelTriggerSelected
      ) {
        item.expandNode = !item.expandNode;
        return;
      }

      itemSelected(item);
      injectOps.nodeSelected([item]);
    }

    // 点击空白处触发的事件
    function handleClickBlank(item) {
      if (item.disabled) {
        return;
      }

      if (item.isParent) {
        item.expandNode = !item.expandNode;
      } else {
        handleClickWords(item);
      }
    }

    // 点击check多选框时改变状态
    function handleCheckChange(item) {
      if (item.disabled) {
        return;
      }
      changeCheckbox(item);
      injectOps.nodeChecked([item]);
    }

    watch(
      () => props.nodeData,
      () => {
        node.value = props.nodeData;
      }
    );

    return {
      COMPONENT_NAME,
      node,
      showComponent,
      handleClickBlank,
      showCheckbox,
      getCheckboxShow,
      handleCheckChange,
      handleClickWords,
    };
  },
});
</script>

<style lang="scss" src="./css/index.scss" scoped></style>
