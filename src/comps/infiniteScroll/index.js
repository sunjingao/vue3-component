import comp from './src/directive';

comp.install = function (app) {
  app.directive(comp.name, comp);
};

export default comp;
