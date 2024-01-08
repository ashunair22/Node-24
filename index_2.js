// const app = require('./app');
// console.log(app);
// console.log(app.x);

// const arr = [2, 4, 6, 8, 1, 3 , 3];
// arr.filter((item) => {
//     console.log(item);
// })

// let result = arr.filter((item) => {
//     return item === 3;
// })

// console.log(result);


// fs is a non-global module which is required to be imported.
const fs = require('fs');
const fs = require('fs').writeFileSync; // to import only 'Write File Sync' method;
// fs("abc.txt", "Importing direct write file sync function");
fs.writeFileSync("Hello.txt", "learning node");

// console.log is a global module which is not required to be imported.

console.log(" check curent directory", __dirname);

console.log(" check file name", __filename);
