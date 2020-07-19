import { BundleStatsWebpackPlugin } from 'bundle-stats-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import OptimizeCSSAssetsPlugin from "optimize-css-assets-webpack-plugin";
import FixStyleOnlyEntriesPlugin from "webpack-fix-style-only-entries";
import { merge } from 'webpack-merge';

import { preprocess } from './svelte.config.js';
import common from './webpack.config.common.js';
import { files } from './whitelist.js'

process.env.NODE_ENV = 'production';

const SASS_LOADER_IMPORTS = files.reduce((data, file) => data + `@import "~bootstrap/scss/${file}.scss";`, '');

/** @type {import('webpack').Configuration} */
const prod = {
    entry: './src/index.js',
    output: {
        publicPath: './',
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(html|svelte)$/,
                use: {
                    loader: 'svelte-loader',
                    options: {
                        dev: false,
                        emitCss: true,
                        preprocess,
                    }
                },
            },
            {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                          importLoaders: 2,
                        },
                    },
                    'postcss-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            additionalData: (content, { resourcePath }) => {
                                if (resourcePath.includes(".svelte.css")) {
                                    return '@import "src/scss/variables.scss";' + SASS_LOADER_IMPORTS + content;
                                }
                            }
                        },
                    },
                ],
            },
        ]
    },
    plugins: [
        new BundleStatsWebpackPlugin({ outDir: '../'}),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({filename: "[name].css"}),
        new FixStyleOnlyEntriesPlugin(),
        new OptimizeCSSAssetsPlugin({})
    ]
}

export default merge(common, prod)