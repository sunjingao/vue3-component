# DatePicker 时间选择器

时间选择器基本用法

#### 年份

展示年份

:::demo type:year

```html

<template>
  <div>
    <v-date-picker
      type="year"
      :range="range"
      @change="change"
      placeholder="请选择日期"
    ></v-date-picker>
  </div>
</template>

<script>
  import { reactive } from 'vue';
  export default {

    setup() {

      const range = reactive([
        {
          end: {
            year: 2015,
          }
        },
        {
          start: {
            year: 2017,
          },
          end: {
            year: 2023,
          }
        },
      ]);

      function change(val) {
        console.log('in time change:', val);
      }

      return {
        range,
        change
      }
    }
  }
</script>

```

:::

#### 展示月份

展示月份

:::demo type:month

```html

<template>
  <div>
    <v-date-picker
      type="month"
      :range="optionsDate"
      :defaultTime="defaultTime"
      @change="change"
    ></v-date-picker>
  </div>
</template>

<script>

  import { reactive } from 'vue';

  export default {
    setup() {
      const optionsDate = reactive([
        {
          end: {
            year: 2015,
            month: 2
          }
        },
        {
          start: {
            year: 2017,
            month: 6,
          },
          end: {
            year: 2023,
            month: 11,
          }
        },
      ]);

      const defaultTime = {
        year: 2018,
        month: 5,
      }

      function change(val) {
        console.log('in time change:', val);
      }
      
      return {
        defaultTime,
        optionsDate,
        change,
      }
    }
  }
</script>

```

:::

#### 展示日期

展示日期

:::demo type:date

```html

<template>

  <v-date-picker
    type="date"
    :range="optionsDate"
    :defaultTime="defaultTime"
    placeholder="请选择日期"
    @change="change"
  ></v-date-picker>
</template>

<script>

  import { reactive } from 'vue';

  export default {

    setup() {
      const optionsDate = reactive([
        {
          end: {
            year: 2015,
            month: 2,
            date: 3,
          }
        },
        {
          start: {
            year: 2017,
            month: 6,
            date: 1
          },
          end: {
            year: 2023,
            month: 11,
            date: 20
          }
        },
      ]);

      const defaultTime = {
        year: 2018,
        month: 5,
        date: 5,
      }

      function change(val) {
        console.log('in time change:', val);
      }

      return {
        defaultTime,
        optionsDate,
        change
      }
    },
  }
</script>

```

:::


#### 分隔符

输入框中的时间展示按照分隔符进行分割

:::demo type:date

```html

<template>

  <v-date-picker
    type="date"
    :range="optionsDate"
    @change="change"
    placeholder="请选择日期"
    separator=":"
  ></v-date-picker>
</template>

<script>

  import { reactive } from 'vue';

  export default {

    setup() {
      const optionsDate = reactive([
        {
          end: {
            year: 2015,
            month: 2,
            date: 3,
          }
        },
        {
          start: {
            year: 2017,
            month: 6,
            date: 1
          },
          end: {
            year: 2023,
            month: 11,
            date: 20
          }
        },
      ]);
      
      function change(val) {
        console.log('in time change:', val);
      }

      return {
        optionsDate,
        change
      }
    },
  }
</script>

```

:::


#### 可输入

可以通过input输入框进行时间输入

:::demo type:year

```html

<template>
  <div>
    <v-date-picker
      editable
      :type="'year'"
      :range="range"
      @change="change"
      placeholder="请选择日期"
    ></v-date-picker>
  </div>
</template>

<script>

  export default {

    setup() {

      const range = [
        {
          end: {
            year: 2015,
          }
        },
        {
          start: {
            year: 2017,
          },
          end: {
            year: 2023,
          }
        },
      ];

      function change(val) {
        console.log('in time change:', val);
      }

      return {
        range,
        change
      }
    }
  }
</script>

```

:::

#### 清除功能

允许清空输入框中的内容

:::demo clearable

```html

<template>

  <v-date-picker
    type="year"
    :options="optionsDate"
    @change="change"
    placeholder="请选择日期"
    clearable
  ></v-date-picker>

</template>

<script>

  import { reactive } from 'vue';

  export default {

    setup() {

      const optionsDate = reactive({
        range: [
          {
            end: {
              year: 2015,
            }
          },
          {
            start: {
              year: 2017,
            },
            end: {
              year: 2023,
            }
          },
        ]
      });

      function change(val) {
        console.log('in time change:', val);
      }

      return {
        optionsDate,
        change,
      }
    },
  }
</script>

```

:::

#### 宽高设置

宽高设置

:::demo 设置width，height属性

```html

<template>

  <v-date-picker
    type="year"
    :options="optionsDate"
    @change="change"
    placeholder="请选择日期"
    width="220px"
    height="60px"
  ></v-date-picker>

</template>

<script>

  import { reactive } from 'vue';

  export default {

    setup() {
      const optionsDate = reactive({
        range: [
          {
            end: {
              year: 2015,
            }
          },
          {
            start: {
              year: 2017,
            },
            end: {
              year: 2023,
            }
          },
        ]
      })

      function change(val) {
        console.log('in time change:', val);
      }

      return {
        optionsDate,
        change
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
| type | 类型 | String | year、month、date | year |
| range | 可选范围 | Array | - | - |
| width | 宽度 | String | - | 170px |
| height | 高度 | String | - | 40px |
| placeholder | 默认值 | String | - | '' |
| clearable | 是否带有清空功能 | Boolean | - | false |
| editable | 是否可编辑 | Boolean | - | false |
| defaultTime | 默认时间 | Object | - | - |
| separator | 分隔符 | String | - | - |

#### event

| 名称 | 说明 | 参数 |
|---------- |-------- |---------- |
| change | 修改 | 值 |
| clear | 清空 | 值 |
| enter | 回车 | 值 |
| blur | 失去焦点 | 值 |
