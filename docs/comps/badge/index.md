## Badge 标记

区块标记信息

#### 基本用法

基本用法

:::demo

```html

<template>

  <v-badge>
    <v-button>button</v-button>
  </v-badge>

  <v-badge :value="val" class="v-ml20">
    <v-button>button</v-button>
  </v-badge>

  <v-badge :value="val" iconClass="vBadgeColorDoc" class="v-ml20">
    <v-button>button</v-button>
  </v-badge>
</template>
<script>
  import { ref } from 'vue';

  export default {
    setup() {
      const val = ref('10');
      return {
        val
      }
    },
  }
</script>
```

:::

#### 最大值设置

超过最大值，使用+

:::demo

```html

<template>
  <v-badge :value="val1" :max="9">
    <v-button>button</v-button>
  </v-badge>
  <v-badge :value="val2" :max="99" class="v-ml20">
    <v-button>button</v-button>
  </v-badge>
</template>
<script>
  import { ref } from 'vue';

  export default {
    setup() {
      const val1 = ref('10');
      const val2 = ref('100');
      return {
        val1,
        val2,
      }
    },
  }
</script>
```

:::

#### 小红点

右上角以小红点形式进行提示

:::demo

```html

<template>
  <v-badge :value="val" isDot>
    <v-button>button</v-button>
  </v-badge>
</template>
<script>
  import { ref } from 'vue';

  export default {
    setup() {
      const val = ref('10');
      return {
        val
      }
    }
  }
</script>
<style>
</style>
```

:::

### API

#### props

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | 要展示的内容 | String | - | '' |
| iconClass | 右上角图标的自定义样式 | String | - | - |
| max | 最大值 | Number | - | - |
| isDot | 是否显示红点 | Boolean | - | false |

#### slot

| 名称 | 说明 |
|---------- |-------- |
| default | 内容 |



