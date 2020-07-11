const path = require('path')

/** @type {import('webpack').Configuration} */
module.exports = {
    entry: './src/index.js',
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
                exclude: /node_modules/,
                use: {
                    loader: 'svelte-loader',
                  },
            }
        ]
    }
}