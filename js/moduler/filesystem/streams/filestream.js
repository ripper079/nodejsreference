const fs = require('fs');
const os = require('os');  

const writeStream = fs.createWriteStream('./copyofcoutrycity.txt');

//Stream a very efficient when working with big files, big chunkData
const readStream = fs.createReadStream('./countrycity.txt');

//on is an event handler
//this is a data event, (when it recieves a buffer of data the callback function is invoked)
/*
readStream.on('data', (chunkData) => {
    console.log('--- NEW CHUNK ---');
    //console.log(chunkData);         //Displayed as a buffer
    console.log(chunkData.toString());         //Displayed as human readable format
});
*/


//As with readfile you could pass the UTF-8 encoding

const readStreamUTF = fs.createReadStream('./countrycity.txt', {encoding: 'utf-8'});
//on is an event handler
//this is a data event, (when it recieves a buffer of data the callback function is invoked)
readStreamUTF.on('data', (chunkData) => {
    console.log('--- NEW CHUNK ---');
    console.log(chunkData);         //Displayed in utf-8 format   
    
    writeStream.write(os.EOL + "NEW CHUNK OF DATA" + os.EOL);
    writeStream.write(chunkData);
});


//Does the same as all the code above
//piping
//readStreamUTF.pipe(writeStream);