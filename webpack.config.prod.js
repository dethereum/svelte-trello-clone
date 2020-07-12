const { BundleStatsWebpackPlugin } = require('bundle-stats-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");


const { merge } = require('webpack-merge');

const common = require('./webpack.config.common.js');

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
                    }
                },
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
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