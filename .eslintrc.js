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
                "tools/*.js",
            ],
            "globals": {
                __dirname: true,
            },
            "extends": [
                "plugin:node/recommended-module"
            ],
            "plugins": ["simple-import-sort", 'import'],
            "env": {
                browser: false,
            },
            "rules": {
                "simple-import-sort/sort": 2,
                "sort-imports": 0,
                "import/first": 2,
                "import/newline-after-import": 2,
                "import/no-duplicates": 2
            }
        },
        {
            "files": [
                ".eslintrc.js",
                ".prettierrc.js",
                "pnpmfile.js",
                "postcss.config.js",
                "jest.config.js",
                "svelte.config.js",
                "whitelist.js"
            ],
            "extends": [
                "plugin:node/recommended-script"
            ],
            "env": {
                browser: false,
            },
        },
        {
            "files": ['*.svelte'],
            "processor": 'svelte3/svelte3',
            "rules": {
                'import/no-duplicates': 0,
            }
        },
        {
            files: [
                'src/**/*.test.js'
            ],
            "env": {
                "jest": true
            }
        }
    ]
};
