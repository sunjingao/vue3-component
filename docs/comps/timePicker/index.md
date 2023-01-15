## TimePicker 时间选择器

用于选择或输入时间

#### 基本用法

基本用法

:::demo

```html

<template>

  <v-timepicker
    :startRange="startRange"
    @select="select"
    placeholder="请选择时间"
  ></v-timepicker>

</template>

<script>

  import { reactive } from 'vue';

  export default {

    setup() {

      const startRange = reactive({
        hour: [
          {
            start: 10,
            end: 15
          },
          {
            start: 2,
            end: 5
          }
        ],
        minute: [
          {
            start: 1,
            end: 6
          },
          {
            start: 30,
            end: 55
          },
          {
            start: 57,
            end: 58
          }
        ],
        second: [
          {
            start: 16,
            end: 18
          },
          {
            start: 7,
            end: 9
          }
        ]
      })

      const startDefaultTime = reactive({
        hour: 11,
        minute: 2,
        second: 18
      })

      function select(val1, val2) {
        console.log('in select', val1, val2);
      }

      return {
        startRange,
        startDefaultTime,
        select
      }
    },
  }
</script>

```

:::

#### 开始时间和结束时间

同时展示开始时间和结束时间

:::demo

```html

<template>

  <v-timepicker
    showEndTime
    :startRange="startRange"
    :endRange="endRange"
    :startDefaultTime="startDefaultTime"
    :endDefaultTime="endDefaultTime"
    @select="select"
  ></v-timepicker>

</template>

<script>

  import { reactive } from 'vue';

  export default {

    setup() {

      const startRange = reactive({
        hour: [
          {
            start: 10,
            end: 15
          },
          {
            start: 2,
            end: 5
          }
        ],
        minute: [
          {
            start: 1,
            end: 6
          },
          {
            start: 30,
            end: 55
          },
          {
            start: 57,
            end: 58
          }
        ],
        second: [
          {
            start: 16,
            end: 18
          },
          {
            start: 7,
            end: 9
          }
        ]
      })

      const endRange = reactive({
        hour: [
          {
            start: 3,
            end: 10
          },
          {
            start: 15,
            end: 20
          }
        ],
        minute: [
          {
            start: 3,
            end: 6
          },
          {
            start: 30,
            end: 50
          },
          {
            start: 0,
            end: 2
          }
        ],
        second: [
          {
            start: 7,
            end: 17
          },
          {
            start: 18,
            end: 30
          }
        ]
      })

      const startDefaultTime = reactive({
        hour: 11,
        minute: 6,
        second: 18
      })

      const endDefaultTime = reactive({
        hour: 10,
        minute: 1,
        second: 28
      })

      function select(val1, val2) {
        console.log('in select', val1, val2);
      }

      return {
        startRange,
        endRange,
        startDefaultTime,
        endDefaultTime,
        select
      }
    }
  }
</script>

```

:::

#### 分隔符

输入框中的时间展示按照分隔符进行分割

:::demo

```html

<template>

  <v-timepicker
    :startRange="startRange"
    @select="select"
    placeholder="请选择时间"
    separator="-"
  ></v-timepicker>
</template>

<script>

  import { reactive } from 'vue';

  export default {

    setup() {

      const startRange = reactive({
        hour: [
          {
            start: 10,
            end: 15
          },
          {
            start: 2,
            end: 5
          }
        ],
        minute: [
          {
            start: 1,
            end: 6
          },
          {
            start: 30,
            end: 55
          },
          {
            start: 57,
            end: 58
          }
        ],
        second: [
          {
            start: 16,
            end: 18
          },
          {
            start: 7,
            end: 9
          }
        ]
      })

      const startDefaultTime = reactive({
        hour: 11,
        minute: 2,
        second: 18
      })

      function select(val1, val2) {
        console.log('in select', val1, val2);
      }

      return {
        startRange,
        startDefaultTime,
        select
      }
    },
  }
</script>

```

:::

#### 清除

输入框中的内容允许清空

:::demo

