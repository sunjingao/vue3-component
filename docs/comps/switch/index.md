## Switch 开关

两种状态的切换

#### 基本用法

基本用法

:::demo

```html

<template>
  <v-switch v-model="val" @change="change">
    <template #before>按年付费</template>
    <template #behind>按月付费</template>
  </v-switch>
</template>
<script>
  import { defineComponent, ref } from 'vue'

  export default defineComponent({
    setup() {
      let val = ref(true);

      function change(val) {
        console.log(val);
      }

      return {
        val,
        change,
      }
    }
  })
</script>
```

:::

#### 字体颜色

自定义字体颜色

:::demo

```html

<template>
  <v-switch activeFontColor="red" inactiveFontColor="blue" v-model="val" @change="change">
    <template #before>按年付费</template>
    <template #behind>按月付费</template>
  </v-switch>
</template>
<script>
  import { defineComponent, ref, watch } from 'vue'

  export default defineComponent({
    setup() {
      let val = ref(true);

      function change(val) {
        console.log(val);
      }

      return {
        val,
        change,
      }
    }
  })
</script>
```

:::

#### 背景颜色

自定义背景颜色

:::demo

```html

<template>
  <v-switch v-model="val" activeBgColor="pink" inactiveBgColor="red" @change="change">
    <template #before>按年付费</template>
    <template #behind>按月付费</template>
  </v-switch>
</template>
<script>
  import { defineComponent, ref, watch } from 'vue'

  export default defineComponent({
    setup() {
      let val = ref(true);

      function change(val) {
        console.log(val);
      }

      return {
        val,
        change,
      }
    }
  })
</script>
```

:::

#### 禁用

禁止操作

:::demo

```html

<template>
  <v-switch disabled>
    <template #before>按年付费</template>
    <template #behind>按月付费</template>
  </v-switch>
</template>
<script>
  import { defineComponent, ref } from 'vue'

  export default defineComponent({
    setup() {
      let val = ref(true);
      return {
        val
      }
    }
  })
</script>
```

:::

### API

#### props

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| modelValue | 值 | Boolean | - | true |
| width | 宽度 | String | - | 40px |
| height | 高度 | String | - | 20px |
| disabled | 中间的移动的圆的背景颜色 | Boolean | - | false |
| circleBgColor | 中间的移动的圆的背景颜色 | string | - | #fff |
| inactiveBgColor | 状态为false时的背景颜色 | String | - | #C0CCDA |
| activeBgColor | 状态为true时的背景颜色 | String | - | #409EFF |
| inactiveFontColor | 状态为false时的字体颜色 | String | - | #303133 |
| activeFontColor | 状态为true时的字体颜色 | String | - | #409eff |

#### event

| 名称 | 说明 | 参数 |
|---------- |-------- |---------- |
| change | 修改 | 值 |

#### slot

| 名称 | 说明 |
|---------- |-------- |
| before | 前面内容 |
| behind | 前面内容 |
