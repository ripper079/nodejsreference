//A Core module that handles file handling
//console.log("First line in " + __filename);
//console.log("First line in file.js");

//Some of these functions have synchronious counterpart. Usually they are postfixed with Sync (mmkdir -> mkdirSync). Then you do NOT have to pass a callback

const { kMaxLength } = require('buffer');
const fs = require('fs');       //Core module

// Reading file (asynchronious method). When done the callback function is invoked
/*
fs.readFile('./mockeddata.txt', (err, data) => {
    if (err){
        console.error(err);
    }
    //console.log(data);                //The data returns a Buffer
    //console.log(data.toString());      //Now the content is readable but a better way is to pass the encoding insteed
});
*/

fs.readFile('./mockeddata.txt', 'utf-8',(err, data) => {
    if (err){
        console.error(err);
    }
    console.log(data);                //The data the actual data   
});


//Writing or create(pass empty content) a file (asynchronious method). When done the callback function is invoked
//If file do NOT exists it creates on and writes the content
//If file exists it overwrites the entire file
/*
const contentToWrite = "Tralalalal";
fs.writeFile('./foo.txt', contentToWrite, () => {
    console.log("Data was written to file");
});
*/

//Deleting files
/*
if (fs.existsSync('./foo.txt')){
    fs.unlink('./foo.txt', (err) => {
        if (err){
            console.error(err);
        }
        console.log("file deleted");
    });
}
else{
    console.log("Can NOT delete a file that do NOT exists");
}
*/





//Directories. When done the callback function is invoked
//If directory exist, through an error
//If not directory exist, create the directory
/*
fs.mkdir('./games', (err) => {
    if (err){
        console.error(err);
    }
    console.log("Folder/Directory created");
});
*/

//A better solution is to se if the directory already exists
/*
if (! fs.existsSync('./games')){
    fs.mkdir('./games', (err) => {
        if (err){
            console.error(err);
        }
        console.log("Folder/Directory created");
    });
}
else {
    console.log("The folder/directory already exists");
}
*/

//Deleting folders
/*
if (fs.existsSync('./games')){
    fs.rmdir('./games', (err) => {
        if (err){
            console.error(err);
        }
        console.log("Folder/Directory removed");
    });
}
*/





