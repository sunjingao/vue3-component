# Radio 单选框

在一组选项中进行单选

#### 选中

设置radio选中项

:::demo

```html

<template>
  <v-radio-group v-model="radioValue" @change="change">
    <v-radio value="data1">xxx</v-radio>
    <v-radio value="data2">aaa</v-radio>
    <v-radio value="data3">ppp</v-radio>
  </v-radio-group>
</template>
<script>
  import { ref } from 'vue';

  export default {
    setup() {
      const radioValue = ref('data3');

      function change(val) {
        console.log('in change', val)
      }

      return {
        radioValue,
        change
      }
    }
  }
</script>
```

:::

#### 禁止操作

禁止选中

:::demo 通过控制disabled属性，设置radio禁止选中

```html

<template>
  <v-radio-group v-model="radioValue" disabled>
    <v-radio value="data1">xxx</v-radio>
    <v-radio value="data2">aaa</v-radio>
    <v-radio value="data3">ppp</v-radio>
  </v-radio-group>

  <br/>

  <v-radio-group v-model="radioValues" class="v-mt20" @change="change">
    <v-radio value="data1">xxx</v-radio>
    <v-radio value="data2" disabled>aaa</v-radio>
    <v-radio value="data3">ppp</v-radio>
  </v-radio-group>
</template>
<script>
  import { ref } from 'vue';

  export default {
    setup() {
      const radioValue = ref('data3');
      const radioValues = ref('data3');

      function change(val) {
        console.log(val);
      }

      return {
        radioValue,
        radioValues,
        change,
      }
    }
  }
</script>
```

:::

#### 边框

具有边框效果

:::demo

```html

<template>
  <v-radio-group v-model="radioValue" @change="change" border>
    <v-radio value="data1">xxx</v-radio>
    <v-radio value="data2">aaa</v-radio>
    <v-radio value="data3">ppp</v-radio>
  </v-radio-group>
</template>
<script>
  import { ref } from 'vue';

  export default {
    setup() {
      const radioValue = ref('data3');

      function change(val) {
        console.log('in change', val)
      }

      return {
        radioValue,
        change
      }
    }
  }
</script>
```

:::

#### button样式

具有按钮效果

:::demo

```html

<template>
  <v-radio-group v-model="radioValue" @change="change">
    <v-radio-button value="data11">xxx</v-radio-button>
    <v-radio-button value="data22">aaa</v-radio-button>
    <v-radio-button value="data33">ppp</v-radio-button>
    <v-radio-button value="data44" disabled>ppp</v-radio-button>
  </v-radio-group>
</template>
<script>
  import { ref } from 'vue';

  export default {
    setup() {
      const radioValue = ref('data33');

      function change(val) {
        console.log(val);
      }

      return {
        radioValue,
        change,
      }
    }
  }
</script>
```

:::

### API

#### radio props

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| modelValue | 当仅有一个内容时，进行设置 | Number, String, Boolean | - |  |
| value | 当属于集合时，进行设置 | Number, String, Boolean | - |  |
| disabled | 禁止选中 | Boolean | - | false |
| border | 是否具有边框 | Boolean | - | false |

#### radio event

| 名称 | 说明 | 参数 |
|---------- |-------- |---------- |
| change | 点击关闭时触发 | 值 |

#### radio-button props

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| modelValue | 当仅有一个内容时，进行设置 | Number, String, Boolean | - |  |
| value | 当属于集合时，进行设置 | Number, String, Boolean | - |  |
| disabled | 禁止选中 | Boolean | - | false |
| border | 是否具有边框 | Boolean | - | false |

#### radio-button event

| 名称 | 说明 | 参数 |
|---------- |-------- |---------- |
| change | 点击关闭时触发 | 值 |

#### radio-group props

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| modelValue | 当仅有一个内容时，进行设置 | Number, String, Boolean | - |  |
| disabled | 禁止选中 | Boolean | - | false |
| border | 是否具有边框 | Boolean | - | false |

#### radio-group event

| 名称 | 说明 | 参数 |
|---------- |-------- |---------- |
| change | 点击关闭时触发 | 值 |
