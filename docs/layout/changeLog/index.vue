<template>
  <div>
    <h2>更新日志</h2>

    <v-card class="mt20">
      <template #header>
        <div class="header-content">
          <h3 class="dib fz20 m0">v1.0.0</h3>
          <span class="dib"> 2022-09-06 </span>
        </div>
      </template>
      <div>
        <h4 class="fz18 mt0">组件库文档搭建</h4>
        完成组件库文档搭建
      </div>
    </v-card>
  </div>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'change-log',
});
</script>

<style scoped lang="scss" src="./css/index.scss"></style>
