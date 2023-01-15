# Slider 滑块

通过拖动的方式在固定区间内进行选择

#### 基本用法

基本用法

:::demo

```html

<template>
  <div class="block">
    <span class="demonstration">默认</span>
    <v-slider v-model="value1" @change="change"></v-slider>
  </div>
  <div class="block">
    <span class="demonstration">自定义初始值</span>
    <v-slider v-model="value2" @change="change"></v-slider>
  </div>
  <div class="block">
    <span class="demonstration">隐藏 Tooltip</span>
    <v-slider v-model="value3" :show-tooltip="false" @change="change"></v-slider>
  </div>
  <div class="block">
    <span class="demonstration">格式化 Tooltip</span>
    <v-slider v-model="value4" :format-tooltip="formatTooltip" @change="change"></v-slider>
  </div>
  <div class="block">
    <span class="demonstration">禁用</span>
    <v-slider v-model="value5" disabled @change="change"></v-slider>
  </div>
</template>
<script>
  import { ref } from 'vue';

  export default {
    setup() {
      let value1 = ref(0);
      let value2 = ref(50);
      let value3 = ref(36);
      let value4 = ref(48);
      let value5 = ref(42);

      function formatTooltip(val) {
        return val / 100;
      }
      
      function change(val) {
        console.log(val);
      }

      return {
        value1,
        value2,
        value3,
        value4,
        value5,
        formatTooltip,
        change,
      }
    },
  }
</script>
```

:::

#### 离散值

离散值

:::demo

```html

<template>

  <div class="block">
    <span class="demonstration">不显示间断点</span>
    <v-slider
      v-model="value1"
      :step="10"
      @change="change"
    >
    </v-slider>
  </div>
  <div class="block">
    <span class="demonstration">显示间断点</span>
    <v-slider
      v-model="value2"
      :step="10"
      show-stops
      @change="change"
    >
    </v-slider>
  </div>
</template>

<script>

  import { ref } from 'vue';

  export default {

    setup() {

      let value1 = ref(0);
      let value2 = ref(0);
      
      function change(val) {
        console.log(val);
      }
      
      return {
        value1,
        value2,
        change,
      }
    },
  }
</script>

```

:::

#### 展示标记

展示标记

:::demo 展示标记

```html

<template>

  <div class="block">
    <v-slider
      v-model="value"
      range
      :marks="marks"
      @change="change"
    >
    </v-slider>
  </div>
</template>

<script>

  import { ref } from 'vue';

  export default {

    setup() {
      let value = ref(30);
      let marks = ref([
        { left: '25%', value: '<span style="color:red;">25</span>' },
        { left: '60%', value: '<span style="color:pink;">60</span>' },
        { left: '85%', value: '<span style="color:blue;">85</span>' },
      ]);

      function change(val) {
        console.log(val);
      }
      
      return {
        value,
        marks,
        change,
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
| modelValue | 值 | Number | - | 0 |
| min | 最小值 | Number | - | 0 |
| max | 最大值 | Number | - | 100 |
| step | 间距 | Number | - | 1 |
| showTooltip | 是否展示tooltip | Boolean | - | true |
| formatTooltip | tooltip内容自定义 | Function | - | - |
| showStops | 是否展示节点 | Boolean | - | false |
| marks | 需要展示的节点 | Array | - | [] |
| disabled | 禁止操作 | Boolean | - | false |

#### event

| 名称 | 说明 | 参数 |
|---------- |-------- |---------- |
| change | 点击或滑动结束后触发 | 当前百分数 |
