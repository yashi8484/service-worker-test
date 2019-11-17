// This file doesn't go through babel or webpack transformation.
// Make sure the syntax and sources this file requires are compatible with the current node version you are running
// See https://github.com/zeit/next.js/issues/1245 for discussions on Universal Webpack or universal Babel
const { createServer } = require('http');
const { parse } = require('url');
const { createReadStream } = require('fs');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// https://medium.com/@anatomic/using-a-service-worker-with-next-js-460e0168a60a
app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname } = parsedUrl;

    if (pathname === '/sw.js') {
      res.setHeader('content-type', 'text/javascript');
      createReadStream('./scripts/serviceWorker.js').pipe(res);
    } else {
      handle(req, res, parsedUrl);
    }
  }).listen(9000, err => {
    if (err) throw err;
    console.log('> Ready on http://localhost:9000');
  });
});
