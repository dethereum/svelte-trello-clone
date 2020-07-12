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
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
}

module.exports = merge(common, dev);