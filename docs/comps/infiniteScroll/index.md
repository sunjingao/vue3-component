# InfiniteScroll 无限滚动

滚动时按需加载数据

#### 基础用法

基础用法

:::demo

```html

<template>
  <div class="vInfiniteDoc" v-infinite-scroll="load">
    <ul class="infinite-ul">
      <li v-for="i in count" class="infinite-list-item">{{ i }}</li>
    </ul>
    <div class="infinite-footer">
      <p v-if="loading">加载中...</p>
      <p v-if="noMore">没有更多了</p>
    </div>
  </div>
</template>
<script>
  import { ref } from 'vue';

  export default {
    setup() {
      const count = ref(10);
      const loading = ref(false);
      const noMore = ref(false);

      function load(cb) {
        loading.value = true;
        setTimeout(
          () => {
            loading.value = false;
            if (count.value === 20) {
              return noMore.value = true;
            } else {
              count.value += 2;
              cb();
            }
          },
          2000
        )
      }

      return {
        count,
        loading,
        noMore,
        load,
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
| infinite-scroll-disabled | 是否禁止 | Boolean | - | false |
| infinite-scroll-delay | 节流延时 | String | - | 5****00 |
| infinite-scroll-distance | 触发回调距离 | String | - | 100 |

#### method

| 参数      | 说明          |
|---------- |-------------- |
| callback | 是否禁止，其回调的第一个参数为函数，当结束滚动加载时需调用这个函数 | 
