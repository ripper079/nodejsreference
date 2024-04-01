//A Core module that file reading line by line
//console.log("First line in " + __filename);
//console.log("First line in filereadlin.js");

const readline = require('readline');       //Core module
const fs = require('fs');                   //Core modulte

// Specify the path to the file you want to read
const filePath = './mockeddata.txt'; // Change this to your file path
var lineCounter = 0;

// Create a readline interface
const rl = readline.createInterface({
    input: fs.createReadStream(filePath),
    crlfDelay: Infinity
});

// Event handler for each line
rl.on('line', (line) => {
    lineCounter++
    //console.log(`Line from file: ${line}`);     //The whole line in the file
    
    // Split the line based on tab, space, or pipe as delimiters
    //const parts = line.split(/\t| |\|/);
    const parts = line.split('\t');
    //Our file contains 6 columns where the first one are columns names
    const id = parts[0];                        //First columns
    const firstName = parts[1];
    const lastName = parts[2];
    const ipAdress = parts[parts.length-1];     //The last columnt

    console.log("The name is " + firstName + " " + lastName + " has id=" + id + " with the ipadress=" + ipAdress);
});

// Event handler for end of file
rl.on('close', () => {
    console.log('End of file reached.');
});
