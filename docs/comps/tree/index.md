# Tree 树形控件

属性控件基本用法

#### 基本用法

标签基本用法

:::demo 基本用法

```html

<template>

  <div class="vTreeDoc">

    <div class="v-tree-test">

      <v-tree :option="treeOption1"></v-tree>

    </div>

    <div class="v-tree-test">

      <v-tree :option="treeOption2"></v-tree>

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

            nodeList: [

              {

                key: "财务摘要",

                value: "财务摘要",

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

      const treeOption2 = reactive({

        callBack: {

          onSelected(data) {

            console.log('onSelected:', data);

          }

        },

        viewSetting: {

          expandAll: true,

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

            nodeList: [

              {

                key: "财务摘要",

                value: "财务摘要",

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

        treeOption1,

        treeOption2,

      }

    },

  }

</script>

```

:::

#### 父节点允许选中

父节点允许选中

:::demo 设置 parentLevelTriggerSelected 为true

```html

<template>

  <div class="vTreeDoc">

    <div class="v-tree-test">

      <v-tree :option="treeOption"></v-tree>

    </div>

  </div>

</template>

<script>

  import { reactive } from 'vue';

  export default {

    setup() {

      const treeOption = reactive({

        callBack: {

          onSelected(data) {

            console.log('onSelected:', data);

          }

        },

        viewSetting: {

          expandAll: true, // 是否展开全部

          parentLevelTriggerSelected: true, // 含有子节点的节点点击文字会触发事件

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

            nodeList: [

              {

                key: "财务摘要",

                value: "财务摘要",

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

      })

      return {

        treeOption

      }

    },

  }

</script>

```

:::

#### 禁止选中

禁止操作条目

:::demo 设置disabled禁止选中

```html

<template>

  <div class="vTreeDoc">

    <div class="v-tree-test">

      <v-tree :option="treeOption"></v-tree>

    </div>

  </div>

</template>

<script>

  import { reactive } from 'vue';

  export default {

    setup() {

      const treeOption = reactive({

        callBack: {

          onSelected(data) {

            console.log('onSelected:', data);

          }

        },

        viewSetting: {

          expandAll: true,

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

                    disabled: true,

                  }

                ]

              }

            ]

          },

          {

            key: "财务数据",

            value: "财务数据",

            nodeList: [

              {

                key: "财务摘要",

                value: "财务摘要",

                disabled: true,

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

        treeOption

      }

    }

  }

</script>

```

:::

#### 展开特定节点

默认展开特定节点

:::demo 设置 expandAll 属性

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

        viewSetting: {},

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

      })

      return {

        treeOption1

      }

    },

  }

</script>

```

:::

#### 展示多选

展示出多选框

:::demo 设置 showCheckBox

```html

<template>
  <div class="vTreeDoc">
    <div class="v-tree-test">
      <v-tree :option="treeOption1"></v-tree>
    </div>
    <div class="v-tree-test">
      <v-tree :option="treeOption2"></v-tree>
    </div>
  </div>
</template>
<script>
  import { reactive } from 'vue';

  export default {
    setup() {
      const treeOption1 = reactive({
        callBack: {
          onChecked(data) {
            console.log('onChecked:', data);
          },
          onSelected(data) {
            console.log('onSelected:', data);
          }
        },
        viewSetting: {
          expandAll: true,
          showCheckBox: true,
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
                    checked: true
                  }
                ]
              }
            ]
          },

          {
            key: "财务数据",
            value: "财务数据",
            nodeList: [
              {
                key: "财务摘要",
                value: "财务摘要",
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
                    selected: true
                  },
                  {
                    key: "按行业分类",
                    value: "按行业分类",
                    disabled: true,
                    checked: true,
                  }
                ]
              }
            ]
          }
        ]
      });
      const treeOption2 = reactive({
        callBack: {
          onSelected(data) {
            console.log('onSelected:', data);
          }
        },
        viewSetting: {
          expandAll: true,
          showCheckBox: true,
          checkedAll: true, // 是否全部选中
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
                    checked: true
                  }
                ]
              }
            ]
          },

          {
            key: "财务数据",
            value: "财务数据",
            nodeList: [
              {
                key: "财务摘要",
                value: "财务摘要",
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
                    selected: true
                  },
                  {
                    key: "按行业分类",
                    value: "按行业分类",
                    disabled: true,
                    checked: true,
                  }
                ]
              }
            ]
          }
        ]
      });
      return {
        treeOption1,
        treeOption2,
      }
    },
  }
</script>
```

:::

#### 自定义样式

自定义条目的展示样式
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

### API

#### props

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| option | 配置 | object | - | - |
| option.viewSetting.showCheckBox | 展示checkbox | boolean | - | false |
| option.viewSetting.checkedAll | 所有checkbox都选中 | boolean | - | false |
| option.viewSetting.expandAll | 展开所有节点 | boolean | - | false |
| option.viewSetting.parentLevelTriggerSelected | 点击父元素item也触发onSelected事件 | boolean | - | false |
| option.viewSetting.componentName | 自定义组件名称 | String | - | - |
| option.nodeSetting.key | 每个node的key | string | - | - |
| option.nodeSetting.value | 每个node显示的值 | string | - | - |
| option.nodeSetting.nodeList | 子节点列表 | array | - | - |
| option.nodeSetting.disabled | 禁止选中 | boolean | - | false |
| option.nodeSetting.selected | 文字是否被选中 | boolean | - | false |
| option.nodeSetting.checked | 多选框是否默认选中 | boolean | - | false |
| option.nodeSetting.expandNode | 是否展开子节点 | boolean | - | false |

#### method

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| option.callBack.onChecked | checkbox选中回调 | 被选中的item | 
| option.callBack.onSelected | 点击item回调 | 被选中的item | 
