const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, "Files");

for(i=0; i<5; i++) {
    // fs.writeFileSync(dirPath + "/hello" +i+ ".txt", "This is simple file");
    fs.writeFileSync(`${dirPath}/hello ${i} .txt`, "This is simple file with tilt sign");
}