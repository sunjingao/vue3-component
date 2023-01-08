# Autocomplete 搜索提示

搜索提示

#### 基本用法

v-model设置选中内容的value，用户输入时回调query方法，用户选中时回调select方法

:::demo 基本用法

```html

<template>
  <v-autocomplete v-model="text" @select="select" @query="query" :options="ary"></v-autocomplete>
</template>
<script>
  import { ref } from 'vue';

  export default {
    setup() {
      let text = ref('123');
      let ary = ref([
        { label: 1, value: 11 },
        { label: 2, value: 222 },
        { label: 3, value: 33 },
        { label: 4, value: 44 },
        { label: 5, value: 55 },
        { label: 6, value: 66 },
        { label: 7, value: 77 },
        { label: 8, value: 88 },
        { label: 9, value: 99 },
        { label: 10, value: 100 },
        { label: 11, value: 100 },
        { label: 12, value: 100 },
        { label: 13, value: 100 },
        { label: 14, value: 100 },
        { label: 15, value: 100 },
      ]);

      function select(val) {
        console.log('select:', val);
      }

      function query(val) {
        console.log('query:', val);
      }

      return {
        text,
        ary,
        select,
        query
      }
    }
  }
</script>
```

:::

#### 自定义展示效果

使用默认插槽设置

:::demo 使用默认插槽，item为每条数据

```html

<template>
  <v-autocomplete v-model="text" @select="select" @query="query" :options="ary">
    <template #default="{ item }">
      <div>label:{{ item.label }} value:{{ item.value }}</div>
    </template>
  </v-autocomplete>
</template>
<script>

  import { ref } from 'vue';

  export default {
    setup() {
      let text = ref('123');
      let ary = ref([
        { label: 1, value: 11 },
        { label: 2, value: 222 },
        { label: 3, value: 33 },
        { label: 4, value: 44 },
        { label: 5, value: 55 },
        { label: 6, value: 66 },
        { label: 7, value: 77 },
        { label: 8, value: 88 },
        { label: 9, value: 99 },
        { label: 10, value: 100 },
        { label: 11, value: 100 },
        { label: 12, value: 100 },
        { label: 13, value: 100 },
        { label: 14, value: 100 },
        { label: 15, value: 100 },
      ]);

      function select(val) {
        console.log('select:', val);
      }

      function query(val) {
        console.log('query:', val);
      }

      return {
        text,
        ary,
        select,
        query
      }
    }
  }
</script>
```

:::

#### 设置展示框

设置展示框图片等内容

:::demo 设置 front 和 behind 插槽

```html

<template>
  <v-autocomplete v-model="text" @select="select" @query="query" :options="ary">
    <template #front>
      <span class="vAutoDoc"></span>
    </template>
    <template #behind>
      <span class="vAutoDoc"></span>
    </template>
  </v-autocomplete>
</template>
<script>
  import { ref } from 'vue';

  export default {
    setup() {
      let text = ref('123');
      let ary = ref([
        { label: 1, value: 11 },
        { label: 2, value: 222 },
        { label: 3, value: 33 },
        { label: 4, value: 44 },
        { label: 5, value: 55 },
        { label: 6, value: 66 },
        { label: 7, value: 77 },
        { label: 8, value: 88 },
        { label: 9, value: 99 },
        { label: 10, value: 100 },
        { label: 11, value: 100 },
        { label: 12, value: 100 },
        { label: 13, value: 100 },
        { label: 14, value: 100 },
        { label: 15, value: 100 },
      ]);

      function select(val) {
        console.log('select:', val);
      }

      function query(val) {
        console.log('query:', val);
      }

      return {
        text,
        ary,
        select,
        query
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
| modelValue | 值 | number | - | - |
| itemHeight | item高度 | String | - | 40px |
| options | 配置项 | Array | - | [] |

#### event

| 名称 | 说明 | 参数 |
|---------- |-------- |---------- |
| change | 离开 | 值 |
| input | 输入 | 值 |
| focus | 聚焦 | 值 |

#### slot

| 名称 | 说明 |
|---------- |-------- |
| front | 输入框前置插槽 |
| behind | 输入框后置插槽 |
| default | 作用域插槽 |
