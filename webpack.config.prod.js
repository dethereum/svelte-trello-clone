const { BundleStatsWebpackPlugin } = require('bundle-stats-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const { scss } = require('svelte-preprocess');
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const { merge } = require('webpack-merge');

const common = require('./webpack.config.common.js');

process.env.NODE_ENV = 'production';

const BOOTSTRAP_IMPORTS = ['functions', 'variables', 'mixins'].reduce((data, file) => data + `@import "node_modules/bootstrap/scss/_${file}.scss";\n`, '');
const prependData = '@import "src/scss/variables.scss";\n' + BOOTSTRAP_IMPORTS;

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
                        preprocess: scss({
                            prependData,
                        })
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