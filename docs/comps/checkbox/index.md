# Checkbox 多选

在一组选项中进行多选

#### 单个多选

单个多选框选中与没选中

:::demo 设置一个checkbox即可

```html

<template>
  <v-checkbox v-model="sign" @change="change"></v-checkbox>
</template>

<script>
  import { ref } from 'vue';

  export default {
    setup() {
      let sign = ref(true);

      function change(val) {
        console.log(val);
      }

      return {
        sign,
        change
      }
    }
  }
</script>

```

:::

#### 部分选中

分为三种状态：分别是没选中、部分选中、选中。

:::demo 控制 isIndeterminate 属性 控制是否部分选中

```html

<template>
  <v-checkbox
    :isIndeterminate="isIndeterminate"
    @part-check-change="partCheckChange"
    v-model="sign"
    @change="change"
  >
    xxx
  </v-checkbox>
</template>

<script>
  import { ref } from 'vue'

  export default {
    setup() {
      let isIndeterminate = ref(true);
      let sign = ref(true);

      function change() {
        isIndeterminate.value = true;
      }

      function partCheckChange() {
        console.log('partCheckChange');
        isIndeterminate.value = false;
      }

      return {
        sign,
        change,
        isIndeterminate,
        partCheckChange
      }
    }
  }
</script>

```

:::

#### 多选

多选

:::demo 设置一个checkbox即可

```html

<template>
  <!--复选框-->
  <v-checkbox-group v-model="checkedArr" @change="change">
    <v-checkbox value="data1">data1</v-checkbox>
    <v-checkbox value="data2" class="v-ml20">data2</v-checkbox>
    <v-checkbox value="data3" class="v-ml20">data3</v-checkbox>
  </v-checkbox-group>
</template>
<script>
  import { ref } from 'vue';

  export default {
    setup() {
      let checkedArr = ref(['data1', 'data2']);

      function change(val) {
        console.log(val);
      }

      return {
        checkedArr,
        change
      }
    }
  }
</script>
```

:::

#### 禁止操作

禁止选中

:::demo 控制 disabled属性 控制是否允许选中

```html

<template>

  <v-checkbox-group v-model="checkedArr1" disabled @change="change1">
    <v-checkbox value="data1">data1</v-checkbox>
    <v-checkbox value="data2" class="v-ml20">data2</v-checkbox>
    <v-checkbox value="data3" class="v-ml20">data3</v-checkbox>
  </v-checkbox-group>
  <br/>
  <v-checkbox-group v-model="checkedArr2" class="mt20" @change="change2">
    <v-checkbox value="data1">data1</v-checkbox>
    <v-checkbox value="data2" disabled class="v-ml20">data2</v-checkbox>
    <v-checkbox value="data3" class="v-ml20">data3</v-checkbox>
  </v-checkbox-group>
</template>
<script>
  import { ref } from 'vue';

  export default {
    setup() {
      let checkedArr1 = ref(['data1', 'data2']);
      let checkedArr2 = ref(['data1']);

      function change1(val) {
        console.log(val);
      }

      function change2(val) {
        console.log(val);
      }

      return {
        checkedArr1,
        checkedArr2,
        change1,
        change2,
      }
    }
  }
</script>
```

:::

#### 边框

展示边框

:::demo 添加 border 属性

```html

<template>
  <!--复选框-->
  <v-checkbox-group border v-model="checkedArr" @change="change">
    <v-checkbox value="data1">data1</v-checkbox>
    <v-checkbox value="data2" class="v-ml20">data2</v-checkbox>
    <v-checkbox value="data3" class="v-ml20">data3</v-checkbox>
    <v-checkbox value="data4" disabled class="v-ml20">data4</v-checkbox>
  </v-checkbox-group>
</template>
<script>
  import { ref } from 'vue';

  export default {
    setup() {
      let checkedArr = ref(['data1', 'data2']);

      function change(val) {
        console.log(val);
      }

      return {
        checkedArr,
        change,
      }
    }
  }
</script>
```

:::

#### 按钮类型

展示为按钮样式

:::demo 用v-checkbox-button

```html

<template>
  <!--复选框-->
  <v-checkbox-group v-model="checkedArr" @change="change">
    <v-checkbox-button value="data1">data1</v-checkbox-button>
    <v-checkbox-button value="data2">data2</v-checkbox-button>
    <v-checkbox-button value="data3">data3</v-checkbox-button>
    <v-checkbox-button value="data4" disabled>data4</v-checkbox-button>
  </v-checkbox-group>
</template>
<script>
  import { ref } from 'vue'

  export default {
    setup() {
      let checkedArr = ref(['data1', 'data2']);

      function change(val) {
        console.log(val);
      }

      return {
        checkedArr,
        change,
      }
    }
  }
</script>
```

:::

### API

#### checkbox props

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| modelValue | 当仅有一个内容时，进行设置 | String, Number, Boolean | - |  |
| value | 当属于集合时，进行设置 | String, Number, Boolean | - |  |
| disabled | 禁止选中 | Boolean | - | false |
| border | 是否具有边框 | Boolean | - | false |
| isIndeterminate | 是否半选中状态 | Boolean | - | false |

#### checkbox event

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| change | 修改时触发 | - |
| part-check-change | 点击部分选中时触发 | - |

#### checkbox-button props

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | 当属于集合时，进行设置 | String, Number, Boolean | - |  |
| disabled | 禁止选中 | Boolean | - | false |

#### checkbox-group props

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| modelValue | 选中内容 | Array | - | [] |
| disabled | 禁止选中 | Boolean | - | false |
| border | 是否具有边框 | Boolean | - | false |
| isIndeterminate | 是否半选中状态 | Boolean | - | false |

#### checkbox-group event

| 名称 | 说明 | 参数 |
|---------- |-------- |---------- |
| change | 修改时触发 | - |
