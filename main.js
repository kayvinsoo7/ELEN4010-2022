// console.log('Loading a module')
// const mod = require('./mod')
// console.log('Mod:', mod)
// console.log('Done')

let fs = require("fs");
var dolor = require('dolor');


fs.appendFile("./ELEN4010.txt", dolor.sentence(3), function (err) {
    if (err) throw err;
    console.log('Updated!');
  });

fs.readFile("./ELEN4010.txt", "utf8", (err, data) => {
// utf8 is the encoding of the file
if (err) throw err; //callbacks usually get errors in this format
//err will either contain the error or null
console.log(data); //if there weren't errors, send the data to the console
})