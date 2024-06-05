// src/setupProxy.js

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/sheets',
    createProxyMiddleware({
      target: 'https://sheets.googleapis.com',
      changeOrigin: true,
      pathRewrite: {
        '^/sheets': '',
      },
    })
  );
};
