const path = require('path')

const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

/** @type {import('webpack').Configuration} */
module.exports = {
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    resolve: {
        alias : {
            svelte: path.resolve('node_modules', 'svelte')
        },
        extensions: ['.mjs', '.js', '.svelte'],
        mainFields: ['svelte', 'browser', 'module', 'main']
    },
    stats: {
        assetsSort: 'size',
        colors: true,
        children: false,
        maxModules: 1,
    },
    module: {
        rules: [
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
        new HtmlWebpackPlugin({title: 'Sally'}),
        new FaviconsWebpackPlugin({
            logo: path.resolve(__dirname, 'assets/images/cream.png'),
            favicons: {
                icons : {
                    coast: false,
                    windows: false, 
                    yandex: false
                }
            }
        }),
    ]
}