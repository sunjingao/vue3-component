# Pagination 分页

控制数据条数

#### 基础用法

基础用法

:::demo

```html

<template>

  <v-pagination :total="total" @pageChange="pageChange" @selectChange="selectChange"></v-pagination>

</template>

<script>

  import { ref } from 'vue';

  export default {

    setup() {

      const total = ref(500);

      function pageChange(val) {
        console.log("pageChange:", val);
      }
      
      function selectChange(val) {
        console.log("selectChange:", val);
      }

      return {
        total,
        pageChange,
        selectChange,
      }
    }
  }

</script>

```

:::

#### 展示button样式

条目以button样式进行展示

:::demo

```html

<template>

  <v-pagination
    :isButton="isButton"
    :total="total"
    @pageChange="pageChange" 
    @selectChange="selectChange"
  >
  </v-pagination>

</template>

<script>

  import { ref } from 'vue';

  export default {

    setup() {

      const isButton = ref(true);
      const total = ref(500);

      function pageChange(val) {
        console.log("pageChange:", val);
      }

      function selectChange(val) {
        console.log("selectChange:", val);
      }

      return {
        isButton,
        total,
        pageChange,
        selectChange,
      }
    }
  }
</script>

```

:::

#### 自定义布局

自定义展示内容及展示顺序

:::demo

```html

<template>

  <v-pagination
    :layout="layout"
    :total="total"
    @pageChange="pageChange"
    @selectChange="selectChange"
  >
  </v-pagination>

</template>

<script>

  import { ref } from 'vue';

  export default {

    setup() {

      const layout = ref(['pager', 'sizes', 'jumper', 'total']);
      const total = ref(500);

      function pageChange(val) {
        console.log("pageChange:", val);
      }

      function selectChange(val) {
        console.log("selectChange:", val);
      }

      return {
        layout,
        total,
        pageChange,
        selectChange,
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
