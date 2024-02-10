const fs = require('fs');

// Create a Readable stream to read data from input.txt
const readableStream = fs.createReadStream('input.txt', { encoding: 'utf8' });

// Create a Writable stream to write data to output.txt
const writableStream = fs.createWriteStream('output.txt');

// Event handler for the 'data' event in the Readable stream
readableStream.on('data', (chunk) => {
  console.log('Read chunk:', chunk);
  
  // Write the chunk to the Writable stream
  writableStream.write(chunk);
});

// Event handler for the 'end' event in the Readable stream
readableStream.on('end', () => {
  console.log('End of stream');
  
  // Close the Writable stream
  writableStream.end();
});

// Event handler for the 'finish' event in the Writable stream
writableStream.on('finish', () => {
  console.log('Write operation finished');
});

// Event handler for errors in both streams
readableStream.on('error', (error) => {
  console.error('Readable stream error:', error.message);
});

writableStream.on('error', (error) => {
  console.error('Writable stream error:', error.message);
});
