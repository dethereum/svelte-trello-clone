const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const { scss } = require('svelte-preprocess');
const webpack = require('webpack');
const { merge } = require('webpack-merge');

const common = require('./webpack.config.common.js');

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
                            prependData: `@import "/home/haiturtle/Public/svelte-trello-clone/node_modules/bootstrap/scss/_functions.scss";\n@import "/home/haiturtle/Public/svelte-trello-clone/node_modules/bootstrap/scss/_variables.scss";\n@import "/home/haiturtle/Public/svelte-trello-clone/node_modules/bootstrap/scss/_mixins.scss";\n`,
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