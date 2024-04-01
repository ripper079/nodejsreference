//console.log('First line in modulescopycat.js');
//Import from other files is achieved with the require statement
//This case import from people.js

//name and path to file. The require statement with read the whole files
const realPeople = require('./people');
//Possible to import with destructure. Must have the same property name like in the exported module.
const { airplanes, activeServiceYear }  =  require('./airplane');          // CommonJS syntax (Node.js versions prior to 12.0.0
//or
//import { airplanes, activeServiceYear } from './airplane';                    // For ES module syntax (Node.js versions 12.0.0 and later, when using .mjs file extension or "type": "module" in package.json):

console.log(airplanes);
console.log(activeServiceYear);