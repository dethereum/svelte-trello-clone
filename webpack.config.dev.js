import HardSourceWebpackPlugin from 'hard-source-webpack-plugin';
import webpack from 'webpack';
import { merge } from 'webpack-merge';

import { preprocess } from './svelte.config.js';
import common from './webpack.config.common.js';

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
                        },
                        preprocess
                    }
                },
            },
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                          importLoaders: 2,
                        },
                    },
                    'postcss-loader',
                    'sass-loader'
                ],
            },
        ]
    },
    plugins: [
        new HardSourceWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ]
}

export default merge(common, dev);