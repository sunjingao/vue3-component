<template>
  <div class="v-tree">
    <div v-if="setting.nodeList.length > 0">
      <node
        :node-data="setting.nodeList"
        :setting="setting"
        @node-check="handleNodeChecked(item)"
        @node-selected="handleNodeSelected(item)"
        :level="1"
      ></node>
    </div>
    <div v-else class="v-tree-noData">
      <span>暂无数据</span>
    </div>
  </div>
</template>

<script>
import node from './comps/node/index';
import deepClone from '@/assets/js/deepClone';
import { useCheckbox } from './compos/useCheckbox';
import { defineComponent, provide, reactive, watch } from 'vue';

const COMPONENT_NAME = 'v-tree';

export default defineComponent({
  name: COMPONENT_NAME,

  components: {
    node: node,
  },

  props: {
    option: {
      required: true,
      type: Object,
    },
  },

  setup(props) {
    const setting = reactive({});
    const defaultSetting = {
      callBack: {
        onChecked: null, // 多选框被选中前触发
        onSelected: null, // 标签被选中
      },
      viewSetting: {
        componentName: '', // 自定义组件名称
        showCheckBox: false, // 是否展示多选
        checkedAll: false, // 是否全部选中
        expandAll: false, // 是否展开全部
        parentLevelTriggerSelected: false, // 含有子节点的节点点击文字会触发事件
      },
      nodeSetting: {
        key: '', // 每个node的key
        value: '', // 每个node显示的值
        nodeList: [], // 子节点列表
        disabled: false, // 禁止选中
        selected: false, // 是否被选中
        checked: '', // 多选框是否默认选中
        expandNode: false, // 是否展开子节点

        parent: null, // 父节点指针
        isParent: false, // 是否有子元素，有则显示展开或搜索图标
        // 被选中的状态
        // 0：自己及子元素都没被选中，
        // 1：除disabled为true的节点外，子节点非全选（一种情况是全部选，另一种情况是选了一部分），
        // 2：除disabled为true的节点外，子节点全选，
        // 3：自己及子元素全被选中
        checkboxType: 0,
      },
    };

    const { initCheckboxType } = useCheckbox(setting);

    // 对node节点的属性进行初始化设置，
    function nodeSetting(node, parentNode) {
      node.parent = parentNode;
      if (
        !node.expandNode &&
        setting.viewSetting &&
        setting.viewSetting.expandAll
      ) {
        node.expandNode = true;
      }
      if (typeof node.isParent === 'undefined') {
        node.isParent = !!node.nodeList && node.nodeList.length > 0;
      }
      node = Object.assign({}, defaultSetting.nodeSetting, node);

      return node;
    }

    // 初始化setting的nodeList
    function getSetting(node) {
      if (node) {
        node.nodeList &&
          node.nodeList.forEach((x, index, originalArr) => {
            nodeSetting(x, node);
            getSetting(x);
          });
      } else {
        // 当无数据时返回空数组
        if (
          !props.option ||
          !props.option.nodeList ||
          props.option.nodeList.length <= 0
        ) {
          for (const k of Object.entries(setting)) {
            setting[k] = null;
          }
          return;
        }

        for (const [k, v] of Object.entries(deepClone(props.option))) {
          setting[k] = v;
        }
        setting.viewSetting = Object.assign(
          {},
          defaultSetting.viewSetting,
          props.option.viewSetting ? props.option.viewSetting : {}
        );

        setting.callBack = Object.assign(
          {},
          defaultSetting.callBack,
          props.option.callBack ? props.option.callBack : null
        );

        setting.nodeList.forEach((x, index, originalArr) => {
          nodeSetting(x, null);
          getSetting(x);
        });
      }
    }

    // 接收tree-node组件中触发的nodeChecked事件
    function handleNodeChecked(item) {
      typeof setting.callBack.onChecked === 'function' &&
        setting.callBack.onChecked(item);
    }

    // 接收tree-node组件中触发的nodeSelected事件
    function handleNodeSelected(item) {
      typeof setting.callBack.onSelected === 'function' &&
        setting.callBack.onSelected(item);
    }

    provide(
      COMPONENT_NAME,
      reactive({
        nodeChecked: handleNodeChecked,
        nodeSelected: handleNodeSelected,
      })
    );

    watch(props.option, () => {
      getSetting();
    });

    getSetting();
    initCheckboxType();

    return {
      setting,
      handleNodeChecked,
      handleNodeSelected,
    };
  },
});
</script>

<style lang="scss" src="./css/index.scss" scoped></style>
