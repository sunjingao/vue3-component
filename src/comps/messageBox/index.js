import comp from './src/index';
import serve from './src/service';

comp.install = function (app) {
  app.component(comp.name, comp);
  app.config.globalProperties.$messageBox = serve;
};

export default comp;