```html

<template>

  <v-timepicker
    :startRange="startRange"
    :startDefaultTime="startDefaultTime"
    @select="select"
    @clear="clear"
    placeholder="请选择时间"
    clearable
  ></v-timepicker>

</template>

<script>

  import { reactive } from 'vue';

  export default {

    setup() {

      const startRange = reactive({
        hour: [
          {
            start: 10,
            end: 15
          },
          {
            start: 2,
            end: 5
          }
        ],
        minute: [
          {
            start: 1,
            end: 6
          },
          {
            start: 30,
            end: 55
          },
          {
            start: 57,
            end: 58
          }
        ],
        second: [
          {
            start: 16,
            end: 18
          },
          {
            start: 7,
            end: 9
          }
        ]
      })

      const startDefaultTime = reactive({
        hour: 11,
        minute: 2,
        second: 18
      })

      function select(val1, val2) {
        console.log('in select', val1, val2);
      }

      function clear(val1, val2) {
        console.log('in clear', val1, val2);
      }
      
      return {
        startRange,
        startDefaultTime,
        select,
        clear,
      }
    },
  }
</script>

```

:::

#### 允许输入

可以通过输入框进行时间输入，如果输入不正确，下拉关闭时会自动恢复至最近的正确时间。<br />

支持回车，esc等键盘事件：修改某个时间段后，enter时如果时间不准确，会自动滚动至相应时间点，不会立即关闭下拉，操作离开时会恢复至最近准确的时间。

:::demo

```html

<template>

  <v-timepicker
    :startRange="startRange"
    @select="select"
    placeholder="请选择时间"
    editable
  ></v-timepicker>

</template>

<script>

  import { reactive } from 'vue';

  export default {

    setup() {

      const startRange = reactive({
        hour: [
          {
            start: 10,
            end: 15
          },
          {
            start: 2,
            end: 5
          }
        ],
        minute: [
          {
            start: 1,
            end: 6
          },
          {
            start: 30,
            end: 55
          },
          {
            start: 57,
            end: 58
          }
        ],
        second: [
          {
            start: 16,
            end: 18
          },
          {
            start: 7,
            end: 9
          }
        ]
      })

      const startDefaultTime = reactive({
        hour: 11,
        minute: 2,
        second: 18
      })

      function select(val1, val2) {
        console.log('in select', val1, val2);
      }

      return {
        startRange,
        startDefaultTime,
        select
      }
    },
  }
</script>

```

:::

#### 设置宽高

设置宽高

:::demo

```html

<template>

  <v-timepicker
    :startRange="startRange"
    :startDefaultTime="startDefaultTime"
    @select="select"
    placeholder="请选择时间"
    width="220px"
    height="60px"
  ></v-timepicker>

</template>

<script>

  import { reactive } from 'vue';

  export default {

    setup() {

      const startRange = reactive({
        hour: [
          {
            start: 10,
            end: 15
          },
          {
            start: 2,
            end: 5
          }
        ],
        minute: [
          {
            start: 1,
            end: 6
          },
          {
            start: 30,
            end: 55
          },
          {
            start: 57,
            end: 58
          }
        ],
        second: [
          {
            start: 16,
            end: 18
          },
          {
            start: 7,
            end: 9
          }
        ]
      })

      const startDefaultTime = reactive({
        hour: 11,
        minute: 2,
        second: 18
      })

      function select(val1, val2) {
        console.log('in select', val1, val2);
      }

      return {
        startRange,
        startDefaultTime,
        select
      }
    },
  }
</script>

```

:::

### API

#### props

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| width | 宽度 | String | - | - |
| height | 高度 | String | - | 40px |
| showEndTime | 是否展示结束时间 | Boolean | - | false |
| placeholder | 默认值 | String | - | '' |
| clearable | 是否显示清空功能 | Boolean | - | false |
| itemHeight | item高度 | Number | - | 30 |
| itemWidth | item宽度 | Number | - | 50 |
| startRange | 开始时间范围 | Object | require | - |
| startDefaultTime | 开始默认时间 | Object | require | - |
| endRange | 结束时间范围 | Object | - | - |
| endDefaultTime | 结束默认时间 | Object | require | - |
| editable | 是否可编辑 | Boolean | require | - |
| separator | 分隔符 | String | require | - |

#### event

| 名称 | 说明 | 参数 |
|---------- |-------- |---------- |
| select | 修改 | 值 |
| clear | 清空 | 值 |

