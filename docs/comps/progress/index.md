# Progress 进度条

展示进度

#### 线型进度条

线型进度条

:::demo

```html

<template>
  <v-progress :percentage="50"></v-progress>
  <v-progress :percentage="99"></v-progress>
  <v-progress :percentage="100" :format="format"></v-progress>
</template>
<script>

  export default {
    setup() {
      function format(val) {
        return '满';
      }

      return {
        format
      }
    }
  }
</script>
```

:::

#### 百分比内显

百分比显示在进度条右侧

:::demo

```html

<template>
  <v-progress :text-inside="true" height="24px" :percentage="70"></v-progress>
  <v-progress :text-inside="true" height="24px" :percentage="100"></v-progress>
</template>
<script>
  export default {}
</script>
```

:::

#### 自定义描述

自定义描述内容

:::demo

```html

<template>
  <v-progress :text-inside="true" height="26px" :percentage="70">
    <template #text>
      自定义
    </template>
  </v-progress>
</template>
<script>
  export default {}
</script>
```

:::

#### 线条颜色

自定义线条颜色

:::demo

```html

<template>
  <v-progress :percentage="percentage" :bgColor="customColor"></v-progress>
  <v-progress :percentage="percentage" :bgColor="customColorMethod"></v-progress>
  <v-progress :percentage="percentage" :bgColor="customColors"></v-progress>
  <v-button-group>
    <v-button @click="decrease">-</v-button>
    <v-button @click="increase">+</v-button>
  </v-button-group>
</template>
<script>
  import { ref } from 'vue';

  export default {
    setup() {
      let percentage = ref(20);
      let customColor = ref('#409eff');
      let customColors = ref([
        { bgColor: '#f56c6c', percentage: 20 },
        { bgColor: '#e6a23c', percentage: 40 },
        { bgColor: '#5cb87a', percentage: 60 },
        { bgColor: '#1989fa', percentage: 80 },
        { bgColor: '#6f7ad3', percentage: 100 }
      ]);

      function customColorMethod(percentage) {
        if (percentage < 30) {
          return '#909399';
        } else if (percentage < 70) {
          return '#e6a23c';
        } else {
          return '#67c23a';
        }
      }

      function increase() {
        percentage.value += 10;
        if (percentage.value > 100) {
          percentage.value = 100;
        }
      }

      function decrease() {
        percentage.value -= 10;
        if (percentage.value < 0) {
          percentage.value = 0;
        }
      }

      return {
        percentage,
        customColor,
        customColors,
        customColorMethod,
        increase,
        decrease,
      }
    },
  }
</script>
```

:::

#### 环形进度条

以环形方式展示进度

:::demo

```html

<template>
  <v-progress type="circle" :percentage="0" class="vProgressDoc"></v-progress>
  <v-progress type="circle" :percentage="10" class="vProgressDoc"></v-progress>
  <v-progress type="circle" :percentage="25" class="vProgressDoc"></v-progress>
  <v-progress type="circle" :percentage="35" class="vProgressDoc"></v-progress>
  <v-progress type="circle" :percentage="50" class="vProgressDoc"></v-progress>
  <v-progress type="circle" :percentage="65" class="vProgressDoc"></v-progress>
  <v-progress type="circle" :percentage="75" class="vProgressDoc"></v-progress>
  <v-progress type="circle" :percentage="85" class="vProgressDoc"></v-progress>
  <v-progress type="circle" :percentage="100" class="vProgressDoc"></v-progress>
</template>
<script>
  export default {}
</script>
```

:::

### API

#### props

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| percentage | 当前进度 | Number | - | - |
| type | 进度条类型 | String | line/circle | line |
| width | 线性和圆的进度条的间距 | String | - | 400px |
| height | 高度 | String | - | 6px |
| format | 自定义展示内容函数 | Function | - | - |
| textWidth | 线性进度条的描述内容宽度 | String | - | 30px |
| textInside | 线性滚动条的描述内容是否在内部 | Boolean | - | false |
| bgColor | 选中时的背景颜色 | String, Array, Function | - | #409eff |
| diameter | 圆形进度条的半径 | String | - | 150px |

#### slot

| 名称 | 说明 |
|---------- |-------- |
| text | 内容 |
