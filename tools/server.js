import express from 'express';
import webpack from 'webpack';
import dev from 'webpack-dev-middleware'
import hot from 'webpack-hot-middleware'

import config from '../webpack.config.dev.js';

const compiler = webpack(config);

const { stats } = config

export default () => express()
    .use(dev(compiler, { stats }))
    .use(hot(compiler))
    .use(express.static('src'));