# Collapse 折叠面板

Collapse 折叠面板

#### 基础用法

基础用法

:::demo 基础用法

```html

<template>
  <v-collapse v-model="activeNames" @change="handleChange">
    <v-collapse-item title="一致性 Consistency" value="1">
      <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
      <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
    </v-collapse-item>
    <v-collapse-item title="反馈 Feedback" value="2">
      <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
      <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
    </v-collapse-item>
    <v-collapse-item title="效率 Efficiency" value="3">
      <div>简化流程：设计简洁直观的操作流程；</div>
      <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
      <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
    </v-collapse-item>
    <v-collapse-item title="可控 Controllability" value="4">
      <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
      <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
    </v-collapse-item>
  </v-collapse>
</template>
<script>
  import { ref } from 'vue';

  export default {
    setup() {
      const activeNames = ref(['2']);

      function handleChange(val) {
        console.log(val);
      }

      return {
        activeNames,
        handleChange
      }
    }
  }
</script>
```

:::

#### 手风琴效果

手风琴效果

:::demo 设置accordion属性

```html

<template>
  <v-collapse v-model="activeNames" @change="handleChange" accordion>
    <v-collapse-item title="一致性 Consistency" value="1">
      <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
      <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
    </v-collapse-item>
    <v-collapse-item title="反馈 Feedback" value="2">
      <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
      <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
    </v-collapse-item>
    <v-collapse-item title="效率 Efficiency" value="3">
      <div>简化流程：设计简洁直观的操作流程；</div>
      <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
      <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
    </v-collapse-item>
    <v-collapse-item title="可控 Controllability" value="4">
      <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
      <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
    </v-collapse-item>
  </v-collapse>
</template>
<script>
  import { ref } from 'vue';

  export default {
    setup() {
      const activeNames = ref('1');

      function handleChange(val) {
        console.log(val);
      }

      return {
        activeNames,
        handleChange,
      }
    },
  }
</script>
```

:::

#### 自定义展示

自定义面板标题

:::demo 设置title插槽

```html

<template>
  <v-collapse v-model="activeNames" @change="handleChange">
    <v-collapse-item value="1">
      <template #title>
        自定义：一致性 Consistency
      </template>
      <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
      <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
    </v-collapse-item>
    <v-collapse-item value="2">
      <template #title>
        自定义：反馈 Feedback
      </template>
      <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
      <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
    </v-collapse-item>
    <v-collapse-item value="3">
      <template #title>
        自定义：效率 Efficiency
      </template>
      <div>简化流程：设计简洁直观的操作流程；</div>
      <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
      <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
    </v-collapse-item>
    <v-collapse-item value="4">
      <template #title>
        自定义：可控 Controllability
      </template>
      <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
      <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
    </v-collapse-item>
  </v-collapse>
</template>
<script>
  import { ref } from 'vue';

  export default {
    setup() {
      const activeNames = ref('1');

      function handleChange(val) {
        console.log(val);
      }

      return {
        activeNames,
        handleChange,
      }
    }
  }
</script>
```

:::

### API

#### collapse props

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| modelValue | 当前展开的内容 | String, Array | - | - |
| accordion | 最多只能展示一个内容 | Boolean | - | false |

#### collapse event

| 名称 | 说明 | 参数 |
|---------- |-------- |---------- |
| change | 有折叠动作时触发 | 当前的name |

#### collapse-item props

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | 唯一标识 | String | - | '' |
| title | 标题内容 | string | - | '' |
| disabled | 是否禁止操作 | Boolean | - | false |
| showDirection | 是否展示方向箭头 | Boolean | - | true |

#### collapse-item slot

| 名称 | 说明 | 
|---------- |-------- |
| title | 自定义title |
| default | 内容 |
