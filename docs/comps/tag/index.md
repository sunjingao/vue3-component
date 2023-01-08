## Tag 标签

标签基本用法

#### 基本用法

标签基本用法

:::demo 基本用法

```html

<template>
  <div>
    <v-tag>标签</v-tag>
    <v-tag type="default" class="v-ml20">标签</v-tag>
    <v-tag type="primary" class="v-ml20">标签</v-tag>
    <v-tag type="success" class="v-ml20">标签</v-tag>
    <v-tag type="info" class="v-ml20">标签</v-tag>
    <v-tag type="warning" class="v-ml20">标签</v-tag>
    <v-tag type="danger" class="v-ml20">标签</v-tag>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    }
  }
</script>
```

:::

#### 删除

带有删除功能

:::demo 添加 closeable 属性

```html

<template>
  <div>
    <v-tag closeable @close="close">标签</v-tag>
    <v-tag type="default" closeable @close="close" class="v-ml20">标签</v-tag>
    <v-tag type="primary" closeable @close="close" class="v-ml20">标签</v-tag>
    <v-tag type="success" closeable @close="close" class="v-ml20">标签</v-tag>
    <v-tag type="info" closeable @close="close" class="v-ml20">标签</v-tag>
    <v-tag type="warning" closeable @close="close" class="v-ml20">标签</v-tag>
    <v-tag type="danger" closeable @close="close" class="v-ml20">标签</v-tag>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    methods: {
      close(event) {
        console.log(event)
      }
    }
  }
</script>
```

:::

#### 尺寸设置

尺寸设置用法

:::demo 设置 width 和 height 属性

```html

<template>
  <v-tag :width="100" :height="50">标签</v-tag>
</template>
<script>
  export default {
    data() {
      return {}
    }
  }
</script>
```

:::

### API

#### props

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 类型 | String | ''/default/primary/success/info/warning/danger | '' |
| closeable | 是否显示删除按钮 | Boolean | - | false |
| width | 组件宽度 | Number, String | - | auto |
| height | 组件高度 | Number | - | 32 |

#### event

| 名称 | 说明 | 参数 |
|---------- |-------- |---------- |
| close | 组件关闭 | event |

#### attr

| 名称 | 说明 | 参数 |
|---------- |-------- |---------- |
| show | 显示 | - |
| hide | 隐藏 | - |
