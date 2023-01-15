# PageHeader 页头

简单的路径展示

#### 基本用法

基本用法

:::demo

```html

<template>
  <v-page-header @back="goBack" content="详情页面"></v-page-header>
</template>
<script>
  export default {
    setup() {
      function goBack() {
        console.log('click back');
      }

      return {
        goBack
      }
    }
  }
</script>
```

:::

#### 自定义展示

自定义标题和展示内容

:::demo

```html

<template>
  <v-page-header @back="goBack">
    <template #title>
      <div>自定义标题</div>
    </template>
    <template #content>
      <div>自定义内容</div>
    </template>
  </v-page-header>
</template>
<script>
  export default {
    setup() {
      function goBack() {
        console.log('click back');
      }

      return {
        goBack
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
| title | 标题 | String | - | 返回 |
| content | 内容 | String | - | '' |

#### event

| 名称 | 说明 | 参数 |
|---------- |-------- |---------- |
| back | 点击后退时的回调函数 | - |

#### slot

| 名称 | 说明 |
|---------- |-------- |
| title | 标题处的插槽 |
| content | 内容处的插槽 |
