const path = require('path')

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const templateContent = ({htmlWebpackPlugin}) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>${htmlWebpackPlugin.options.title}</title>
    <meta name="description" content="agile mobile-first productivity web-app for modern day usage">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body>
  </body>
</html>
`

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
        colors: true,
        children: false,
        maxModules: 1,
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g)$/i,
                loader: 'file-loader',
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Sally',
            templateContent
        }),
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
        new MiniCssExtractPlugin({filename: "[name].css"}),
    ]
}