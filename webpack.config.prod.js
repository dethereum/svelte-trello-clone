const path = require('path')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');

/** @type {import('webpack').Configuration} */
module.exports = {
    entry: './src/index.js',
    mode: 'production',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: './',
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
                    loader: 'svelte-loader',
                    options: {
                        dev: false,
                        emitCss: false,
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
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
              { from: 'src/index.html'},
            ],
        }),
    ]
}