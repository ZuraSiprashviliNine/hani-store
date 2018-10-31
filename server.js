
const path = require('path');
const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();

    server.get('/api/language/init', (req, res) => {
      let _data = require('./api/language/language.json');
      let languages = Object.keys(_data.keywords);
      let data = JSON.stringify({
        keywords: _data.keywords,
        languages: languages,
        native: _data.native
      });

      res.end(data);
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, () => {
      console.log('ready to fuck');
    })
  })
  .catch(error => {
    console.error(error);
    process.exit(1);
  })
