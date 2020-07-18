
const PurgeSvelte = require("purgecss-from-svelte");

const whitelist = [
  // CORE
  'body',
  'a',
  // LAYOUT
  'container-fluid',
  'row',
  'col-10',
  'col-12',
  'col-sm-8',
  'col-md-4',
  'col-lg-3',
  'col-xl-2',
  // FLEX
  'd-flex',
  'align-items-center',
  'justify-content-between',
  'justify-content-center',
  'justify-content-md-start',
  // SPACING
  'mb-2',
  'mt-3',
  'vh-100',
  'my-3',
  // NAV
  'navbar',
  'navbar-brand',
  'navbar-dark',
  // CARD
  'card',
  'card-header',
  'card-body',
  // MODAL
  'modal',
  'show',
  'modal-dialog',
  'modal-dialog-centered',
  'modal-dialog-scrollable',
  'modal-backdrop',
  'modal-content',
  'modal-header',
  'modal-title',
  'modal-body',
  // GLOBAL
  'bg-primary',
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