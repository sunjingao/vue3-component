import { createApp } from 'vue';

import router from './docs/router/index.js';

import App from './docs/layout/app/index';
import './docs/css/index.css';
import './docs/css/docs.scss';

import { install } from './src/index';

import demoBlock from './docs/layout/demoBlock/index';

// Progress 进度条
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// 美化demo-box展示代码
import 'highlight.js/styles/color-brewer.css';

import TestTree from './docs/temps/tree/index';

// import

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done(); // 结束Progress
});

const app = createApp(App);
app.component('demo-block', demoBlock);
app.use(install).use(router).mount('#app');

// 用于自动提示文档展示的全局组件注册
app.component('test-tree', TestTree);
