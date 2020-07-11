const express = require('express');
const webpack = require('webpack');

const config = require('../webpack.config.js');

const compiler = webpack(config);

// middlewares
const dev = require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
})
const assets = express.static('src')


module.exports = () => express()
    .use(dev)
    .use(assets);