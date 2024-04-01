//Global object
//Global object is an object that provides access to global variables and functions across all modules in a Node.js application. It has functions and properties attached to it (similar to window object in web browser). Its named
// global
//console.log(global);            //Dump everything

//method to the object global (explicitly)
/*global.setInterval(() => {
    console.log("This executes every 2 seconds");
}, 2000);
*/

//The implicit version, don't need to reference the global function
/*
global.setInterval(() => {
    console.log("This executes every 5 seconds");
}, 5000);
*/

//Get the absolute path of this file
console.log(__filename);
//Get the absolute folder path of this file location
console.log(__dirname);

//https://nodejs.org/api/globals.html#global-objects