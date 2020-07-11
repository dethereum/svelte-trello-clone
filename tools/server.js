const express = require('express');
const webpack = require('webpack');

const config = require('../webpack.config.js');

const compiler = webpack(config);

// middlewares
const dev = require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    stats: false
})
const hot = require('webpack-hot-middleware')(compiler)
const assets = express.static('src')


module.exports = () => express()
    .use(dev)
    .use(hot)
    .use(assets);