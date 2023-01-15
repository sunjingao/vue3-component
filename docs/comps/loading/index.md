# Loading 加载

遮挡区域，防止用户操作

#### 全屏

全屏loading
:::demo

```html

<template>
  <div class="vLoadingDoc">
    <div class="loading-all" v-loading="sign" aaa="111">
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
    </div>
    <v-button @click="toggle" class="mt20">展示全屏loading</v-button>
  </div>
</template>
<script>
  import { reactive } from 'vue';

  export default {
    setup() {
      const sign = reactive({
        isOpen: false,
        target: document.querySelector('html')
      });

      function toggle() {
        sign.isOpen = true;

        setTimeout(
          () => {
            sign.isOpen = false;
          },
          3000
        );
      }

      return {
        sign,
        toggle
      };
    }
  }
</script>
```

:::

#### 指令局部loading

指令局部loading

:::demo

```html

<template>

  <div class="vLoadingDoc">

    <div v-loading="sign1" class="loading-all">
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
    </div>
    <div v-loading="sign2" class="loading-all mt20">
      <div>2</div>
      <div>2</div>
      <div>2</div>
      <div>2</div>
      <div>2</div>
      <div>2</div>
      <div>2</div>
      <div>2</div>
      <div>2</div>
      <div>2</div>
      <div>2</div>
      <div>2</div>
      <div>2</div>
      <div>2</div>
      <div>2</div>
      <div>2</div>
      <div>2</div>
      <div>2</div>
      <div>2</div>
      <div>2</div>
      <div>2</div>
      <div>2</div>
      <div>2</div>
      <div>2</div>
      <div>2</div>
      <div>2</div>
      <div>2</div>
      <div>2</div>
      <div>2</div>
      <div>2</div>
      <div>2</div>
      <div>2</div>
      <div>2</div>
      <div>2</div>
      <div>2</div>
      <div>2</div>
      <div>2</div>
      <div>2</div>
      <div>2</div>
      <div>2</div>
      <div>2</div>
    </div>
    <v-button @click="toggle" class="mt20">展示区域loading</v-button>
  </div>
</template>
<script>
  import { reactive } from 'vue';

  export default {
    setup() {
      const sign1 = reactive({
        isOpen: false
      });
      const sign2 = reactive({
        isOpen: false,
        content: '文字'
      });

      function toggle() {
        sign1.isOpen = !sign1.isOpen;
        sign2.isOpen = !sign2.isOpen;
      }

      setTimeout(
        () => {
          sign1.value = false;
          sign2.value = false;
        },
        3000
      );

      return {
        sign1,
        sign2,
        toggle
      };
    }
  }
</script>
```

:::

#### 局部加载

局部加载

:::demo

```html

<template>

  <div class="vLoadingDoc">

    <div class="loading-all testSer"></div>

    <div class="mt20">
      <v-button class="loading-service" @click="open">点我开启局部loading</v-button>
      <v-button class="loading-service ml20" @click="close">点我关闭局部loading</v-button>
    </div>
  </div>

</template>

<script>

  import { getCurrentInstance, onMounted } from 'vue';

  export default {

    setup() {

      const loadingCb = getCurrentInstance().appContext.config.globalProperties.$loading;

      let ins = null;

      function open() {
        ins.open();
      }

      function close() {
        ins.close();
      }

      onMounted(
        () => {
          ins = loadingCb({
            target: document.querySelector('.testSer')
          });
        }
      )

      return {
        open,
        close
      }

    }

  }

</script>

```

:::

### API

#### service props

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| showLoadingIcon | 是否展示loading图标 | Boolean | - | true |
| content | 文本 | String | - | '' |
| loadingClass | loading样式 | String | - | '' |
| contentClass | content区域样式 | String | - | '' |
| componentName | 自定义组件名称 | - | String | '' |

#### directive props

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| showLoadingIcon | 是否展示loading图标 | Boolean | - | true |
| content | 文本 | String | - | '' |
| loadingClass | loading样式 | String | - | '' |
| contentClass | content区域样式 | String | - | '' |
| componentName | 自定义组件名称 | - | String | '' |
