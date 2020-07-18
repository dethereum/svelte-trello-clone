// svelte.config.js
const { scss } = require('svelte-preprocess');

const BOOTSTRAP_IMPORTS = ['functions', 'variables', 'mixins'].reduce((data, file) => data + `@import "node_modules/bootstrap/scss/_${file}.scss";\n`, '');
const prependData = '@import "src/scss/variables.scss";\n' + BOOTSTRAP_IMPORTS;

module.exports = {
    preprocess: scss({
        prependData,
    })
};