## ToolTip 文字提示

用于鼠标操作节点时的提示

#### 基本用法

基本用法

:::demo

```html

<template>

  <div class="vTooltipDoc box">
    <div class="top">
      <v-tooltip class="item" content="Top Left 提示文字" placement="top-start">
        <v-button>上左</v-button>
        <template #content>
          <div>111</div>
          <div>222</div>
        </template>
      </v-tooltip>
      <v-tooltip class="item" content="Top Center 提示文字" placement="top">
        <v-button>上边</v-button>
      </v-tooltip>
      <v-tooltip class="item" content="Top Right 提示文字" placement="top-end">
        <v-button>上右</v-button>
      </v-tooltip>
    </div>
    <div class="left">
      <v-tooltip class="item" content="Left Top 提示文字" placement="left-start">
        <v-button height="70px">左上</v-button>
      </v-tooltip>
      <v-tooltip class="item" content="Left Center 提示文字" placement="left">
        <v-button height="70px">左边</v-button>
      </v-tooltip>
      <v-tooltip class="item" content="Left Bottom 提示文字" placement="left-end">
        <v-button height="70px">左下</v-button>
      </v-tooltip>
    </div>

    <div class="right">
      <v-tooltip class="item" content="Right Top 提示文字" placement="right-start">
        <v-button height="70px">右上</v-button>
      </v-tooltip>
      <v-tooltip class="item" content="Right Center 提示文字" placement="right">
        <v-button height="70px">右边</v-button>
      </v-tooltip>
      <v-tooltip class="item" content="Right Bottom 提示文字" placement="right-end">
        <v-button height="70px">右下</v-button>
      </v-tooltip>
    </div>
    <div class="bottom">
      <v-tooltip class="item" content="Bottom Left 提示文字" placement="bottom-start">
        <v-button>下左</v-button>
      </v-tooltip>
      <v-tooltip class="item" content="Bottom Center 提示文字" placement="bottom">
        <v-button>下边</v-button>
      </v-tooltip>
      <v-tooltip class="item" content="Bottom Right 提示文字" placement="bottom-end">
        <v-button>下右</v-button>
      </v-tooltip>
    </div>
  </div>
</template>
<script>
  export default {}
</script>
```

:::

#### 主题

可以设置深沉的主题背景

:::demo

```html

<template>

  <div class="vTooltipDoc">
    <v-tooltip class="themeItem" content="Top Left 提示文字" placement="top-start">
      <v-button>上左</v-button>
    </v-tooltip>

    <v-tooltip class="themeItem" theme="dark" content="Top Left 提示文字" placement="top-start">
      <v-button>上左</v-button>
    </v-tooltip>
  </div>
</template>
<script>
  export default {}
</script>
```

:::

#### 自定义内容

自定义展示内容

:::demo

```html

<template>

  <div class="vTooltipDoc box">
    <v-tooltip content="Top Left 提示文字" placement="top-start">
      <template #popper>
        <div>111</div>
        <div>222</div>
      </template>
      <v-button>上左</v-button>
    </v-tooltip>
  </div>
</template>
<script>
  export default {}
</script>
```

:::

#### 关闭tooltip

不展示tooltip

:::demo

```html

<template>

  <v-tooltip content="Top Left 提示文字" placement="top-start" :disabled="disabled">
    <v-button @click="toggle">{{getContent()}}</v-button>
  </v-tooltip>
</template>
<script>
  import { ref } from 'vue';

  export default {
    setup() {
      let disabled = ref(false);
      let buttonContent = ref('点击关闭tooltip功能');

      function toggle() {
        disabled.value = !disabled.value;
      }

      function getContent() {
        return buttonContent.value = disabled.value ? '点击开启tooltip功能' : '点击关闭tooltip功能';
      }

      return {
        disabled,
        toggle,
        getContent,
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
| placement | popper位置 | 详见 popper | - | bottom |
| content | 提示内容 | String | - | '' |
| theme | 主题 | String | dark/light | light |
| disabled | 不显示popper | Boolean | - | false |

#### attr

| 名称 | 说明 | 参数 |
|---------- |-------- |---------- |
| showPopper | 展示popper | - |
| showPopper | 隐藏popper | - |

#### slot

| 名称 | 说明 |
|---------- |-------- |
| default | popper依赖元素 |
| content | 内容 |

