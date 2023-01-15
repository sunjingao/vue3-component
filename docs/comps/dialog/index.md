# Dialog 对话框

保留当前页面的同事，提供展示并操作的区块

#### 基本用法

基本用法

:::demo 基本用法

```html

<template>

  <v-dialog
    v-model="visible"
    title="this is title"
    class="vDialogDoc"
  >
    <div>这是一段信息</div>
    <template #footer>
        <span>
          <v-button @click="visible=false">取 消</v-button>
          <v-button type="primary" @click="visible=false" class="v-ml5">确 定</v-button>
        </span>
    </template>
  </v-dialog>
  <v-button @click="open">open</v-button>
</template>
<script>
  import { ref } from 'vue';

  export default {
    setup() {
      const visible = ref(null);

      function open() {
        visible.value = true;
      }

      return {
        visible,
        open
      }
    },
  }
</script>
```

:::

#### 居中布局

标题和footer部分可居中对局

:::demo 设置center属性

```html

<template>

  <v-dialog
    title="this is title"
    v-model="visible"
    center
    width="300"
    class="vDialogDoc"
  >
    <div style="">这是一段信息</div>
    <template #footer>
        <span>
          <v-button @click="visible=false">取 消</v-button>
          <v-button type="primary" @click="visible=false" class="v-ml5">确 定</v-button>
        </span>
    </template>
  </v-dialog>
  <v-button @click="open">open</v-button>
</template>
<script>
  import { ref } from 'vue';

  export default {
    setup() {
      const visible = ref(null);

      function open() {
        visible.value = true;
      }

      return {
        visible,
        open
      }
    },
  }
</script>
```

:::

#### 嵌套

打开对话框后，点击嵌套按钮，可以打开新的对话框。

:::demo 嵌套

```html

<template>

  <v-dialog
    title="222222222"
    v-model="nest"
    width="500"
    class="vDialogDoc"
  >
    <div style="height: 500px">这是嵌套内容</div>
    <template #footer>
         <span>
          <v-button @click="nest=false">取 消</v-button>
          <v-button type="primary" @click="nest=false" class="v-ml5">确 定</v-button>
        </span>
    </template>
  </v-dialog>

  <v-dialog
    title="this is title"
    v-model="visible"
    center
    width="300"
    class="vDialogDoc">
    <div style="">这是一段信息</div>
    <template #footer>
        <span>
          <v-button @click="visible=false">取 消</v-button>
          <v-button type="primary" @click="nest=true" class="v-ml5">嵌 套</v-button>
        </span>
    </template>
  </v-dialog>
  <v-button @click="open">open</v-button>
</template>
<script>
  import { ref } from 'vue';

  export default {
    setup() {
      const nest = ref(false);
      const visible = ref(null);

      function open() {
        visible.value = true;
      }

      return {
        nest,
        visible,
        open
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
| modelValue | 值 | Boolean | - | false |
| title | 标题 | String | - | '' |
| center | 是否居中 | Boolean | - | false |
| showClose | 是否展示close按钮 | Boolean | - | true |
| width | 宽度 | String | - | 50% |
| closeCallBack | 点击关闭前的回调 | Function | - | true |

#### slot

| 名称 | 说明 |
|---------- |-------- |
| title | 标题处的插槽 |
| default | 内容处的插槽 |
| footer | footer处的插槽 |
