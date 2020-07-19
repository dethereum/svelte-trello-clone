const express = require('express');
const { readFileSync } = require('fs');
const { resolve } = require('path');
const { createServer } = require('spdy');

const OPTIONS = {
    key: readFileSync(resolve(__dirname, '../privateKey.key')),
    cert: readFileSync(resolve(__dirname, '../certificate.crt')),
};

module.exports = () => {
    const app = express().use(express.static('dist'));

    // use outdated spdy server because express still does not work with native http2 module
    // https://github.com/expressjs/express/issues/2761
    return createServer(OPTIONS, app);
}