const express = require('express');
const webpack = require('webpack');

const config = require('../webpack.config.dev.js');

const compiler = webpack(config);

const { stats } = config

// middlewares
const dev = require('webpack-dev-middleware')(compiler, { stats })
const hot = require('webpack-hot-middleware')(compiler)
const assets = express.static('src')


module.exports = () => express()
    .use(dev)
    .use(hot)
    .use(assets);