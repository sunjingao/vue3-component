# Message 消息提示

Message 消息提示

#### 基本用法

基本用法

:::demo 基本用法

```html

<template>
  <div>
    <button @click="openMes">click</button>
  </div>
</template>
<script>
  import { getCurrentInstance } from 'vue';

  export default {
    setup() {

      const ins = getCurrentInstance();

      function openMes() {
        ins.appContext.config.globalProperties.$message({
          title: '1'
        }).open();
      }

      return {
        openMes
      }
    }
  }
</script>
<style>
</style>
```

:::

#### 主题

展示不同的主题背景

:::demo 设置type值

```html

<template>
  <div>
    <button @click="open">click</button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        messageOptions: {
          text: "alalalalalalalalalalalalalalalalalalalalalalalala"
        },
      }
    },
    methods: {

      open() {
        const message = this.$message({
          title: '这是一条消息提示',
          type: 'success'
        });
        message.open();
      }
    },
  }
</script>
<style>
</style>
```

:::

### API

#### props

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| timeout | 持续时间 | number | - | 3000 |
| 其它 | 属性可参考alert组件配置 | - | - | - |

#### method

| 名称 | 说明 | 参数 |
|---------- |-------- |---------- |
| open | 打开message | - |
| close | 关闭message | - |
| destroy | 销毁message | - |
