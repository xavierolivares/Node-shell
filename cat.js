// print the entire file that we choose to the terminal

const fs = require('fs');

module.exports = function(fileName) {
    console.log(fileName)
    fs.readFile(fileName, 'utf8', (err,data) => {
        if (err) {
            throw err;
          } else {
            process.stdout.write(data)
          }
    })
}