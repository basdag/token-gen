#! /usr/bin/env node

const jwt = require('jsonwebtoken');
const fs = require('fs');
let clientname = process.argv.slice(2);

function generateFilename() {
    if (!clientname.length) {
        return console.log('ERROR: To run this script, please provide a client name that matches a key in the keys folder.\nEx: npm run token COOL_CLIENT');
    } else {
        clientname = clientname[0].trim();
        let tokenFile = `./tokens/${clientname}_token.txt`;
        if (fs.existsSync(tokenFile)) {
            return console.log('ERROR: Token already exists.');
        }

        let keyFile = `./keys/${clientname}_private_key.pem`;
        if (!fs.existsSync(keyFile)) {
            return console.log("ERROR: Key file not found. Please provide a key in the keys folder.");
        }

        let privateKey = fs.readFileSync(keyFile, 'utf-8');
        let token = jwt.sign({}, privateKey, {
            algorithm: 'RS256'
        });
        fs.writeFile(tokenFile, token, function (err) {
            if (err) {
                return console.log('ERROR: Token generation failed.', err);
            }
            return console.log(`SUCCESS: ${clientname}_token.txt was saved.\n=^..^=   =^..^=   =^..^=    =^..^=    =^..^=    =^..^=    =^..^=`);
        });
    }
}

generateFilename();
