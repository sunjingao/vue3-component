# Transfer 穿梭框

穿梭框

#### 基本用法

基本用法

:::demo 基本用法

```html

<template>
  <v-transfer
    :sourceData="sourceDataRf"
    :targetData="targetDataRf"
    @change="transfer">
  </v-transfer>
</template>
<script>
  import { ref } from 'vue';

  export default {
    setup() {
      const sourceDataRf = ref([
        {
          value: "上海",
          label: "上海",
          key: 0,
          checked: false,
        },
        {
          value: "北京",
          label: "北京",
          key: 1,
          checked: false,
        },
        {
          value: "广州",
          label: "广州",
          key: 2,
          checked: true,
        },
        {
          value: "深圳",
          label: "深圳",
          key: 3,
          checked: true,
        },
        {
          value: "南京",
          label: "南京",
          key: 4,
          checked: false,
        },
        {
          value: "杭州",
          label: "杭州",
          key: 5,
          checked: false,
        },
        {
          value: "重庆",
          label: "重庆",
          key: 6,
          checked: false,
        },
        {
          value: "天津",
          label: "天津",
          key: 7,
          checked: false,
        },
        {
          value: "大连",
          label: "大连",
          key: 8,
          checked: false,
        },
        {
          value: "苏州",
          label: "苏州",
          key: 9,
          checked: false,
        }
      ]);
      const targetDataRf = ref([
        {
          value: "辽宁",
          label: "辽宁",
          key: 10,
          checked: false,
        },
        {
          value: "吉林",
          label: "吉林",
          key: 11,
          checked: false,
        },
        {
          value: "哈尔滨",
          label: "哈尔滨",
          key: 12,
          checked: true,
        }
      ]);

      function transfer(value) {
        console.log("this is in v-transfer");
        console.log(value);
      }

      return {
        sourceDataRf,
        targetDataRf,
        transfer,
      }
    },
  }
</script>
```

:::

#### 禁止选中

禁止操作条目

:::demo 通过添加disabled禁止操作

```html

<template>

  <v-transfer :sourceData="sourceDataRf" :targetData="targetDataRf" @change="transfer">

  </v-transfer>

</template>

<script>

  import { ref } from 'vue';

  export default {

    setup() {

      const sourceDataRf = ref([
        {
          value: "上海",
          label: "上海",
          key: 0,
          checked: false,
          disabled: false
        },
        {
          value: "北京",
          label: "北京",
          key: 1,
          checked: false,
          disabled: false
        },
        {
          value: "广州",
          label: "广州",
          key: 2,
          checked: true,
          disabled: false
        },
        {
          value: "深圳",
          label: "深圳",
          key: 3,
          checked: true,
          disabled: true
        },
        {
          value: "南京",
          label: "南京",
          key: 4,
          checked: false,
          disabled: false
        },
        {
          value: "杭州",
          label: "杭州",
          key: 5,
          checked: false,
          disabled: false
        },
        {
          value: "重庆",
          label: "重庆",
          key: 6,
          checked: false,
          disabled: false
        },
        {
          value: "天津",
          label: "天津",
          key: 7,
          checked: false,
          disabled: false
        },
        {
          value: "大连",
          label: "大连",
          key: 8,
          checked: false,
          disabled: false
        },
        {
          value: "苏州",
          label: "苏州",
          key: 9,
          checked: false,
          disabled: false
        }
      ]);

      const targetDataRf = ref([
        {
          value: "辽宁",
          label: "辽宁",
          key: 10,
          checked: false,
          disabled: true
        },
        {
          value: "吉林",
          label: "吉林",
          key: 11,
          checked: false,
          disabled: false
        },
        {
          value: "哈尔滨",
          label: "哈尔滨",
          key: 12,
          checked: true,
          disabled: false
        }
      ]);

      function transfer(value) {
        console.log("this is in v-transfer");
        console.log(value);
      }

      return {
        sourceDataRf,
        targetDataRf,
        transfer
      }
    }
  }
</script>

```

:::

#### 设置标题与footer

展示自定义标题与footer

:::demo

