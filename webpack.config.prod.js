const { CleanWebpackPlugin } = require('clean-webpack-plugin')

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
                        emitCss: false,
                    }
                },
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
    ]
}

module.exports = merge(common, prod)