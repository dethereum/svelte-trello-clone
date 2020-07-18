
const PurgeSvelte = require("purgecss-from-svelte");

const whitelist = [
  // CORE
  'body',
  'a',
  'h6',
  // LAYOUT
  'container-fluid',
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
  // SPACING
  'mb-2',
  'mt-3',
  'ml-md-4',
  'ml-xl-5',
  'vh-100',
  'my-3',
  // NAV
  'navbar',
  'navbar-brand',
  'navbar-dark',
  // BTN,
  'btn-group',
  'btn-light',
  // CARD
  'card',
  'card-header',
  'card-body',
  // DROPMENU
  'dropright',
  'dropdown-menu',
  'dropdown-header',
  'dropdown-item',
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