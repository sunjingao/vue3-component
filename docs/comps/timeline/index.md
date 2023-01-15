# Timeline 时间线

展示时间进度与主要记录

#### 基本用法

基本用法

:::demo

```html

<template>

  <v-timeline>
    <v-timeline-item
      v-for="(activity, index) in activities"
      :key="index"
      :content="activity.timestamp"
      :title="activity.title"
    >
    </v-timeline-item>
  </v-timeline>
</template>
<script>
  import { ref } from 'vue';

  export default {
    setup() {
      const activities = ref([
        {
          title: '活动按期开始',
          timestamp: '2018-04-15'
        },
        {
          title: '通过审核',
          timestamp: '2018-04-13'
        },
        {
          title: '创建成功',
          timestamp: '2018-04-11'
        }
      ])
      return {
        activities
      }
    }
  }
</script>
```

:::

#### 颜色配置

自定义线和圆形的颜色

:::demo

```html

<template>

  <div class="vTimelineDoc">
    <v-timeline>
      <v-timeline-item
        v-for="(activity, index) in activities1"
        :key="index"
        :content="activity.timestamp"
        :title="activity.title"
        :circularColor="activity.circularColor"
        :lineColor="activity.lineColor"
      >
      </v-timeline-item>
    </v-timeline>


    <v-timeline>
      <v-timeline-item
        v-for="(activity, index) in activities2"
        :key="index"
        :content="activity.timestamp"
        :title="activity.title"
      >
        <template #circular>
          <div class="circular-test"></div>
        </template>
        <template #line>
          <div class="line-test" :class="index === activities2.length - 1 && 'isLast'"></div>
        </template>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>
<script>
  import { ref } from 'vue';

  export default {
    setup() {
      const activities1 = ref([
        {
          title: '支持自定义颜色',
          timestamp: '2018-04-12 20:46',
          size: 'large',
          type: 'primary',
          icon: 'el-icon-more'
        },
        {
          title: '支持自定义颜色',
          timestamp: '2018-04-03 20:46',
          circularColor: 'red',
          lineColor: 'blue',
        },
        {
          title: '支持自定义颜色',
          timestamp: '2018-04-03 20:46',
          size: 'large'
        },
        {
          title: '支持自定义颜色',
          timestamp: '2018-04-03 20:46'
        }
      ]);
      const activities2 = ref([
        {
          title: '自定义图形',
          timestamp: '2018-04-12 20:46',
          size: 'large',
          type: 'primary',
          icon: 'el-icon-more'
        },
        {
          title: '自定义图形',
          timestamp: '2018-04-03 20:46',
        },
        {
          title: '自定义图形',
          timestamp: '2018-04-03 20:46',
          size: 'large'
        },
        {
          title: '自定义图形',
          timestamp: '2018-04-03 20:46'
        }
      ]);

      return {
        activities1,
        activities2
      }
    },
  }
</script>
```

:::

#### ⾃定义时间位置

时间可以位于上方展示

:::demo

```html

<template>

  <v-timeline>
    <v-timeline-item content="2018/4/12" placement="top" title="模板">
    </v-timeline-item>
    <v-timeline-item content="2018/4/3" placement="top" title="模板">
    </v-timeline-item>
    <v-timeline-item content="2018/4/2" placement="top" title="模板">
    </v-timeline-item>
  </v-timeline>
</template>
```

:::

#### ⾃定义展示

自定义展示内容

:::demo

```html

<template>

  <div class="vTimelineDoc">
    <v-timeline>
      <v-timeline-item content="2018/4/12" title="模板">
        <v-card class="mb20">
          <h4>更新 Github 模板</h4>
          <p>提交于 2018/4/12 20:46</p>
        </v-card>
      </v-timeline-item>
      <v-timeline-item content="2018/4/3" title="模板">
        <v-card class="mb20">
          <h4>更新 Github 模板</h4>
          <p>提交于 2018/4/3 20:46</p>
        </v-card>
      </v-timeline-item>
      <v-timeline-item content="2018/4/2" title="模板">
        <v-card class="mb20">
          <h4>更新 Github 模板</h4>
          <p>提交于 2018/4/2 20:46</p>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>
```

:::

### API

#### props

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| content | 世间 | String | - | '' |
| placement | 时间的位置 | String | bottom/top | bottom |
| title | 描述 | String | - | '' |
| circularColor | 圆的颜色 | String | - | #e4e7ed |
| lineColor | 线的颜色 | String | - | #e4e7ed |

#### slot

| 名称 | 说明 |
|---------- |-------- |
| default | 右侧描述和时间的部分 |
| circular | 自定义圆 |
| line | 自定义线 |
| content | 内容 |
