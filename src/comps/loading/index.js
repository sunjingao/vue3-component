import comp from './src/index';
import dir from './src/directive';
import serve from './src/service';

comp.install = function (app) {
  app.directive(dir.name, dir);
  app.config.globalProperties.$loading = serve;
};

export default comp;
