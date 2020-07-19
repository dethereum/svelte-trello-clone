const { resolve } = require('path');
const { scss } = require('svelte-preprocess');

const { files } = require('./whitelist.js');

const prependData = files.reduce((data, file) => {
    const filePath = resolve(__dirname, `node_modules/bootstrap/scss/${file}.scss`);

    return data + `@import "${filePath}";`
}, '');

module.exports = {
    preprocess: scss({
        prependData,
    }),
};