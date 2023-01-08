import { createRouter, createWebHashHistory } from 'vue-router';

const instructions = () =>
  import(
    /* webpackChunkName: "instructions" */ '../layout/instructions/index.vue'
  );
const changeLog = () =>
  import(/* webpackChunkName: "changeLog" */ '../layout/changeLog/index.vue');

const button = () =>
  import(/* webpackChunkName: "button" */ '../comps/button/index.md');
const link = () =>
  import(/* webpackChunkName: "link" */ '../comps/link/index.md');
const radio = () =>
  import(/* webpackChunkName: "radio" */ '../comps/radio/index.md');
const checkbox = () =>
  import(/* webpackChunkName: "checkbox" */ '../comps/checkbox/index.md');
const input = () =>
  import(/* webpackChunkName: "input" */ '../comps/input/index.md');
const textarea = () =>
  import(/* webpackChunkName: "textarea" */ '../comps/textarea/index.md');
const autocomplete = () =>
  import(
    /* webpackChunkName: "autocomplete" */ '../comps/autocomplete/index.md'
  );
const inputNumber = () =>
  import(/* webpackChunkName: "inputNumber" */ '../comps/inputNumber/index.md');
const select = () =>
  import(/* webpackChunkName: "select" */ '../comps/select/index.md');
const cascader = () =>
  import(/* webpackChunkName: "cascader" */ '../comps/cascader/index.md');
const switchC = () =>
  import(/* webpackChunkName: "switchC" */ '../comps/switch/index.md');
const slider = () =>
  import(/* webpackChunkName: "slider" */ '../comps/slider/index.md');
const timePicker = () =>
  import(/* webpackChunkName: "timePicker" */ '../comps/timePicker/index.md');
const datePicker = () =>
  import(/* webpackChunkName: "datePicker" */ '../comps/datePicker/index.md');
const rate = () =>
  import(/* webpackChunkName: "rate" */ '../comps/rate/index.md');
const transfer = () =>
  import(/* webpackChunkName: "transfer" */ '../comps/transfer/index.md');
const tag = () => import(/* webpackChunkName: "tag" */ '../comps/tag/index.md');
const progress = () =>
  import(/* webpackChunkName: "progress" */ '../comps/progress/index.md');
const tree = () =>
  import(/* webpackChunkName: "tree" */ '../comps/tree/index.md');
const pagination = () =>
  import(/* webpackChunkName: "pagination" */ '../comps/pagination/index.md');
const badge = () =>
  import(/* webpackChunkName: "badge" */ '../comps/badge/index.md');
const alert = () =>
  import(/* webpackChunkName: "alert" */ '../comps/alert/index.md');
const loading = () =>
  import(/* webpackChunkName: "loading" */ '../comps/loading/index.md');
const message = () =>
  import(/* webpackChunkName: "message" */ '../comps/message/index.md');
const messageBox = () =>
  import(/* webpackChunkName: "messageBox" */ '../comps/messageBox/index.md');
const notification = () =>
  import(
    /* webpackChunkName: "notification" */ '../comps/notification/index.md'
  );
const navMenu = () =>
  import(/* webpackChunkName: "navMenu" */ '../comps/navMenu/index.md');
const tabs = () =>
  import(/* webpackChunkName: "tabs" */ '../comps/tabs/index.md');
const breadcrumb = () =>
  import(/* webpackChunkName: "breadcrumb" */ '../comps/breadcrumb/index.md');
const pageHeader = () =>
  import(/* webpackChunkName: "pageHeader" */ '../comps/pageHeader/index.md');
const dropdown = () =>
  import(/* webpackChunkName: "dropdown" */ '../comps/dropdown/index.md');
const steps = () =>
  import(/* webpackChunkName: "steps" */ '../comps/steps/index.md');
const dialog = () =>
  import(/* webpackChunkName: "dialog" */ '../comps/dialog/index.md');
const tooltip = () =>
  import(/* webpackChunkName: "tooltip" */ '../comps/tooltip/index.md');
const popover = () =>
  import(/* webpackChunkName: "popover" */ '../comps/popover/index.md');
const card = () =>
  import(/* webpackChunkName: "card" */ '../comps/card/index.md');
const carousel = () =>
  import(/* webpackChunkName: "carousel" */ '../comps/carousel/index.md');
const collapse = () =>
  import(/* webpackChunkName: "collapse" */ '../comps/collapse/index.md');
const timeline = () =>
  import(/* webpackChunkName: "timeline" */ '../comps/timeline/index.md');
const divider = () =>
  import(/* webpackChunkName: "divider" */ '../comps/divider/index.md');
const image = () =>
  import(/* webpackChunkName: "image" */ '../comps/image/index.md');
const backTop = () =>
  import(/* webpackChunkName: "backTop" */ '../comps/backTop/index.md');
const infiniteScroll = () =>
  import(
    /* webpackChunkName: "infiniteScroll" */ '../comps/infiniteScroll/index.md'
  );

export default createRouter({
  linkActiveClass: 'active',
  history: createWebHashHistory(),
  routes: [
    { path: '/', redirect: '/instructions' },
    { path: '/instructions', component: instructions },
    { path: '/change-log', component: changeLog },
    { path: '/button', component: button },
    { path: '/link', component: link },
    { path: '/radio', component: radio },
    { path: '/checkbox', component: checkbox },
    { path: '/input', component: input },
    { path: '/textarea', component: textarea },
    { path: '/autocomplete', component: autocomplete },
    { path: '/inputNumber', component: inputNumber },
    { path: '/select', component: select },
    { path: '/cascader', component: cascader },
    { path: '/switch', component: switchC },
    { path: '/slider', component: slider },
    { path: '/timePicker', component: timePicker },
    { path: '/datePicker', component: datePicker },
    { path: '/rate', component: rate },
    { path: '/transfer', component: transfer },
    { path: '/tag', component: tag },
    { path: '/progress', component: progress },
    { path: '/tree', component: tree },
    { path: '/pagination', component: pagination },
    { path: '/badge', component: badge },
    { path: '/alert', component: alert },
    { path: '/loading', component: loading },
    { path: '/message', component: message },
    { path: '/messageBox', component: messageBox },
    { path: '/notification', component: notification },
    { path: '/navMenu', component: navMenu },
    { path: '/tabs', component: tabs },
    { path: '/breadcrumb', component: breadcrumb },
    { path: '/pageHeader', component: pageHeader },
    { path: '/dropdown', component: dropdown },
    { path: '/steps', component: steps },
    { path: '/dialog', component: dialog },
    { path: '/tooltip', component: tooltip },
    { path: '/popover', component: popover },
    { path: '/card', component: card },
    { path: '/carousel', component: carousel },
    { path: '/collapse', component: collapse },
    { path: '/timeline', component: timeline },
    { path: '/divider', component: divider },
    { path: '/image', component: image },
    { path: '/backTop', component: backTop },
    { path: '/infiniteScroll', component: infiniteScroll },

    {
      path: '/:catchAll(.*)',
      redirect: { path: '/instructions' },
    },
  ],
});
