# Pagination 分页

Pagination 分页

#### 基础用法

基础用法

:::demo 基础用法

```html

<template>

  <v-pagination :total="total"></v-pagination>

</template>

<script>

  import { ref } from 'vue';

  export default {

    setup() {

      const total = ref(500);

      function paginationPageChange(item) {
        console.log("pagination");
        console.log(item);
      }

      return {
        total,
        paginationPageChange
      }
    }
  }

</script>

```

:::

#### 展示button样式

条目以button样式进行展示

:::demo 设置 background 属性为true

```html

<template>

  <v-pagination
    :isButton="isButton"
    :total="total"
    @page-change="paginationPageChange">
  </v-pagination>

</template>

<script>

  import { ref } from 'vue';

  export default {

    setup() {

      const isButton = ref(true);
      const total = ref(500);

      function paginationPageChange(item) {
        console.log("pagination");
        console.log(item);
      }

      return {
        isButton,
        total,
        paginationPageChange
      }
    }
  }
</script>

```

:::

#### 自定义布局

自定义展示内容及展示顺序

:::demo 设置 layout 属性控制 展示内容及展示顺序

```html

<template>

  <v-pagination
    :layout="layout"
    :total="total"
    @page-change="paginationPageChange"
    @select-change="selectChange"
  >
  </v-pagination>

</template>

<script>

  import { ref } from 'vue';

  export default {

    setup() {

      const layout = ref(['pager', 'sizes', 'jumper', 'total']);
      const total = ref(500);

      function paginationPageChange(item) {
        console.log("pagination", item);
      }

      function selectChange(value) {
        console.log('selectChange', value);
      }

      return {
        layout,
        total,
        paginationPageChange,
        selectChange
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
| layout | 设置布局展示内容及展示顺序 | Array | 'pager', 'jumper', 'sizes', 'total' | ['pager'] |
| selectArr  | 下拉列表 | Array | - | - |
| pageSize  | 当前条数 | Number | - | 10 |
| total | 总条数 | Number | - | 50 |
| isButton  | 是否展示为button样式 | Boolean | - | false |

#### event

| 名称 | 说明 | 参数 |
|---------- |-------- |---------- |
| page-change | 选中的内容改变时触发 | 当前选中的页数 |
| select-change | 下拉条数改变 | 条数 |
