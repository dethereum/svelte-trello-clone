const { scss } = require('svelte-preprocess');

module.exports = {
    preprocess: scss({
        prependData: `@import "/home/haiturtle/Public/svelte-trello-clone/node_modules/bootstrap/scss/_functions.scss";\n@import "/home/haiturtle/Public/svelte-trello-clone/node_modules/bootstrap/scss/_variables.scss";\n@import "/home/haiturtle/Public/svelte-trello-clone/node_modules/bootstrap/scss/_mixins.scss";\n`,
    })
};