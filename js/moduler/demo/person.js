console.log('First line in person.js');

const myName = "Daniel";

//In order to make other file have access to the data defined here, you need to export the data with keyword export
//Otherwise is returns an empty object

module.exports = myName;