const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const { scss } = require('svelte-preprocess');
const webpack = require('webpack');
const { merge } = require('webpack-merge');

const common = require('./webpack.config.common.js');

const BOOTSTRAP_IMPORTS = ['functions', 'variables', 'mixins'].reduce((data, file) => data + `@import "node_modules/bootstrap/scss/_${file}.scss";\n`, '');
const prependData = '@import "src/scss/variables.scss";\n' + BOOTSTRAP_IMPORTS;

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
                        preprocess: scss({
                            prependData,
                        })
                    }
                },
            },
        ]
    },
    plugins: [
        new HardSourceWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ]
}

module.exports = merge(common, dev);