import comp from './src/service';

comp.install = function (app) {
  app.config.globalProperties.$message = comp;
};

export default comp;
