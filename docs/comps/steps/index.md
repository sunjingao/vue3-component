# Steps 步骤条

Steps 步骤条

#### 基本用法

基本用法

:::demo 基本用法

```html

<template>

  <div class="vStepsDoc">
    <v-steps :active="active">
      <v-step title="步骤 1"></v-step>
      <v-step title="步骤 2"></v-step>
      <v-step title="步骤 3"></v-step>
    </v-steps>
    <v-button class="steps-mt12" @click="next" type="primary">下一步</v-button>
  </div>
</template>
<script>
  import { ref } from 'vue';

  export default {
    setup() {
      const active = ref(1);

      function next() {
        if (active.value++ > 2) active.value = 0;
      }

      return {
        active,
        next
      }
    },
  }
</script>
```

:::

#### 描述

添加描述

:::demo 设置description属性

```html

<template>
  <div>
    <v-steps :active="active">
      <v-step title="步骤 1">这是描述 1</v-step>
      <v-step title="步骤 2">这是描述 2</v-step>
      <v-step title="步骤 3">这是描述 3</v-step>
    </v-steps>
    <v-button class="steps-mt12" @click="next" type="primary">下一步</v-button>
  </div>
</template>

<script>

  import { ref } from 'vue';

  export default {

    setup() {

      const active = ref(0);

      function next() {
        if (active.value++ > 2) active.value = 0;
      }

      return {
        active,
        next
      }
    },
  }
</script>

```

:::

#### 标题和描述的自定义

自定义标题和描述的展示

:::demo 使用标题和描述的插槽

```html

<template>

  <div>
    <v-steps :active="active">
      <v-step title="这是标题1">
        <span>这是描述1</span>
      </v-step>
      <v-step title="这是标题2">
        <span>这是描述2</span>
      </v-step>
      <v-step title="这是标题3">
        <span>这是描述3</span>
      </v-step>
    </v-steps>
    <v-button class="steps-mt12" @click="next" type="primary">下一步</v-button>
  </div>

</template>

<script>

  import { ref } from 'vue';

  export default {

    setup() {

      const active = ref(0);

      function next() {
        if (active.value++ > 2) active.value = 0;
      }

      return {
        active,
        next
      }
    },
  }
</script>

```

:::

#### 标题和描述居中

标题和描述居中展示

:::demo 设置align-center属性

```html

<template>

  <div>
    <v-steps :active="active" align-center>
      <v-step title="步骤 1">这是描述 1</v-step>
      <v-step title="步骤 2">这是描述 2</v-step>
      <v-step title="步骤 3">这是描述 3</v-step>
    </v-steps>
    <v-button class="steps-mt12" @click="next" type="primary">下一步</v-button>
  </div>

</template>

<script>

  import { ref } from 'vue';

  export default {

    setup() {

      const active = ref(0);

      function next() {
        if (active.value++ > 2) active.value = 0;
      }

      return {
        active,
        next
      }
    },
  }
</script>

```

:::

#### 设置定宽的步骤条

设置定宽的步骤条

:::demo 设置space属性

```html

<template>
  <div>
    <v-steps :active="active" :space="200">
      <v-step title="这是标题1"></v-step>
      <v-step title="这是标题2"></v-step>
      <v-step title="这是标题3"></v-step>
    </v-steps>
    <v-button class="steps-mt12" @click="next" type="primary">下一步</v-button>
  </div>
</template>

<script>

  import { ref } from 'vue';

  export default {

    setup() {

      const active = ref(1);

      function next() {
        if (active.value++ > 2) active.value = 0;
      }

      return {
        active,
        next
      }
    },
  }
</script>

```

:::

#### 简洁风格的步骤条

简介的步骤条

:::demo 设置simple属性

```html

<template>
  <div>
    <v-steps :active="active" simple>
      <v-step title="步骤 1">这是描述 1</v-step>
      <v-step title="步骤 2">这是描述 2</v-step>
      <v-step title="步骤 3">这是描述 3</v-step>
    </v-steps>
    <v-button class="steps-mt12" @click="next" type="primary">下一步</v-button>
  </div>

</template>

<script>

  import { ref } from 'vue';

  export default {

    setup() {

      const active = ref(0);

      function next() {
        if (active.value++ > 2) active.value = 0;
      }

      return {
        active,
        next
      }
    },
  }
</script>

```

:::

#### 错误状态

设置当前状态为错误

:::demo 设置error属性为true

```html

<template>
  <div>
    <v-steps :active="active" :error="true">
      <v-step title="步骤 1"></v-step>
      <v-step title="步骤 2"></v-step>
      <v-step title="步骤 3"></v-step>
    </v-steps>
  </div>
</template>

<script>

  import { ref } from 'vue';

  export default {

    setup() {
      const active = ref(2);
      return {
        active,
      }
    },
  }
</script>

```

:::

### API

#### steps props

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| alignCenter | 标题和描述是否居中 | Boolean | - | false |
| space | 横线的宽度 | Number | - | 0 |
| active | 当前处理项的索引 | Number | - | 0 |
| error | 当前处理项是否为error | Boolean | - | false |
| simple | 是否简单模式 | Boolean | - | false |

#### step props

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title | 标题 | string | - | '' |
| content | 内容 | string | - | '' |
| simple | 简单模式 | string | - | false |

#### step slot

| 名称      | 说明          |
|---------- |-------------- |
| step | 自定义序列号图形 |
| title | 自定义标题 |
| description | 自定义描述 |
