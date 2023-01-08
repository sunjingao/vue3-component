import comp from './src/index.vue';

comp.install = function (app) {
  app.component(comp.name, comp);
};

export default comp;
