const open = require('open')

const makeServer = require('./server.js');

(async () => {
    const app = makeServer();

    await app.listen(3000);
    console.log('Example app listening on localhost:3000!\n');
 
    // Opens the URL in the default browser.
    await open('http://localhost:3000');
})();
