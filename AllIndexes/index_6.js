// CRUD operations with File System

const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, "crud");
const filePath = `${dirPath}/apple.txt`;

// creating a file inside a folder and adding content to the file.
fs.writeFileSync(filePath, "This is a simple file");

// Reading the content of the file
// 'utf8' is mandatory
fs.readFile(filePath, 'utf8', (err, item) => {
    console.log(item);
})

// updating the file
fs.appendFile(filePath, ' and file name is apple.txt', (err) => {
    if(!err){
        console.log("file updated");
    }
})

// renaming the filename
fs.rename(filePath, `${dirPath}/fruit.txt`, (err) => {
    if(!err){
        console.log("file name updated");
    }
})


//deleting a file
fs.unlinkSync(`${dirPath}/fruit.txt`, (err) => {
    if(!err){
        console.log("file deleted");
    }
})