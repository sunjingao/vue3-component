# Image 图片

Image 图片

#### 基础用法

基础用法

:::demo

```html

<template>
  <div class="vImageDoc demoImage">
    <div class="block" v-for="fit in fits" :key="fit">
      <span class="demonstration">{{ fit }}</span>
      <v-image
        style="width: 100px; height: 100px"
        :src="url"
        :fit="fit"
      ></v-image>
    </div>
  </div>
</template>
<script>
  import { ref } from 'vue';

  export default {
    setup() {
      const fits = ref(['fill', 'contain', 'cover', 'none', 'scale-down']);
      const url = ref('https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg');
      return {
        fits,
        url,
      }
    }
  }
</script>
```

:::

#### 占位内容

定义加载中展示的内容及加载失败展示的内容

:::demo

```html

<template>
  <div class="vImageDoc demoImage">
    <div class="block">
      <span>文字</span>
      <v-image :src="src" alt="加载中" class="imageSize"></v-image>
    </div>
    <div class="block">
      <span>自定义</span>
      <v-image :src="src" style="width: 300px; height: 200px">
        <div slot="alt">
          加载中<span>...</span>
        </div>
      </v-image>
    </div>
  </div>

  <div class="vImageDoc demoImage mt60">

    <div class="block">
      <span>文字</span>
      <v-image error="加载失败" class="imageSize"></v-image>
    </div>
    <div class="block">
      <span>自定义内容</span>
      <v-image class="imageSize">
        <div slot="error">
          <i class="iconfont icon-v-error"></i>
        </div>
      </v-image>
    </div>
  </div>
</template>
<script>
  import { ref } from 'vue';

  export default {
    setup() {
      const src = ref('https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg');
      return {
        src
      }
    }
  }
</script>
```

:::

#### 懒加载

懒加载，v-image需要设置好宽高

:::demo

```html

<template>
  <div class="vImageDoc lazy">
    <v-image v-for="url in urls" :key="url" :src="url" lazy class="lazy-block"></v-image>
  </div>
</template>
<script>
  import { ref } from 'vue';

  export default {
    setup() {
      let urls = ref([
        'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
        'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
        'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
        'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
        'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
        'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
        'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
      ])
      return {
        urls
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
| src| 图片地址 | String | - | '' |
| alt | 加载中展示的文字 | String | - | '' |
| error | 错误时展示的文字 | String | - | '' |
| fit | object-fit | String | fill / contain / cover / none / scale-down | fill |
| lazy | 是否懒加载 | Boolean | - | false |
| updateTimer | 节流时间 | Number | - | 500 |
| showHeight | 当图形与scrollParent的地步的距离小于等于此值是，进行加载 | Number | - | 50 |

#### slot

| 名称 | 说明 | 
|---------- |-------- |
| alt | alt展示 |
| error | 错误展示 |
