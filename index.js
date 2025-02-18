const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Proxy requests to the target URL
app.use(
  '/',
  createProxyMiddleware({
    target: 'https://data.abatek.com', // Change this to your target URL
    changeOrigin: true,
    secure: false,
  })
);

app.listen(3000, () => {
  console.log('Proxy server running on http://localhost:3000');
});
