// Creating basic server
const http = require('http');

// createServer function tales function as a parameter with two paramenters req and res
// this uses arrow function
http.createServer((req, res) => {
    res.write("<h1>Hello this is Ashok with arrow function</h1>");
    res.end();
}).listen(4422);

// normal function instead of arrow function

function dataControl(req, res) {
    res.write("<h1>Hello this is Ashok with normal function</h1>");
    res.end();
}

http.createServer(dataControl).listen(4411);

// convert normal function into arrow function
const dataControl = (req, res) => {
    res.write("<h1>Hello this is Ashok with normal function</h1>");
    res.end();
}