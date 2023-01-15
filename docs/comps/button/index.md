# Button 按钮

提供点击功能

#### 宽高

可设置宽高

:::demo

```html

<template>
  <v-button width="200px" height="50px" @click="click">
    按钮
  </v-button>
</template>

<script>
  export default {
    setup() {
      function click() {
        console.log('click')
      }

      return {
        click
      }
    }
  };
</script>
```

:::

#### 类型

设置不同的类型，代表不同的含义，展示不同的颜色

:::demo

```html

<template>
  <v-button @click="click">默认按钮</v-button>
  <v-button type="primary" @click="click" class="v-ml20">主要按钮</v-button>
  <v-button type="success" @click="click" class="v-ml20">成功按钮</v-button>
  <v-button type="info" @click="click" class="v-ml20">信息按钮</v-button>
  <v-button type="warning" @click="click" class="v-ml20">警告按钮</v-button>
  <v-button type="danger" @click="click" class="v-ml20">危险按钮</v-button>
</template>
<script>
  export default {
    setup() {
      function click() {
        console.log('click')
      }

      return {
        click
      }
    }
  }
</script>
```

:::

#### 朴素按钮

展示的颜色较为清爽，有边框

:::demo

```html

<template>
  <v-button plain @click="click">默认按钮</v-button>
  <v-button type="primary" plain @click="click" class="v-ml20">主要按钮</v-button>
  <v-button type="success" plain @click="click" class="v-ml20">成功按钮</v-button>
  <v-button type="info" plain @click="click" class="v-ml20">信息按钮</v-button>
  <v-button type="warning" plain @click="click" class="v-ml20">警告按钮</v-button>
  <v-button type="danger" plain @click="click" class="v-ml20">危险按钮</v-button>
</template>
<script>
  export default {
    setup() {
      function click() {
        console.log('click')
      }

      return {
        click
      }
    }
  }
</script>
```

:::

#### 圆角按钮

具有圆角

:::demo

```html

<template>
  <v-button type="primary" round @click="click">
    按钮
  </v-button>
</template>
<script>
  export default {
    setup() {
      function click() {
        console.log('click')
      }

      return {
        click
      }
    }
  }
</script>
```

:::

#### 禁止操作

不允许用户操作，不会触发click事件

:::demo

```html

<template>
  <v-button type="primary" disabled @click="click">
    按钮
  </v-button>
</template>
<script>
  export default {
    setup() {
      function click() {
        console.log('click')
      }

      return {
        click
      }
    }
  }
</script>
```

:::

#### 加载中

具有loading效果，不允许操作

:::demo

```html

<template>
  <v-button type="primary" :loading="true" @click="click">
    按钮
  </v-button>
</template>
<script>
  export default {
    setup() {
      function click() {
        console.log('click')
      }

      return {
        click
      }
    }
  }
</script>
```

:::

#### 按钮集

多个按钮集合

:::demo

```html

<template>

  <div>
    <v-button-group type="success">
      <v-button @click="click">
        按钮
      </v-button>
      <v-button type="primary" @click="click">
        按钮
      </v-button>
    </v-button-group>

    <br/>

    <v-button-group type="danger" width="200px" height="50px" class="mt20">
      <v-button @click="click">
        按钮2
      </v-button>
      <v-button @click="click">
        按钮2
      </v-button>
    </v-button-group>
  </div>

</template>
<script>
  export default {
    setup() {
      function click() {
        console.log('click')
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

#### button props

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| width | 宽度 | String | - | - |
| height | 高度 | String | - | - |
| type| 类型 | string | default、primary、success、warning、info、danger | default |
| plain | 是否朴素按钮 | boolean | - | false |
| round | 是否圆角按钮 | boolean | - | false |
| disabled | 是否禁用状态 | boolean | - | false |
| loading | 是否加载中状态 | boolean | - | false |

#### button event

| 名称 | 说明 | 参数 |
|---------- |-------- |---------- |
| click | 点击时触发 | event |

#### button slot

| 名称 | 说明 |
|---------- |-------- |
| default | 内容 |

#### button-group props

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type| 类型 | string | default、primary、success、warning、info、danger | default |
| width | 宽度 | String | - | - |
| height | 高度 | String | - | - |
