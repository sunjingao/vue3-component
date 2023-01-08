# Card 卡片

Card 卡片

#### 基本用法

基本用法

:::demo 基本用法

```html

<template>

  <v-card class="vCardDoc first">
    <template #header>
      <div class="clearfix">
        <span>卡片名称</span>
        <v-link
          style="float: right; padding: 3px 0"
          :underline="false"
          type="primary"
        >
          操作按钮
        </v-link>
      </div>
    </template>
    <div v-for="o in 4" :key="o" class="text item">
      {{'列表内容 ' + o }}
    </div>
  </v-card>
</template>
```

:::

#### 带图片

带图片

:::demo 基本用法

```html

<template>

  <div class="vCardDoc second">
    <v-card class="box" :contentStyle="{padding:0}">
      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
           class="image">
      <div style="padding: 14px;">
        <span>好吃的汉堡</span>
        <div class="bottom clearfix">
          <time class="time">{{ getCurrentDate() }}</time>
          <v-link :underline="false" type="primary" class="button">
            操作按钮
          </v-link>
        </div>
      </div>
    </v-card>
    <v-card class="box" :contentStyle="{padding:0}" style="margin-left: 20px;">
      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
           class="image">
      <div style="padding: 14px;">
        <span>好吃的汉堡</span>
        <div class="bottom clearfix">
          <time class="time">{{ getCurrentDate() }}</time>
          <v-link :underline="false" type="primary" class="button">
            操作按钮
          </v-link>
        </div>
      </div>
    </v-card>
  </div>
</template>
<script>
  export default {
    setup() {
      function getCurrentDate() {
        let currentDate = new Date();
        return `${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDate()}`;
      }

      return {
        getCurrentDate
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
| headerStyle | 标题样式 | Object | - | - |
| contentStyle | 内容样式 | Object | - | - |

#### slot

| 名称 | 说明 |
|---------- |-------- |
| header | 标题 |
| content | 内容 |