```html

<template>
  <v-transfer
    :sourceData="sourceDataRf"
    :targetData="targetDataRf"
    @change="transfer"
    :titles="['源数据', '目标数据']">
    <template #source-footer>
      <div style="line-height: 30px;background-color: #f4f4f4;">源数据footer</div>
    </template>
    <template #target-footer>
      <div style="line-height: 30px;background-color: #f4f4f4;">目标数据footer</div>
    </template>
  </v-transfer>
</template>
<script>
  import { ref } from 'vue';

  export default {
    setup() {
      const sourceDataRf = ref([
        {
          value: "上海",
          label: "上海",
          key: 0,
          checked: false,
        },
        {
          value: "北京",
          label: "北京",
          key: 1,
          checked: false,
        },
        {
          value: "广州",
          label: "广州",
          key: 2,
          checked: true,
        },
        {
          value: "深圳",
          label: "深圳",
          key: 3,
          checked: true,
        },
        {
          value: "南京",
          label: "南京",
          key: 4,
          checked: false,
        },
        {
          value: "杭州",
          label: "杭州",
          key: 5,
          checked: false,
        },
        {
          value: "重庆",
          label: "重庆",
          key: 6,
          checked: false,
        },
        {
          value: "天津",
          label: "天津",
          key: 7,
          checked: false,
        },
        {
          value: "大连",
          label: "大连",
          key: 8,
          checked: false,
        },
        {
          value: "苏州",
          label: "苏州",
          key: 9,
          checked: false,
        }
      ]);
      const targetDataRf = ref([
        {
          value: "辽宁",
          label: "辽宁",
          key: 10,
          checked: false,
        },
        {
          value: "吉林",
          label: "吉林",
          key: 11,
          checked: false,
        },
        {
          value: "哈尔滨",
          label: "哈尔滨",
          key: 12,
          checked: true,
        }
      ]);

      function transfer(value) {
        console.log("this is in v-transfer");
        console.log(value);
      }

      return {
        sourceDataRf,
        targetDataRf,
        transfer,
      }
    },
  }
</script>
```

:::

#### 搜索功能

可以根据输入进行过滤

:::demo

```html

<template>
  <v-transfer
    :sourceData="sourceDataRf"
    :targetData="targetDataRf"
    @change="transfer"
    filterable>
  </v-transfer>
</template>
<script>
  import { ref } from 'vue';

  export default {
    setup() {
      const sourceDataRf = ref([
        {
          value: "上海",
          label: "上海",
          key: 0,
          checked: false,
        },
        {
          value: "北京",
          label: "北京",
          key: 1,
          checked: false,
        },
        {
          value: "广州",
          label: "广州",
          key: 2,
          checked: true,
        },
        {
          value: "深圳",
          label: "深圳",
          key: 3,
          checked: true,
        },
        {
          value: "南京",
          label: "南京",
          key: 4,
          checked: false,
        },
        {
          value: "杭州",
          label: "杭州",
          key: 5,
          checked: false,
        },
        {
          value: "重庆",
          label: "重庆",
          key: 6,
          checked: false,
        },
        {
          value: "天津",
          label: "天津",
          key: 7,
          checked: false,
        },
        {
          value: "大连",
          label: "大连",
          key: 8,
          checked: false,
        },
        {
          value: "苏州",
          label: "苏州",
          key: 9,
          checked: false,
        }
      ]);
      const targetDataRf = ref([
        {
          value: "辽宁",
          label: "辽宁",
          key: 10,
          checked: false,
        },
        {
          value: "吉林",
          label: "吉林",
          key: 11,
          checked: false,
        },
        {
          value: "哈尔滨",
          label: "哈尔滨",
          key: 12,
          checked: true,
        }
      ]);

      function transfer(value) {
        console.log("this is in v-transfer");
        console.log(value);
      }

      return {
        sourceDataRf,
        targetDataRf,
        transfer,
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
| titles | 标题 | Array | - | ['source', 'target'] |
| buttonTexts | 中间切换文字 | - | - | - |
| sourceData | 源数据 | Array | - | [] |
| targetData | 目标数据 | Array | - | [] |
| filterable | 是否可过滤 | Boolean | - | false |

#### event

| 名称 | 说明 | 参数 |
|---------- |-------- |---------- |
| change | 改变选中时触发 | - |

#### slot

| 名称 | 说明 |
|---------- |-------- |
| source-footer | 源数据区域footer |
| target-footer | 目标数据区域footer |
