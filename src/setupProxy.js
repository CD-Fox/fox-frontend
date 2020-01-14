const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    proxy('/api',{
      target: 'http://jx-springboot.jx-staging.zxy5.xyz',
      changeOrigin: true,
      pathRewrite: {'^/api' : ''}
    })
  );
};
