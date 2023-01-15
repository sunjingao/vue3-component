## Select 选择器

通过下拉来提示并选择内容

#### 基本用法

基本用法

:::demo

```html

<template>
  <v-select v-model="text" @change="change">
    <v-option
      v-for="(item, key) in ary"
      :key="key"
      :label="item.label"
      :disabled="item.disabled"
      :value="item.value">
    </v-option>
  </v-select>
</template>

<script>

  import { defineComponent, ref } from 'vue'

  export default defineComponent({

    setup() {
      let text = ref(55);
      let ary = ref([
        { label: 1, value: 11, },
        { label: 2, value: '222', disabled: true },
        { label: 3, value: 33, disabled: true },
        { label: 4, value: 44 },
        { label: 5, value: 55 },
        { label: 6, value: 66, disabled: true },
        { label: 7, value: 77, disabled: true },
        { label: 8, value: 88, disabled: true },
        { label: 9, value: 99, disabled: true },
        { label: 10, value: 100, disabled: true },
        { label: 11, value: 101, disabled: true },
        { label: 12, value: 102, disabled: true },
        { label: 13, value: '103', disabled: true },
        { label: 14, value: 104, disabled: true },
        { label: 15, value: 105 },
      ])

      function change(val) {
        console.log('change:', val);
      }

      return {
        text,
        ary,
        change,
      }
    }
  })
</script>

```

:::

#### 带删除节点

允许删除输入框中的内容

:::demo

```html

<template>

  <v-select v-model="text" clearable @change="change" @clear="clear">
    <v-option
      v-for="(item,key) in ary"
      :key="key"
      :label="item.label"
      :disabled="item.disabled"
      :value="item.value">
    </v-option>
  </v-select>
</template>

<script>

  import { defineComponent, ref } from 'vue'

  export default defineComponent({

    setup() {
      let text = ref('');
      let ary = ref([
        { label: 1, value: 11 },
        { label: 2, value: '222' },
        { label: 3, value: 33, disabled: true },
        { label: 4, value: 44 },
        { label: 5, value: 55 },
        { label: 6, value: 66 },
        { label: 7, value: 77 },
        { label: 8, value: 88 },
        { label: 9, value: 99 },
        { label: 10, value: 100 },
        { label: 11, value: 101 },
        { label: 12, value: 102 },
        { label: 13, value: '103' },
        { label: 14, value: 104 },
        { label: 15, value: 105 },
      ]);

      function change(val) {
        console.log('change:', val);
      }

      function clear(event) {
        console.log('clear:', event);
      }

      return {
        text,
        ary,
        change,
        clear
      }
    }
  })
</script>

```

:::

#### 自定义模板

自定义条目的展示样式

:::demo

```html

<template>

  <v-select v-model="text" @change="change">
    <v-option
      v-for="(item,key) in ary"
      :key="key"
      :label="item.label"
      :disabled="item.disabled"
      :value="item.value">
      <div>template:label:{{item.label}}</div>
    </v-option>
  </v-select>
</template>

<script>

  import { defineComponent, ref } from 'vue'

  export default defineComponent({

    setup() {
      let text = ref('');
      let ary = ref([
        { label: 1, value: 11 },
        { label: 2, value: '222' },
        { label: 3, value: 33, disabled: true },
        { label: 4, value: 44 },
        { label: 5, value: 55 },
        { label: 6, value: 66 },
        { label: 7, value: 77 },
        { label: 8, value: 88 },
        { label: 9, value: 99 },
        { label: 10, value: 100 },
        { label: 11, value: 101 },
        { label: 12, value: 102 },
        { label: 13, value: '103' },
        { label: 14, value: 104 },
        { label: 15, value: 105 },
      ]);

      function change(val) {
        console.log('change:', val);
      }

      return {
        text,
        ary,
        change
      }
    }
  })
</script>

```

:::

#### 分组

自定义组别进行展示

:::demo

```html

<template>

  <v-select v-model="text" @change="change">
    <v-option-group
      v-for="(group,index) in options"
      :key="index"
      :label="group.label"
    >
      <v-option
        v-for="(item,key) in group.options"
        :key="key"
        :label="item.label"
        :disabled="item.disabled"
        :value="item.value">
      </v-option>
    </v-option-group>
  </v-select>
</template>

<script>

  import { defineComponent, ref } from 'vue'

  export default defineComponent({

    setup() {
      let text = ref('');
      let options = ref([
        {
          label: '热门城市',
          options: [
            {
              value: 'Shanghai',
              label: '上海'
            },
            {
              value: 'Beijing',
              label: '北京'
            }
          ]
        },
        {
          label: '城市名',
          options: [
            {
              value: 'Chengdu',
              label: '成都'
            }, {
              value: 'Shenzhen',
              label: '深圳'
            }, {
              value: 'Guangzhou',
              label: '广州'
            }, {
              value: 'Dalian',
              label: '大连'
            }
          ]
        }
      ])

      function change(val) {
        console.log('change:', val);
      }

      return {
        text,
        options,
        change
      }
    }
  })
</script>

```

:::

#### 多选

可以选中多个条目

:::demo

```html

<template>

  <v-select v-model="text" multiple @change="change">
    <v-option
      v-for="(item, key) in ary"
      :key="key"
      :label="item.label"
      :disabled="item.disabled"
      :value="item.value">
    </v-option>
  </v-select>
</template>

<script>

  import { ref } from 'vue';

  export default {
    setup() {
      let text = ref([99, 66, 11]);
      let ary = ref([
        { label: 1, value: 11 },
        { label: 2, value: 22 },
        { label: 3, value: 33, disabled: true },
        { label: 4, value: 44 },
        { label: 5, value: 55 },
        { label: 6, value: 66 },
        { label: 7, value: 77 },
        { label: 8, value: 88 },
        { label: 9, value: 99 },
        { label: 10, value: 100 },
        { label: 11, value: 101 },
        { label: 12, value: 102 },
        { label: 13, value: 103 },
        { label: 14, value: 104 },
        { label: 15, value: 105 },
        { label: 16, value: 106 },
        { label: 17, value: 107 },
        { label: 18, value: 108 },
      ]);

      function change(val) {
        console.log('change:', val)
      }

      return {
        text,
        ary,
        change,
      }
    }
  }
</script>

```

:::

### API

#### select props

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| modelValue | 值 | 单选时为String，多选时为Array | - | ''/[] |
| placeholder | 默认值 | string | - | ''|
| clearable | 单选时是否清空 | Boolean | - | false |

#### event

| 名称 | 说明 | 参数 |
|---------- |-------- |---------- |
| change | 修改 | 值 |


