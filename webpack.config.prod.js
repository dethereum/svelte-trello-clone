const { BundleStatsWebpackPlugin } = require('bundle-stats-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const { merge } = require('webpack-merge');

const common = require('./webpack.config.common.js');

process.env.NODE_ENV = 'production';

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
        ]
    },
    plugins: [
        new BundleStatsWebpackPlugin({ outDir: '../'}),
        new CleanWebpackPlugin(),
        new FixStyleOnlyEntriesPlugin(),
        new OptimizeCSSAssetsPlugin({})
    ]
}

module.exports = merge(common, prod)