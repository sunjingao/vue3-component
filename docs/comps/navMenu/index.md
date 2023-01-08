# NavMenu 导航菜单

导航菜单

#### 顶栏

参考 Tabs 用法

:::demo 基本用法

```html

<template>

  <div class="vNavMenuDoc">
    <div class="bc">

      <v-tabs v-model="activeName" @tab-click="handleClick">
        <v-tab-pane label="处理中心" value="first"></v-tab-pane>
        <v-tab-pane value="second">
          <v-dropdown hoverTrigger>
          <span class="v-dropdown-link" @click.stop>
            下拉菜单
          </span>
            <template #dropdown>
              <v-dropdown-menu>
                <v-dropdown-item>黄金糕</v-dropdown-item>
                <v-dropdown-item>狮子头</v-dropdown-item>
                <v-dropdown-item>螺蛳粉</v-dropdown-item>
                <v-dropdown-item disabled>双皮奶</v-dropdown-item>
                <v-dropdown-item divided>蚵仔煎</v-dropdown-item>
              </v-dropdown-menu>
            </template>
          </v-dropdown>
        </v-tab-pane>
        <v-tab-pane label="消息中心" value="third" disabled></v-tab-pane>
        <v-tab-pane value="forth">
          <div @click="openBaidu">百度</div>
        </v-tab-pane>
      </v-tabs>

    </div>
  </div>
</template>
<script>
  import { ref } from 'vue';

  export default {
    setup() {
      const activeName = ref('second');

      function handleClick(instance, event) {
        console.log(instance, event);
      }

      function openBaidu() {
        window.open("https://www.baidu.com");
      }

      return {
        activeName,
        handleClick,
        openBaidu,
      }
    },
  }
</script>

```

:::

#### 自定义样式

使用tree自定义模板
:::demo 设置viewSetting的componentName为自定义组件名称

```html

<template>
  <div class="vTreeDoc">
    <div class="v-tree-test">
      <v-tree :option="treeOption1"></v-tree>
    </div>
  </div>
</template>
<script>
  import { reactive } from 'vue';

  export default {
    setup() {
      const treeOption1 = reactive({
        callBack: {
          onSelected(data) {
            console.log('onSelected:', data);
          }
        },
        viewSetting: {
          componentName: 'test-tree'
        },
        nodeList: [
          {
            key: "公司基本资料",
            value: "公司基本资料",
            nodeList: [
              {
                key: "公司介绍",
                value: "公司介绍",
              },
              {
                key: "股东及机构选股",
                value: "股东及机构选股",
                nodeList: [
                  {
                    key: "十大股东明细",
                    value: "十大股东明细",
                  },
                  {
                    key: "十大股东明细2",
                    value: "十大股东明细2",
                  },
                  {
                    key: "十大流通股东",
                    value: "十大流通股东",
                  }
                ]
              }
            ]
          },
          {
            key: "财务数据",
            value: "财务数据",
            expandNode: true,
            nodeList: [
              {
                key: "财务摘要",
                value: "财务摘要",
                expandNode: true,
                nodeList: [
                  {
                    key: "财务摘要1",
                    value: "财务摘要1",
                  },
                  {
                    key: "财务摘要2",
                    value: "财务摘要2",
                  }
                ]
              },
              {
                key: "主营构成",
                value: "主营构成",
                nodeList: [
                  {
                    key: "按项目名称展示",
                    value: "按项目名称展示",
                  },
                  {
                    key: "按行业分类",
                    value: "按行业分类",
                  }
                ]
              }
            ]
          }
        ]
      });
      return {
        treeOption1
      }
    }
  }
</script>
```

:::

