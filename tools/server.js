const express = require('express');
const webpack = require('webpack');
const middleware = require('webpack-dev-middleware').default

const config = require('../webpack.config.dev.js');

const compiler = webpack(config);

// middlewares
const dev = middleware(compiler)
const hot = require('webpack-hot-middleware')(compiler)
const assets = express.static('src')


module.exports = () => express()
    .use(dev)
    .use(hot)
    .use(assets);