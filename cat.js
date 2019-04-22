// print the entire file that we choose to the terminal

const fs = require('fs');

module.exports = function(fileName) {
    process.stdout.write(process.cwd());
    process.stdout.write('\nprompt >');

}