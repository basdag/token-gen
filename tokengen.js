#! /usr/bin/env node

var jwt = require('jsonwebtoken');
var fs = require('fs');
var filename = process.argv.slice(2);

function getFilename() {
    console.log(filename, 'Success');
    // return console.log('Please enter the file name of the private key you wish to use to generate the token.\n(This file should be stored in the `keys` folder in this repo.)\nEx: BEST_EVER_CLIENT_private_key.pem');
}
// var privateKey = fs.readFileSync('./private_key_stride.pem', 'utf-8');
// var token = jwt.sign({}, privateKey, { algorithm: 'RS256' });
//
// fs.writeFile(`tokens/${name}`, "Hey there!", function(err) {
//     if(err) {
//         return console.log(err);
//     }
//
//     console.log("The file was saved!");
// });
getFilename();
