# Alert 警告

展示不同类别的提示信息

#### 基本用法

页面中的非浮层元素，不会自动消失。

:::demo

```html

<template>
  <v-alert title="this is title" @close="close"></v-alert>
</template>
<script>
  export default {
    setup() {
      function close(event) {
        console.log(event);
      }

      return {
        close
      }
    }
  }
</script>
```

:::

#### 主题

展示不同的主题颜色

:::demo

```html

<template>
  <v-alert title="this is title" type="success" @close="close"></v-alert>
  <v-alert title="this is title" type="warning" class="v-mt20" @close="close"></v-alert>
  <v-alert title="this is title" type="tip" class="v-mt20" @close="close"></v-alert>
  <v-alert title="this is title" type="error" class="v-mt20" @close="close"></v-alert>
</template>
<script>
  export default {
    setup() {
      function close(event) {
        console.log(event);
      }

      return {
        close
      }
    }
  }
</script>
```

:::

#### 设置关闭处的文字内容

设置关闭处的文字内容

:::demo

```html

<template>
  <v-alert title="this is title" closeText="知道了" @close="close"></v-alert>
</template>
<script>
  export default {
    setup() {
      function close(event) {
        console.log(event);
      }

      return {
        close
      }
    }
  }
</script>
```

:::

#### 设置描述文字

设置描述文字

:::demo

```html

<template>
  <v-alert title="this is title" @close="close">this is description</v-alert>
</template>
<script>
  export default {
    setup() {
      function close(event) {
        console.log(event);
      }

      return {
        close
      }
    }
  }
</script>
```

:::

#### 带有icon

不同类型带有不同的icon

:::demo

```html

<template>
  <v-alert
    title="this is title"
    showIcon
    type="success"
    @close="close"
  ></v-alert>
  <v-alert
    title="this is title"
    showIcon
    type="warning"
    class="v-mt20"
    @close="close"
  >this is description
  </v-alert>
  <v-alert
    title="this is title"
    showIcon
    type="tip"
    class="v-mt20"
    @close="close"
  >this is description
  </v-alert>
  <v-alert
    title="this is title"
    showIcon
    type="error"
    class="v-mt20"
    @close="close"
  >this is description
  </v-alert>
</template>
<script>
  export default {
    setup() {
      function close(event) {
        console.log(event);
      }

      return {
        close
      }
    }
  }
</script>
```

:::

#### 居中

图标和文字居中展示

:::demo

```html

<template>
  <v-alert
    title="this is title"
    textCenter
    @close="close"
  >this is description
  </v-alert>
  <v-alert
    title="this is title"
    textCenter
    showIcon
    class="v-mt20"
    @close="close"
  >this is description
  </v-alert>
</template>
<script>
  export default {
    setup() {
      function close(event) {
        console.log(event);
      }

      return {
        close
      }
    },
  }
</script>
```

:::

### API

#### props

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title | 标题内容 | String | - | '' |
| type | 不同类型对应不同颜色 | String | success、warning、tip、error | tip |
| closable | 是否直接关闭 | Boolean | - | true |
| closeText | 关闭文字 | String | - | '' |
| showIcon | 是否展示图标 | Boolean | - | false |
| textCenter | 是否居中展示 | Boolean | - | false |
| zIndex | 层级 | Number | - | 0 |
| closeMethod | 关闭时触发的回调，为真时关闭 | Function | - | - |

#### event

| 名称 | 说明 | 参数 |
|---------- |-------- |---------- |
| close | 点击关闭时触发 | event |

#### attr

| 名称 | 说明 | 参数 |
|---------- |-------- |---------- |
| isShowRf | 是否展示 | - |
| open | 打开 | - |
| close | 关闭 | - |

#### slot

| 名称 | 说明 |
|---------- |-------- |
| title | 标题 |
| default | 描述 |

