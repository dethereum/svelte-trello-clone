module.exports = {
    "env": {
        "browser": true,
        "es6": true,
    },
    "plugins": [
        'svelte3'
    ],
    "extends": [
        "eslint:recommended",
        "plugin:import/recommended"
    ],
    "overrides": [
        {
            "files": [
                "webpack.config.*.js",
                ".eslintrc.js",
                ".prettierrc.js",
                "tools/*.js"
            ],
            "extends": [
                "eslint:recommended",
                "plugin:node/recommended-script"
            ],
            "env": {
                node: true,
                browser: false,
            },
            "rules": {
                "node/no-unpublished-require": 0
            }
        },
        {
            "files": ['*.svelte'],
            "processor": 'svelte3/svelte3',
            "rules": {
                'import/no-duplicates': 0,
            }
        }
    ]
};
