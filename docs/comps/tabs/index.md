## Tabs 标签页

Tabs 标签页

#### 基本用法

基本用法

:::demo 基本用法

```html

<template>

  <div class="vTabsDoc">
    <v-tabs v-model="activeName" @tab-click="handleClick">
      <v-tab-pane label="用户管理" value="first">111</v-tab-pane>
      <v-tab-pane label="配置管理" value="second"></v-tab-pane>
      <v-tab-pane label="角色管理" value="third">333</v-tab-pane>
      <v-tab-pane label="定时任务补偿" value="fourth"></v-tab-pane>
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

:::demo 设置disabled属性

```html

<template>

  <div class="vTabsDoc">

    <v-tabs v-model="activeName" @tab-click="handleClick">
      <v-tab-pane label="用户管理" value="first"></v-tab-pane>
      <v-tab-pane label="配置管理" value="second"></v-tab-pane>
      <v-tab-pane label="角色管理" value="third" disabled></v-tab-pane>
      <v-tab-pane label="定时任务补偿" value="fourth"></v-tab-pane>
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

:::demo 设置closable属性

```html

<template>

  <div class="vTabsDoc">

    <v-tabs v-model="activeName" closable @tab-click="handleClick" @close="close">
      <v-tab-pane label="用户管理" value="first"></v-tab-pane>
      <v-tab-pane label="配置管理" value="second"></v-tab-pane>
      <v-tab-pane label="角色管理" value="third" disabled></v-tab-pane>
      <v-tab-pane label="定时任务补偿" value="fourth"></v-tab-pane>
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

#### 自定义标签展示

自定义标签展示

:::demo 使用默认插槽

```html

<template>

  <div class="vTabsDoc">

    <v-tabs v-model="activeName" @tab-click="handleClick">
      <v-tab-pane label="用户管理" value="first">
        <div>自定义用户</div>
      </v-tab-pane>
      <v-tab-pane label="配置管理" value="second">
        <div>自定义配置</div>
      </v-tab-pane>
      <v-tab-pane label="角色管理" value="third">
        <div>自定义角色</div>
      </v-tab-pane>
      <v-tab-pane label="定时任务补偿" value="fourth">
        <div>自定义定时</div>
      </v-tab-pane>
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

#### 类型

卡片样式展示条目

:::demo 设置type="card"

```html

<template>

  <div class="vTabsDoc">

    <v-tabs v-model="activeName" @tab-click="handleClick" type="card">
      <v-tab-pane label="用户管理" value="first"></v-tab-pane>
      <v-tab-pane label="配置管理" value="second"></v-tab-pane>
      <v-tab-pane label="角色管理" value="third"></v-tab-pane>
      <v-tab-pane label="定时任务补偿" value="fourth"></v-tab-pane>
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

:::demo 设置position属性

```html

<template>

  <div class="vTabsDoc">

    <v-tabs v-model="activeName" :position="position" @tab-click="handleClick">
      <v-tab-pane label="用户管理" value="first"></v-tab-pane>
      <v-tab-pane label="配置管理" value="second"></v-tab-pane>
      <v-tab-pane label="角色管理" value="third"></v-tab-pane>
      <v-tab-pane label="定时任务补偿" value="fourth"></v-tab-pane>
    </v-tabs>

    <div class="tabs-position-content">
      <v-button @click.native="position='top'">上</v-button>
      <v-button @click.native="position='right'" class="v-ml20">右</v-button>
      <v-button @click.native="position='bottom'" class="v-ml20">下</v-button>
      <v-button @click.native="position='left'" class="v-ml20">左</v-button>
    </div>

  </div>

  <div class="vTabsDoc tabs-position-mt10">

    <v-tabs v-model="activeName" :position="position" @tab-click="handleClick" type="card">
      <v-tab-pane label="用户管理" value="first"></v-tab-pane>
      <v-tab-pane label="配置管理" value="second"></v-tab-pane>
      <v-tab-pane label="角色管理" value="third"></v-tab-pane>
      <v-tab-pane label="定时任务补偿" value="fourth"></v-tab-pane>
    </v-tabs>

    <div class="tabs-position-content">
      <v-button @click.native="position='top'">上</v-button>
      <v-button @click.native="position='right'" class="v-ml20">右</v-button>
      <v-button @click.native="position='bottom'" class="v-ml20">下</v-button>
      <v-button @click.native="position='left'" class="v-ml20">左</v-button>
    </div>
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
