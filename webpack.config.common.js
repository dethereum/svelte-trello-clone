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

const BOOTSTRAP_IMPORTS = ['functions', 'variables', 'mixins'].reduce((data, file) => data + `@import "node_modules/bootstrap/scss/_${file}.scss";\n`, '');

/**
 * @param {*} content - scss/css file contents
 * @param {*} loaderContext - an object contain information about the env
 * 
 * @summary special function for allowing sass imports to work in production context when you can no longer preprocess. 
 */
const additionalData = (content, { resourcePath, rootContext }) => {
    const relativePath = path.relative(rootContext, resourcePath);

    // If style file was emitted from svelte compiler add the imports
    if (relativePath.includes(".svelte.css")) {
      return '@import "src/scss/variables.scss";\n' + BOOTSTRAP_IMPORTS + content
    }
  };

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
                            additionalData
                        },
                    },
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