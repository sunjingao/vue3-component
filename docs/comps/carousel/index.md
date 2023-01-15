# Carousel 走马灯

循环展示图片信息

#### 基本用法

基本用法

:::demo 基本用法

```html

<template>

  <div class="vCarouselDoc">
    <v-carousel @prev="prev" @next="next" @locate="locate">
      <v-carousel-item :key="1" style="background-color: #821d40;">
        <h3 class="center fc">1</h3>
      </v-carousel-item>
      <v-carousel-item :key="2" style="background-color: gray;">
        <h3 class="center fc">2</h3>
      </v-carousel-item>
      <v-carousel-item :key="3" style="background-color: #475669;">
        <h3 class="center fc">3</h3>
      </v-carousel-item>
    </v-carousel>
  </div>

</template>
<script>
  export default {
    setup() {
      function prev(index) {
        console.log('prev:', index);
      }

      function next(index) {
        console.log('next:', index);
      }

      function locate(index) {
        console.log('locate:', index);
      }

      return {
        prev,
        next,
        locate,
      }
    }
  }
</script>
```

:::

#### 指示器

控制指示器的位置

:::demo 设置 indicator 属性

```html

<template>

  <div class="vCarouselDoc">
    <v-carousel indicator="outside" @prev="prev" @next="next" @locate="locate">
      <v-carousel-item :key="1" style="background-color: #821d40;">
        <h3 class="center fc">1</h3>
      </v-carousel-item>
      <v-carousel-item :key="2" style="background-color: gray;">
        <h3 class="center fc">2</h3>
      </v-carousel-item>
      <v-carousel-item :key="3" style="background-color: #475669;">
        <h3 class="center fc">3</h3>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>

  export default {

    setup() {

      function prev(index) {
        console.log('prev:', index);
      }

      function next(index) {
        console.log('next:', index);
      }

      function locate(index) {
        console.log('locate:', index);
      }

      return {
        prev,
        next,
        locate,
      }
    },
  }
</script>

```

:::

#### 箭头展示时机

指定箭头的展示时机

:::demo

```html

<template>

  <div class="vCarouselDoc">
    <v-carousel arrow="always" @prev="prev" @next="next" @locate="locate">
      <v-carousel-item :key="2" style="background-color: #821d40;">
        <h3 class="center fc">1</h3>
      </v-carousel-item>
      <v-carousel-item :key="1" style="background-color: gray;">
        <h3 class="center fc">2</h3>
      </v-carousel-item>
      <v-carousel-item :key="3" style="background-color: #475669;">
        <h3 class="center fc">3</h3>
      </v-carousel-item>
    </v-carousel>
  </div>

</template>

<script>

  export default {

    setup() {
      
      function prev(index) {
        console.log('prev:', index);
      }

      function next(index) {
        console.log('next:', index);
      }

      function locate(index) {
        console.log('locate:', index);
      }

      return {
        prev,
        next,
        locate,
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
| initIndex | 初始索引 | Number | - | 0 |
| height | 高度 | String | - | 300px |
| trigger | 指示器触发方式 | String | hover/click | hover |
| autoplay | 是否自动切换 | Boolean | - | true |
| interval | 切换事件 | Number | - | 2000 |
| transition | 动画完成时间 | Number | - | 500 |
| indicator | 指示器位置 | String | outside/inside/none | inside |
| arrow | 箭头切换方式 | String | 'always', 'hover', 'never' | hover |

#### event

| 名称 | 说明 | 参数 |
|---------- |-------- |---------- |
| prev | 点击上一张幻灯片 | index |
| next | 点击下一张幻灯片 | index |
| locate | 指示器触发 | index |
