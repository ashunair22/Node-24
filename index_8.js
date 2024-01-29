// Express JS and Route params
const express = require('express');
const app = express();

app.get('', (req, res) =>{
    console.log("Request from browser = >>>", req.query.name);
    res.send("Welcome to Home page");
})

app.get('/about', (req, res) =>{
    res.send("Welcome to About page");
})

app.get('/help', (req, res) =>{
    res.send("Welcome to Help page");
})

app.listen(5000);