# Textarea 文本框

文本框相关操作

#### 基本用法

最大高度为默认高度

:::demo 基本用法

```html

<template>
  <v-textarea
    v-model="text"
    resize="horizontal"
    @input="input"
  ></v-textarea>
</template>

<script>

  import { ref } from 'vue';

  export default {

    setup() {

      let text = ref('123');

      function input(val) {
        console.log(val);
      }

      return {
        text,
        input,
      }
    }
  }
</script>

```

:::

#### 自适应

高度自适应

:::demo 设置 autosize 属性为true

```html

<template>
  <v-textarea
    v-model="text"
    autosize
    @input="input"
  ></v-textarea>
</template>

<script>

  import { ref } from 'vue';

  export default {

    setup() {

      let text = ref('123');

      function input(val) {
        console.log(val);
      }

      return {
        text,
        input,
      }
    }
  }
</script>

```

:::

#### 设置高度范围

设置高度范围

:::demo 设置autosize对象，如 :autosize="{ minRows: 2, maxRows: 4}"

```html

<template>
  <v-textarea
    v-model="text"
    :autosize="{ minRows: 2, maxRows: 4}"
    @input="input"
  ></v-textarea>
</template>
<script>
  import { ref } from 'vue';

  export default {
    setup() {
      let text = ref('123');

      function input(val) {
        console.log(val);
      }

      return {
        text,
        input,
      }
    }
  }
</script>
```

:::

#### 设置最大输入数目

超过数量禁止输入

:::demo 基本用法

```html

<template>

  <v-textarea
    v-model="text"
    showWordLimit
    resize="horizontal"
    :maxLength="10"
    @input="input"
  ></v-textarea>

</template>

<script>

  import { ref } from 'vue';

  export default {

    setup() {

      let text = ref('123');

      function input(val) {
        console.log(val);
      }

      return {
        text,
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
| width | 组件宽度 | String | - | 420px |
| placeholder | 默认展示内容 | String | - | '' |
| autosize | 自适应配置 | Boolean, Object | - | - |
| showWordLimit | 是否显示字数限制 | Boolean | - | false |
| maxLength | 最大长度 | Number | - | - |
| resize | resize方向 | String | vertical/horizontal | vertical |

#### event

| 名称 | 说明 | 参数 |
|---------- |-------- |---------- |
| input | 输入时触发 | 值 |
| change | 离开时 | 值 |
| focus | 聚焦时 | 值 |
| blur | 离开时 | 值 |
| enter | 回车时 | 值 |
| compositionstart | 中文输入开始 | event |
| compositionupdate | 中文输入中 | event |
| compositionend | 中文输入结束 | event |

#### attr

| 名称 | 说明 | 参数 |
|---------- |-------- |---------- |
| clear | 清空内容 | - |
| select | 选中 | - |
| focus | 聚焦 | - |
| blur | 脱离焦点 | - |
| ref | textarea dom |  |
