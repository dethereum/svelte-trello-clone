const fs = require('fs');
const https = require('https');
const path = require('path');

const express = require('express');
const webpack = require('webpack');

const config = require('../webpack.config.prod.js');

const { stats } = config

const OPTIONS = {
    key: fs.readFileSync(path.resolve(__dirname, '../privateKey.key')),
    cert: fs.readFileSync(path.resolve(__dirname, '../certificate.crt')),
};

module.exports = () => {
    const app = express();
    
    app.use(require('webpack-dev-middleware')(webpack(config), { stats }))
    app.use(express.static('dist'));

    return https.createServer(OPTIONS, app);
}