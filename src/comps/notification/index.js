import comp from './src/service';

comp.install = function (app) {
  app.config.globalProperties.$notification = comp;
};

export default comp;
