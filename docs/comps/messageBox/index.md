# MessageBox 弹框

模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容

#### 消息类型提示

默认为message类型。右下角仅有确认按钮

:::demo 默认的type为message类型

```html

<template>
  <div>
    <v-button @click="open">click</v-button>
  </div>
</template>
<script>
  import { getCurrentInstance } from 'vue';

  export default {
    setup() {

      const instance = getCurrentInstance();

      function open() {

        const messageBox = instance.appContext.config.globalProperties.$messageBox({
          title: '这是标题',
          content: '这是内容',
        });
        messageBox.open();
      }

      return {
        open
      }
    },
  }
</script>
```

:::

#### 确认类型提示

确认类型。右下角有取消及确认按钮

:::demo 设置type为confirm

```html

<template>
  <div>
    <v-button @click="open">click</v-button>
  </div>
</template>
<script>
  import { getCurrentInstance } from 'vue';

  export default {
    setup() {
      const ins = getCurrentInstance().appContext.config.globalProperties;

      function open() {

        const messageBox = ins.$messageBox({
          type: 'confirm',
          title: '这是标题',
          content: '这是内容',
          cancelCallBack(val) {
            ins.$message({
              title: 'cancel时的错误提示',
              type: 'error'
            }).open();
            return true;
          },
          confirmCallBack(val) {
            ins.$message({
              title: 'confirm时的错误提示',
              type: 'error'
            }).open();
            return true;
          },
          closeCallBack(val) {
            ins.$message({
              title: 'close时的错误提示',
              type: 'error'
            }).open();
            return true;
          },
        });
        messageBox.open();
      }

      return {
        open
      }
    },
  }
</script>
```

:::

#### 提交类型提示

提交类型。带有输入内容

:::demo 设置type为prompt

```html

<template>
  <div>
    <v-button @click="open">click</v-button>
  </div>
</template>
<script>
  import { getCurrentInstance } from 'vue';

  export default {
    setup() {
      const ins = getCurrentInstance().appContext.config.globalProperties;

      function open() {
        const messageBox = ins.$messageBox({
          type: 'prompt',
          title: '这是标题',
          content: '这是内容',
        });
        messageBox.open();
      }

      return {
        open
      }
    },
  }
</script>
```

:::

#### 使用html自定义展示

使用html自定义展示标题及正文

:::demo 使用html自定义

```html

<template>
  <div>
    <v-button @click="open">click</v-button>
  </div>
</template>
<script>
  import { getCurrentInstance } from 'vue';

  export default {

    setup() {

      const ins = getCurrentInstance().appContext.config.globalProperties;

      function open() {

        const messageBox = ins.$messageBox({
          type: 'prompt',
          title: '<span style="color:red;">这是自定义标题</span>',
          content: '<span style="color:red;">这是自定义内容</span>',
        });
        messageBox.open();
      }

      return {
        open
      }
    },
  }
</script>
```

:::

#### 回调

允许通过回调函数控制关闭

:::demo 分为cancelCallBack，confirmCallBack，closeCallBack等几个回调

```html

<template>
  <div>
    <v-button @click="open">click</v-button>
  </div>
</template>
<script>
  import { getCurrentInstance } from 'vue';

  export default {
    setup() {
      const ins = getCurrentInstance().appContext.config.globalProperties;

      function open() {

        const messageBox = ins.$messageBox({
          type: 'prompt',
          title: '这是标题',
          content: '这是内容',
          cancelCallBack() {
            const message = ins.$message({
              title: '取消失败',
              type: 'error'
            });
            message.open();
            return false;
          },
          confirmCallBack() {
            return true;
          },
          closeCallBack() {
            const message = ins.$message({
              title: '关闭失败',
              type: 'error'
            });
            message.open();
            return false;
          },
        });
        messageBox.open();
      }

      return {
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
| type | 弹框类型 | String | message、confirm、prompt | message |
| title | 标题内容 | String | - | '' |
| content | content内容 | String | - | '' |
| cancelButtonText | 取消按钮中的内容 | String | - | 取消 |
| confirmButtonText | 确认按钮中的内容 | String | - | 确认 |
| cancelCallBack | 点击取消按钮时的回调 | Function | - | 如果type为prompt，参数为输入的值 |
| confirmCallBack | 点击确认按钮时的回调 | Function | - | 如果type为prompt，参数为输入的值 |
| closeCallBack | 点击关闭符号时的回调 | Function | - | 如果type为prompt，参数为输入的值 |

#### attr

| 名称 | 说明 | 参数 |
|---------- |-------- |---------- |
| show | 显示 | - |
| hide | 关闭 | - |

