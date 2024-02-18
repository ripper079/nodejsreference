const fs = require('fs');       //built in module

// Encode a string to Base64
const dataToEncode = 'Hello, World!';
const encodedData = Buffer.from(dataToEncode).toString('base64');
console.log('Encoded:');
console.log(encodedData);


// Decode Base64 back to the original string
const decodedData = Buffer.from(encodedData, 'base64').toString('utf-8');
console.log('Decoded:');
console.log(decodedData);



// And here is the solution for a file
// Read the content of the file
// Read the content of the image file
const imagePath = 'small_owl.jpg'; // Replace this with the path to your image file
fs.readFile(imagePath, (err, data) => {
  if (err) {
    console.error('Error reading image file:', err);
    return;
  }

  // Encode the image data to Base64
  const encodedImageData = Buffer.from(data).toString('base64');
  //console.log('Image Encoded:', encodedImageData);

  // Decode the Base64 image data back to the original binary data
  const decodedImageData = Buffer.from(encodedImageData, 'base64');
  //console.log('Image Decoded:', decodedImageData);

  // Save the decoded image data to a new file
  const decodedImagePath = 'copy_small_owl.jpg'; // Replace this with the path to the new image file
  fs.writeFile(decodedImagePath, decodedImageData, err => {
    if (err) {
      console.error('Error writing decoded image file:', err);
      return;
    }
    console.log('Decoded image data saved to', decodedImagePath);
  });
});