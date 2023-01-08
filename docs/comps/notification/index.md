# Notification

Notification 通知

#### 基本用法

基本用法。默认从右上角展示

:::demo 基本用法

```html

<template>
  <div>
    <button @click="open">click</button>
  </div>
</template>
<script>
  import { getCurrentInstance } from 'vue';

  export default {
    setup() {
      const ins = getCurrentInstance();

      function open() {
        const notification = ins.appContext.config.globalProperties.$notification({
          title: '这是一条通知',
          direction: 'left-top'
        });
        notification.open();
      }

      return {
        open,
      }
    }
  }
</script>
```

:::

#### 主题

展示不同的背景颜色

:::demo 设置type属性

```html

<template>
  <div>
    <button @click="open">click</button>
  </div>
</template>
<script>
  import { getCurrentInstance } from 'vue';

  export default {
    setup() {
      const ins = getCurrentInstance();

      function open() {
        const notification = ins.appContext.config.globalProperties.$notification({
          title: '这是一条消息提示',
          type: 'success',
          direction: 'left-top'
        }).open();
      }

      return {
        open
      }
    }
  }
</script>
```

:::

#### 位置

展示方位控制

:::demo 设置positionType属性

```html

<template>
  <div>
    <button @click="open('right-top')">rightTop</button>
    <button @click="open('right-bottom')">rightBottom</button>
    <button @click="open('left-bottom')">leftBottom</button>
    <button @click="open('left-top')">leftTop</button>
  </div>
</template>
<script>
  import { getCurrentInstance } from 'vue';

  export default {
    setup() {
      const ins = getCurrentInstance();

      function open(position) {
        const notification = ins.appContext.config.globalProperties.$notification({
          title: '这是一条消息提示',
          type: 'success',
          direction: position
        });
        notification.open();
      }

      return {
        open
      }
    },
  }
</script>
```

:::

#### 偏移

初始展示时有一个偏移量

:::demo 设置offset属性

```html

<template>
  <div>
    <button @click="open">click</button>
  </div>
</template>
<script>
  import { getCurrentInstance } from 'vue';

  export default {
    setup() {
      const ins = getCurrentInstance();

      function open() {
        const notification = ins.appContext.config.globalProperties.$notification({
          title: '这是一条消息提示',
          type: 'success',
          offset: 100,
          direction: 'right-top'
        });
        notification.open()
      }

      return {
        open
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
| timeout | 持续时间 | number | - | 3000 |
| 其它 | 属性可参考alert组件配置 | - | - | - |

#### method

| 名称 | 说明 | 参数 |
|---------- |-------- |---------- |
| open | 打开notification | - |
| close | 关闭notification | - |
| destroy | 销毁notification | - |
