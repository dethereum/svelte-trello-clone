const express = require('express');
const webpack = require('webpack');
const dev = require('webpack-dev-middleware')
const hot = require('webpack-hot-middleware')

const config = require( '../webpack.config.dev.js');

const compiler = webpack(config);

const { stats } = config

module.exports = () => express()
    .use(dev(compiler, { stats }))
    .use(hot(compiler))
    .use(express.static('src'));