const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  // Proxy requests to Google Sheets API
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

  // Proxy requests to Google Finance
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://www.google.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    })
  );
};
