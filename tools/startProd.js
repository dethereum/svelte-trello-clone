import open from 'open'

import makeServer from './prodServer.js';

/**
 * This function is to make lighthouse auditing simple on localhost
 */
(async () => {

    const app = makeServer();

    await app.listen(5000);
    console.log('Production app listening on https://localhost:5000!\n');
 
    // OPENS THE URL IN GOOGLE CHROME. HARD CODED FOR LINUX
    // https://github.com/sindresorhus/open#app
    await open('https://localhost:5000', {app: ['google-chrome', '--incognito']});
})();
