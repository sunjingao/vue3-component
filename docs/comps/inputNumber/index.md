## InputNumber 计数器

操作变换数字

#### 基础用法

:::demo

```html

<template>
  <v-input-number v-model="counter" @input="input">
  </v-input-number>
</template>
<script>
  import { ref } from 'vue'

  export default {

    setup() {
      const counter = ref(3);
      
      function input(val) {
        console.log(val);
      }

      return {
        counter,
        input,
      }
    }
  }
</script>
```

:::

#### 禁止操作

禁止填写和点击来改变数字

:::demo

```html

<template>
  <v-input-number v-model="counter" disabled></v-input-number>
</template>
<script>
  import { ref } from 'vue'

  export default {

    setup() {
      const counter = ref(3);

      return {
        counter,
      }
    }
  }
</script>
```

:::

#### 步数

控制每次点击增加 / 减少 改变的大小

:::demo

```html

<template>
  <v-input-number v-model="counter" :step="2" @input="input"></v-input-number>
</template>
<script>
  import { ref } from 'vue'

  export default {

    setup() {
      const counter = ref(3);

      function input(val) {
        console.log(val);
      }

      return {
        counter,
        input,
      }
    }
  }
</script>
```

:::

#### 范围

改变区域的范围

:::demo

```html

<template>
  <v-input-number v-model="counter" :min="-3" :max="10" @input="input"></v-input-number>
</template>
<script>
  import { ref } from 'vue'

  export default {

    setup() {
      const counter = ref(3);

      function input(val) {
        console.log(val);
      }

      return {
        counter,
        input,
      }
    }
  }
</script>
```

:::

#### 位置

控制点击区域的位置

:::demo

```html

<template>
  <v-input-number
    v-model="counter"
    controlsPosition="rightSide"
    @input="input"
  ></v-input-number>
</template>
<script>
  import { ref } from 'vue'

  export default {

    setup() {
      const counter = ref(3);

      function input(val) {
        console.log(val);
      }

      return {
        counter,
        input,
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
| modelValue | 值 | - | - | - |
| controlsPosition | 点击区域的位置 | String | bothSides / rightSide | bothSides |
| disabled | 是否禁止选中 | - | - | false |
| width | 宽度 | String | - | 180px |
| height | 高度 | String | - | 40px |
| min | 最小值 | Number | - | -Number.MAX_VALUE |
| max | 最大值 | Number | - | Number.MAX_VALUE |
| step | 每次改变的大小 | Number | - | 1 |

#### event

| 名称 | 说明 | 参数 |
|---------- |-------- |---------- |
| input | 输入 | 值 |
