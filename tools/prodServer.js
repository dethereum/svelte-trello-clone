const fs = require('fs');
const spdy = require('spdy')
const path = require('path');

const express = require('express');

const OPTIONS = {
    key: fs.readFileSync(path.resolve(__dirname, '../privateKey.key')),
    cert: fs.readFileSync(path.resolve(__dirname, '../certificate.crt')),
};

module.exports = () => {
    const app = express();
    
    app.use(express.static('dist'));

    // use outdated spdy server because express still does not work with native http2 module
    // https://github.com/expressjs/express/issues/2761
    return spdy.createServer(OPTIONS, app);
}