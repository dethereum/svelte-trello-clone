const express = require('express');
const webpack = require('webpack');

const config = require('../webpack.config.prod.js');

const { stats } = config

module.exports = () => express()
    .use(require('webpack-dev-middleware')(webpack(config), { stats }))
    .use(express.static('dist'));