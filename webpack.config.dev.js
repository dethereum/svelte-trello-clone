const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const webpack = require('webpack');
const { merge } = require('webpack-merge');

const common = require('./webpack.config.common.js');

/** @type {import('webpack').Configuration} */
const dev = {
    entry: [
        'webpack-hot-middleware/client',
        './src/index.js'
    ],
    output: {
        publicPath: '/',
    },
    devtool: 'cheap-eval-source-map',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(html|svelte)$/,
                use: {
                    loader: 'svelte-loader-hot',
                    options: {
                        dev: true,
                        emitCss: false,
                        hotReload: true,
                        hotOptions: {
                            noPreserveState: false,
                        }
                    }
                },
            },
            {
                test: /\.css$/,
                use: [
                  'style-loader',
                  'css-loader',
                  'postcss-loader'
                ],
            },
        ]
    },
    plugins: [
        new HardSourceWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ]
}

module.exports = merge(common, dev);