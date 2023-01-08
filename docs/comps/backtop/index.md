# BackTop 回到顶部

BackTop 回到顶部

#### 基础用法

基础用法

:::demo

```html

<template>
  <div>
    滑动页面至下方，可以看见组件
    <v-back-top selector=".main-wrapper-container" :bottom="260" @click="click">
      <div
        style="{
                height: 100%;
                width: 100%;
                background-color: #f2f5f6;
                box-shadow: 0 0 6px rgba(0,0,0, .12);
                text-align: center;
                line-height: 40px;
                color: #1989fa;
              }"
      >UP
      </div>
    </v-back-top>
  </div>
</template>

<script>

  export default {

    setup() {

      function click(event) {
        console.log('click:', event);
      }

      return {
        click
      }
    }
  }
</script>

```

:::

#### 在局部内容中展示

通过局部容器滚动展示回到顶部按钮
:::demo 设置selector属性为选择器

```html

<template>
  <div id="test" class="vBackTopDoc">
    <div class="testpart"></div>
  </div>
  <div>
    <v-back-top selector="#test" :bottom="200" @click="click"></v-back-top>
  </div>
</template>
<script>
  export default {
    setup() {
      function click(event) {
        console.log('click:', event);
      }

      return {
        click
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
| selector | 选择器 | String | root、selector选择器 | root |
| visibilityHeight | 滚动高度达到此参数值才出现 | Number | - | 200 |
| right | 页面右边距离 | Number | - | 40 |
| bottom | 页面底部距离 | Number | - | 40 |
| timeout | 节流时间 | Number | - | 500 |

#### event

| 名称 | 说明 | 参数 |
|---------- |-------- |---------- |
| click | 点击按钮时触发 | event |

#### slot

| 名称 | 说明 | 
|---------- |-------- |
| default | 内容 |

