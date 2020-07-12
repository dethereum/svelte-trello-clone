const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack');

/** @type {import('webpack').Configuration} */
module.exports = {
    entry: [
        'webpack-hot-middleware/client',
        './src/index.js'
    ],
    mode: 'development',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/',
    },
    resolve: {
        alias : {
            svelte: path.resolve('node_modules', 'svelte')
        },
        extensions: ['.mjs', '.js', '.svelte'],
        mainFields: ['svelte', 'browser', 'module', 'main']
    },
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
                ],
            },
            {
                test: /\.(png|jpe?g)$/i,
                loader: 'file-loader',
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin(),
    ]
}