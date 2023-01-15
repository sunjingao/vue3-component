<template>
  <div class="mt20">
    <v-card>
      <template #header>
        <h3 class="dib fz20 m0">技术说明</h3>
      </template>
      <div>
        <h4 class="fz18">开发框架</h4>
        vue3.js
      </div>
      <div class="mt20">
        <h4 class="fz18">构建工具</h4>
        webpack5
      </div>
      <div class="mt20">
        <h4 class="fz18">依赖插件</h4>
        自己实现的 popper.js 库
      </div>
      <div class="mt20">
        <h4 class="fz18">代码校验</h4>
        esLint、styleLint
      </div>
      <div class="mt20">
        <h4 class="fz18">环境配置</h4>
        node v14.12.0
      </div>
    </v-card>

    <v-card class="mt20">
      <template #header>
        <h3 class="dib fz20 m0">使用说明</h3>
      </template>
      <div class="mt20">
        <h4 class="fz18">全部引入</h4>
        <div>
          <div>import { install } from './src/index';</div>
          <div>createApp(App).use(install)</div>
        </div>
      </div>
      <div class="mt20">
        <h4 class="fz18">按需引入</h4>
        <div>
          <div>import { Button } from './src/index';</div>
          <div>const app = createApp(App)</div>
          <div>Button.install(app)</div>
        </div>
      </div>
    </v-card>
  </div>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'instructions',

  setup() {},
});
</script>

<style scoped lang="scss" src="./css/index.scss"></style>
