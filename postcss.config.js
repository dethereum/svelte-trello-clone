
const PurgeSvelte = require("purgecss-from-svelte");

const whitelist = [
  // CORE
  'body',
  'a',
  // BOOTSTRAP DEFINED
  'navbar-brand',
  'navbar',
  'bg-primary',
  'navbar-dark',
  'mb-2',
]

const options = {
  content: [
    "**/*.svelte",
  ],
  extractors: [
    {
      extractor: content => PurgeSvelte.extract(content),
      extensions: ["svelte"]
    }
  ],
  whitelist,
  whitelistPatterns: process.env.NODE_ENV == 'production' ? [/svelte/] : [],
};

/* PostCSS */
module.exports = {
  plugins: [require("@fullhuman/postcss-purgecss")(options)]
}