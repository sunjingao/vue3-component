# Tree 树形控件

树结构数据的展示与操作

#### 基本用法

标签基本用法

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
    },
  }

</script>

```

:::

#### 父节点允许选中

父节点允许选中

:::demo

```html

<template>

  <div class="vTreeDoc">
    <div class="v-tree-test">
      <v-tree
        :nodeList="nodeList"
        :selectedOps="selectedOps"
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
      const selectedOps = {
        parentSelected: true,
      }

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
        selectedOps,
        select,
        check,
        expand,
      }
    },
  }
</script>

```

:::

#### 禁止选中

禁止操作条目

:::demo

```html

<template>

  <div class="vTreeDoc">
    <div class="v-tree-test">
      <v-tree
        :nodeList="nodeList"
        :expandOps="expandOps"
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
      const expandOps = {
        expandAll: true,
        defaultExpandedKeys: []
      }

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
              disabled: true,
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
        expandOps,
        select,
        check,
        expand,
      }
    },
  }
</script>

```

:::

#### 展开特定节点

默认展开特定节点

:::demo

```html

<template>

  <div class="vTreeDoc">
    <div class="v-tree-test">
      <v-tree
        :nodeList="nodeList"
        :expandOps="expandOps"
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

      const expandOps = {
        expandAll: false,
        defaultExpandedKeys: ['公司基本资料', '股东及机构选股']
      }

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
        expandOps,
        select,
        check,
        expand,
      }
    },
  }
</script>

```

:::

#### 展示多选

展示出多选框

:::demo

```html

<template>

  <div class="vTreeDoc">
    <div class="v-tree-test">
      <v-tree
        :nodeList="nodeList"
        :expandOps="expandOps"
        :checkedOps="checkedOps"
        @select="select"
        @check="check"
        @expand="expand"
      >
      </v-tree>
    </div>

  </div>

</template>

<script>

  import { reactive} from 'vue';

  export default {

    setup() {

      const expandOps = {
        expandAll: true,
        defaultExpandedKeys: []
      }

      const checkedOps = {
        isShow: true,
        defaultCheckedKeys: ['公司基本资料']
      }

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
        expandOps,
        checkedOps,
        select,
        check,
        expand,
      }
    },
  }
</script>

```

:::

#### 自定义样式

自定义条目的展示样式

:::demo

```html

<template>

  <div class="vTreeDoc">
    <div class="v-tree-test">
      <v-tree
        :nodeList="nodeList"
        :expandOps="expandOps"
        @select="select"
        @check="check"
        @expand="expand"
      >
        <template #default="{item}">
          aaa{{ item.label }}
        </template>
      </v-tree>
    </div>

  </div>

</template>

<script>

  import { reactive } from 'vue';

  export default {

    setup() {

      const expandOps = {
        expandAll: true,
        defaultExpandedKeys: []
      }

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
        expandOps,
        select,
        check,
        expand,
      }
    },
  }
</script>

```

:::

### API

#### props

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| nodeList | 展示节点数据 | Object | - | - |
| expandOps | 展开项配置 | Object | - | { expandAll: true, defaultExpandedKeys: [] } |
| checkedOps | 多选项配置 | Object | - | { isShow: false, checkedAll: false, defaultCheckedKeys: [] } |
| selectedOps | 选中项配置 | Object | - | { parentSelected: false, defaultSelectedKeys: '' } |

#### event

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| select | 选中触发 | item | 
| check | 多选触发 | item, 选中的节点集合 | 
| expand | 展开触发 | item, 展开的节点集合 | 
