# Link 文字链接

文字超链接

#### 类型

设置不同的类型，展示不同的颜色

:::demo

```html

<template>
  <v-link>链接</v-link>
  <v-link type="primary" class="v-ml20">链接</v-link>
  <v-link type="success" class="v-ml20">链接</v-link>
  <v-link type="info" class="v-ml20">链接</v-link>
  <v-link type="warning" class="v-ml20">链接</v-link>
  <v-link type="danger" class="v-ml20">链接</v-link>
</template>
```

:::

#### 禁用状态

文字禁止跳转

:::demo

```html

<template>
  <v-link>
    允许操作
  </v-link>
  <v-link disabled class="v-ml20">
    禁止操作
  </v-link>
</template>
```

:::

#### 下划线

hover 状态下是否展示下划线

:::demo

```html

<template>
  <v-link>
    有下划线
  </v-link>
  <v-link :underline="false" class="v-ml20">
    无下划线
  </v-link>
</template>
```

:::

#### 跳转

跳转到设置的url

:::demo

```html

<template>
  <v-link href="https://www.baidu.com/">
    跳转
  </v-link>
  <v-link href="https://www.baidu.com/" disabled class="v-ml20">
    禁止操作
  </v-link>
</template>
```

:::

### API

#### props

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type| 类型 | String | default / success / warning / primary / info / danger | default |
| disabled | 文字是否禁止操作 | Boolean | - | false |
| underline | 是否展示下划线 | Boolean | - | true |
| href | 跳转 | String | - | '' |

#### event

| 名称 | 说明 | 参数 |
|---------- |-------- |---------- |
| click | 点击时触发 | event |
