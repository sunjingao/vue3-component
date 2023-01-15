# Breadcrumb 面包屑

路径信息，可跳转

#### 基本用法

基本用法

:::demo 基本用法

```html

<template>
  <v-breadcrumb separator="?">
    <v-breadcrumb-item to="/">首页</v-breadcrumb-item>
    <v-breadcrumb-item><a href="/">活动管理</a></v-breadcrumb-item>
    <v-breadcrumb-item>活动列表</v-breadcrumb-item>
    <v-breadcrumb-item>活动详情</v-breadcrumb-item>
  </v-breadcrumb>
</template>
<script>
```

:::

### API

#### breadcrumb props

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| separator | 分隔符 | String | - | / |

#### breadcrumbItem props

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| to | 要跳转到的url | String | - | '' |

#### breadcrumbItem slot

| 名称 | 说明 |
|---------- |-------- |
| default | 内容 |
