# Rate 评分

用于展示评分

#### 基本用法

基本用法

:::demo 基本用法

```html

<template>
  <v-rate v-model="val" :max="5"></v-rate>
</template>

<script>
  import { ref } from 'vue';

  export default {
    setup() {
      const val = ref(3);
      return {
        val
      }
    }
  }
</script>

```

:::

#### 辅助文字

自定义展示内容

:::demo 设置text

```html

<template>
  <v-rate :texts="text" v-model="val" :max="5"></v-rate>
</template>

<script>
  import { ref } from 'vue';

  export default {
    setup() {
      const val = ref(3);
      let text = ref([11, 22, 33, 44, 55]);
      return {
        val,
        text
      }
    }
  }
</script>

```

:::

#### 只读

只读，不可操作。允许图标部分选中。
:::demo 设置 disabled，设置是否可操作

```html

<template>
  <v-rate v-model="val" disabled :max="5"></v-rate>
</template>
<script>
  import { ref } from 'vue';

  export default {
    setup() {
      let val = ref(3.5);
      return {
        val
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
| modelValue | 值 | Number | - | - |
| disabled | 是否禁止操作 | Boolean | - | false |
| max | 最大值 | number | Number | - |
| showText | 是否展示文字提示 | Boolean | - | false |
| texts | 选中时对应的文本 | Array | - | [] |

#### event

| 名称 | 说明 | 参数 |
|---------- |-------- |---------- |
| change | 修改 | 值 |
