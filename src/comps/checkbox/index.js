import comp from './src/index';

comp.install = function (app) {
  app.component(comp.name, comp);
};

export default comp;
