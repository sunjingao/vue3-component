# Divider 分割线

区分不同层级

#### 基础用法

基础用法

:::demo

```html

<template>
  <div>
    <span>青春是一个短暂的美梦, 当你醒来时, 它早已消失无踪</span>
    <v-divider></v-divider>
    <span>少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉</span>
  </div>
</template>
```

:::

#### 设置文本

可设置文本及文本展示样式

:::demo

```html

<template>
  <div>
    <span>头上一片晴天，心中一个想念</span>
    <v-divider position="left">少年包青天</v-divider>
    <span>饿了别叫妈, 叫饿了么</span>
    <v-divider position="center"><i class="iconfont icon-success"></i></v-divider>
    <span>为了无法计算的价值</span>
    <v-divider position="right" :show-line="false">阿里云</v-divider>
  </div>
</template>
```

:::

#### 垂直分隔

垂直分隔

:::demo

```html

<template>
  <div>
    <span>雨纷纷</span>
    <v-divider direction="vertical"></v-divider>
    <span>旧故里</span>
    <v-divider direction="vertical"></v-divider>
    <span>草木深</span>
  </div>
</template>
```

:::

### API

#### props

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| direction| 方向 | String | horizontal / vertical | horizontal |
| position | direction为horizontal，插槽的水平定位 | String | left、right、center | left |
| showLine | 是否展示横线 | Boolean | - | true |

#### slot

| 名称 | 说明 | 
|---------- |-------- |
| default | 水平插槽的自定义内容 |
