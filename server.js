const express = require('express');
const next = require('next');
const { createProxyMiddleware } = require('http-proxy-middleware');

const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    // apply proxy in dev mode
    if (dev)
      server.use(
        '/api/v1',
        createProxyMiddleware({
          target: 'http://20.204.1.248:8000',
          changeOrigin: true,
        })
      );

    server.all('*', (req, res) => handle(req, res));

    server.listen('3000', (err) => {
      if (err) throw err;

      console.log('> ready on http://20.204.1.248:8000');
    });
  })
  .catch((err) => console.log(err));
