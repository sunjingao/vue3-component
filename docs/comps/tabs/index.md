## Tabs 标签页

标签内容切换

#### 基本用法

基本用法

:::demo

```html

<template>

  <div class="vTabsDoc">
    <v-tabs v-model="activeName" @tab-click="handleClick">
      <v-tab-pane label="用户管理" value="first">用户管理</v-tab-pane>
      <v-tab-pane label="配置管理" value="second">配置管理</v-tab-pane>
      <v-tab-pane label="角色管理" value="third">角色管理</v-tab-pane>
      <v-tab-pane label="定时任务补偿" value="fourth">定时任务补偿</v-tab-pane>
    </v-tabs>
  </div>
</template>

<script>

  import { ref } from 'vue';

  export default {

    setup() {
      const activeName = ref('second');

      function handleClick(value, label, event) {
        console.log('value:', value, 'label:', label, 'event:', event);
      }

      return {
        activeName,
        handleClick,
      }
    }
  }
</script>

```

:::

#### 禁止选中

禁止操作条目

:::demo

```html

<template>

  <div class="vTabsDoc">

    <v-tabs v-model="activeName" @tab-click="handleClick">
      <v-tab-pane label="用户管理" value="first">用户管理</v-tab-pane>
      <v-tab-pane label="配置管理" value="second">配置管理</v-tab-pane>
      <v-tab-pane label="角色管理" value="third" disabled>角色管理</v-tab-pane>
      <v-tab-pane label="定时任务补偿" value="fourth">定时任务补偿</v-tab-pane>
    </v-tabs>
  </div>

</template>

<script>

  import { ref } from 'vue';

  export default {

    setup() {

      const activeName = ref('second');

      function handleClick(value, label, event) {
        console.log('value:', value, 'label:', label, 'event:', event);
      }

      return {
        activeName,
        handleClick,
      }
    }
  }
</script>

```

:::

#### 关闭

允许关闭某个条目

:::demo

```html

<template>

  <div class="vTabsDoc">
    <v-tabs v-model="activeName" closable @tab-click="handleClick" @close="close">
      <v-tab-pane label="用户管理" value="first">用户管理</v-tab-pane>
      <v-tab-pane label="配置管理" value="second">配置管理</v-tab-pane>
      <v-tab-pane label="角色管理" value="third" disabled>角色管理</v-tab-pane>
      <v-tab-pane label="定时任务补偿" value="fourth">定时任务补偿</v-tab-pane>
    </v-tabs>
  </div>
</template>

<script>

  import { ref } from 'vue';

  export default {

    setup() {

      const activeName = ref('second');

      function handleClick(value, label, event) {
        console.log('value:', value, 'label:', label, 'event:', event);
      }

      function close(value, label, event) {
        console.log('close--', 'value:', value, 'label:', label, 'event:', event);
      }

      return {
        activeName,
        handleClick,
        close,
      }
    }
  }
</script>

```

:::

#### 类型

卡片样式展示条目

:::demo

```html

<template>

  <div class="vTabsDoc">

    <v-tabs v-model="activeName" @tab-click="handleClick" type="card">
      <v-tab-pane label="用户管理" value="first">用户管理</v-tab-pane>
      <v-tab-pane label="配置管理" value="second">配置管理</v-tab-pane>
      <v-tab-pane label="角色管理" value="third">角色管理</v-tab-pane>
      <v-tab-pane label="定时任务补偿" value="fourth">定时任务补偿</v-tab-pane>
    </v-tabs>

  </div>

</template>

<script>

  import { ref } from 'vue';

  export default {

    setup() {

      const activeName = ref('second');

      function handleClick(value, label, event) {
        console.log('value:', value, 'label:', label, 'event:', event);
      }

      return {
        activeName,
        handleClick,
      }
    }
  }
</script>

```

:::

#### 位置

展示方位控制

:::demo

```html

<template>
  
  <v-button-group>
    <v-button @click.native="position='top'">上</v-button>
    <v-button @click.native="position='right'" class="v-ml20">右</v-button>
    <v-button @click.native="position='bottom'" class="v-ml20">下</v-button>
    <v-button @click.native="position='left'" class="v-ml20">左</v-button>
  </v-button-group>
  <div class="vTabsDoc mt20">
    <v-tabs v-model="activeName" :position="position" @tab-click="handleClick">
      <v-tab-pane label="用户管理" value="first">用户管理</v-tab-pane>
      <v-tab-pane label="配置管理" value="second">配置管理</v-tab-pane>
      <v-tab-pane label="角色管理" value="third">角色管理</v-tab-pane>
      <v-tab-pane label="定时任务补偿" value="fourth">定时任务补偿</v-tab-pane>
    </v-tabs>
  </div>
  
  <div class="vTabsDoc mt20">
    <v-tabs v-model="activeName" :position="position" @tab-click="handleClick" type="card">
      <v-tab-pane label="用户管理" value="first">用户管理</v-tab-pane>
      <v-tab-pane label="配置管理" value="second">配置管理</v-tab-pane>
      <v-tab-pane label="角色管理" value="third">角色管理</v-tab-pane>
      <v-tab-pane label="定时任务补偿" value="fourth">定时任务补偿</v-tab-pane>
    </v-tabs>
  </div>
</template>


<script>

  import { ref } from 'vue';

  export default {

    setup() {

      const activeName = ref('fourth');

      const position = ref('top');

      function handleClick(value, label, event) {
        console.log('value:', value, 'label:', label, 'event:', event);
      }

      return {
        activeName,
        position,
        handleClick,
      }
    }
  }
</script>

```

:::

### API

#### tabs props

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| modelValue | 当前选中的value | String | - | undefined |
| type | 选项卡类型 | String | default/card | default |
| position | 位置 | String | top/right/bottom/left | top |
| closable | 是否允许关闭 | Boolean | - | false |

#### tabs event

| 名称 | 说明 | 参数 |
|---------- |-------- |---------- |
| tab-click | 点击选中项 | 值 |
| close | 关闭 | 值 |

#### tab-pane props

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| label | 选项卡标题 | string | - | - |
| value | 唯一value | string | - | - |
| disabled | 是否禁用 | string | - | - |

#### tabs method

| 名称 | 说明 | 参数 |
|---------- |-------- |---------- |
| closeItem | 点击关闭时触发 | 当前vue实例 |
| tab-click | 切换标签时触发 | 当前vue实例, event |
