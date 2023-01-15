# NavMenu 导航菜单

导航菜单

#### 顶栏

参考 Tabs 用法

:::demo

```html

<template>

  <div class="vNavMenuDoc">
    <div class="bc">

      <v-tabs v-model="activeName" @tab-click="handleClick">
        <v-tab-pane label="菜单1" value="first"></v-tab-pane>
        <v-tab-pane label="菜单2" value="second"></v-tab-pane>
        <v-tab-pane label="菜单3" value="third" disabled></v-tab-pane>
        <v-tab-pane label="菜单4" value="forth"></v-tab-pane>
      </v-tabs>
    </div>
  </div>
</template>
<script>
  import { ref } from 'vue';

  export default {
    setup() {
      const activeName = ref('second');

      function handleClick(value, label, event) {
        console.log('value:', value, 'label:', label, 'event:', event);
      }

      return {
        activeName,
        handleClick,
      }
    },
  }
</script>

```

:::

#### 侧栏

使用 tree 组件

:::demo

```html

<template>
  <div class="vTreeDoc">
    <div class="v-tree-test">
      <v-tree
        :nodeList="nodeList"
        @select="select"
        @check="check"
        @expand="expand"
      >
      </v-tree>
    </div>
  </div>
</template>

<script>

  import { reactive } from 'vue';

  export default {

    setup() {
      const nodeList = reactive([
        {
          key: "公司基本资料",
          label: "公司基本资料",
          nodeList: [
            {
              key: "公司介绍",
              label: "公司介绍",
            },
            {
              key: "股东及机构选股",
              label: "股东及机构选股",
              nodeList: [
                {
                  key: "十大股东明细",
                  label: "十大股东明细",
                },
                {
                  key: "十大股东明细2",
                  label: "十大股东明细2",
                },
                {
                  key: "十大流通股东",
                  label: "十大流通股东",
                }
              ]
            }
          ]
        },
        {
          key: "财务数据",
          label: "财务数据",
          nodeList: [
            {
              key: "财务摘要",
              label: "财务摘要",
              nodeList: [
                {
                  key: "财务摘要1",
                  label: "财务摘要1",
                },
                {
                  key: "财务摘要2",
                  label: "财务摘要2",
                }
              ]
            },
            {
              key: "主营构成",
              label: "主营构成",
              nodeList: [
                {
                  key: "按项目名称展示",
                  label: "按项目名称展示",
                },
                {
                  key: "按行业分类",
                  label: "按行业分类",
                }
              ]
            }
          ]
        }
      ]);

      function select(data) {
        console.log('select:', data);
      }

      function check(data) {
        console.log('check:', data);
      }

      function expand(data) {
        console.log('expand', data)
      }

      return {
        nodeList,
        select,
        check,
        expand,
      }
    }
  }
</script>

```

:::

