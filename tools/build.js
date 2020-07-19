import webpack from 'webpack';

import config from '../webpack.config.prod.js';

const compiler = webpack(config);

const { stdout } = process

compiler.run((err, stats) => {
    if (err) {
        console.error(err.stack || err);
        if (err.details) console.error(err.details);
        process.exitCode = 1;
        return;
    }

    if (stats.compilation && stats.compilation.errors.length !== 0) {
        const errors = stats.compilation.errors;
        if (errors[0].name === "EntryModuleNotFoundError") {
            console.error("\n\u001b[1m\u001b[31mInsufficient number of arguments or no entry found.");
        }
    }

    const statsString = stats.toString();

    if (statsString) stdout.write(`${statsString}\n${""}`);


    if (stats.hasErrors()) {
        process.exitCode = 2;
    }
});