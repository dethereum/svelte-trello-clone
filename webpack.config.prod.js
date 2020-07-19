const { BundleStatsWebpackPlugin } = require('bundle-stats-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const { merge } = require('webpack-merge');

const { preprocess } = require('./svelte.config.js');
const common = require('./webpack.config.common.js');
const { files } = require('./whitelist.js');

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

module.exports = merge(common, prod)