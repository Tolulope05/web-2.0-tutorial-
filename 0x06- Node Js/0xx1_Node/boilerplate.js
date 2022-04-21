const fs = require('fs'); // To use the module

/**
 * Writing a script that creates files from server side
 * // console.log(fs)
*/

// fs.mkdir('\\Users\\fakun\\Documents\\Tolutech\\CodeTutorial\\web-2.0-tutorial-\\0x06- Node Js\\0xx1_Node\\Project', { recursive: true }, (err) => {
//     console.log('Hey Folder successfully created')
//     if (err) throw err;
// }); // Asynchronous Version that runs one at a time

// fs.mkdirSync('\\Users\\fakun\\Documents\\Tolutech\\CodeTutorial\\web-2.0-tutorial-\\0x06- Node Js\\0xx1_Node\\ProjectSync'); // Synchronous Version
// console.log('Hey Folder successfully created')

/**
 * Making folders that we call on the 3rd argument
 * ===============================================
*/

const folderName = process.argv[2] || 'Project';

fs.mkdirSync(`\\Users\\fakun\\Documents\\Tolutech\\CodeTutorial\\web-2.0-tutorial-\\0x06- Node Js\\0xx1_Node\\${folderName}`);
// node boilerplate.js Tolu - Make an empty file called Tolu
fs.writefileSync(`\\Users\\fakun\\Documents\\Tolutech\\CodeTutorial\\web-2.0-tutorial-\\0x06- Node Js\\0xx1_Node\\${folderName}/index.html`)

