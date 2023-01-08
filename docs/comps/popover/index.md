# Popover 弹出框

分页

#### 基本用法

基本用法

:::demo 基本用法

```html

<template>

  <v-popover
    content="this is hover content"
    placement="bottom-start"
  >
    <v-button>hover</v-button>
  </v-popover>

  <v-popover
    class="v-ml20"
    content="this is focus content"
    placement="bottom-start"
    trigger="focus"
  >
    <v-button>focus</v-button>
  </v-popover>

  <v-popover
    class="v-ml20"
    content="this is click content"
    placement="bottom-start"
    trigger="click"
  >
    <v-button>click</v-button>
  </v-popover>

  <v-popover
    class="v-ml20"
    content="this is manual content"
    placement="bottom-start"
    trigger="manual"
  >
    <v-button>manual</v-button>
  </v-popover>
</template>
<script>
```

:::

#### 自定义展示

展示自定义内容

:::demo 设置popper插槽即可

```html

<template>

  <div class="vPopoverDoc">
    <v-popover placement="bottom-start" trigger="hover">
      <template #content>
        <div class="popperBody">
          <div>title</div>
          <div class="body-content">hover</div>
        </div>
      </template>
      <v-button>hover</v-button>
    </v-popover>

    <v-popover placement="bottom-start" trigger="click" class="v-ml20">
      <template #content>
        <div class="popperBody">
          <div>title</div>
          <div class="body-content">hover</div>
        </div>
      </template>
      <v-button>click</v-button>
    </v-popover>
  </div>
</template>
<script>
```

:::

### API

#### props

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| trigger | 触发方式 | string | hover、focus、click、manual | hover |
| 其它内容  | 参考 v-tooltip文档 | - | - | - |

#### slot

| 名称 | 说明 |
|---------- |-------- |
| default | popper依赖元素 |
| content | popper内容 |
