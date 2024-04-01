//console.log('First line in modules.js');
//Import from other files is achieved with the require statement
//This case import from people.js

//name and path to file. The require statement with read the whole files
const xyz = require('./people');
const singleName = require('./person');

//console.log(xyz);
console.log(singleName);