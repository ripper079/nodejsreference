//There is actually no core module for writeline like readline so we neet to create it programatically
//console.log("First line in " + __filename);
//console.log("First line in filewritline.js");

const fs = require('fs');
const os = require('os');       //EOL is important to maintain cross platform compatibility

const filePath = './visaord.txt'; // Specify the path to the file

const lineOne = 'Pelle svanslös är en katt';        // The line of text to append
const lineTwo = 'Ingen rök utan eld';               // The line of text to append
const lineThree = 'Bilar är roliga ting';           // The line of text to append
const lineFour = 'Solen ger värme på jorden';
const lineFive = 'Vinter är kall i Norden';

//A function is a better solution for appending lines to file
function appendLine(lineTextToAppend){
    fs.appendFile(filePath, lineTextToAppend + os.EOL, 'utf-8', (err) => {
        if (err) {
            console.error('Error appending to file:', err);
            return;
        }
        console.log('Line appended to file successfully.');
    });    
}



// Append the line to the file
fs.appendFile(filePath, lineOne + os.EOL, 'utf-8', (err) => {
    if (err) {
        console.error('Error appending to file:', err);
        return;
    }
    console.log('Line appended to file successfully.');
});
// Append the line to the file
fs.appendFile(filePath, lineTwo + os.EOL, 'utf-8', (err) => {
    if (err) {
        console.error('Error appending to file:', err);
        return;
    }
    console.log('Line appended to file successfully.');
});
// Append the line to the file
fs.appendFile(filePath, lineThree + os.EOL, 'utf-8', (err) => {
    if (err) {
        console.error('Error appending to file:', err);
        return;
    }
    console.log('Line appended to file successfully.');
});

//Use the function instead
appendLine(lineFour);
appendLine(lineFive);

