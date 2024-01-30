// Rendering Html and Json - video 20
const express = require('express');
const app = express();

app.get('', (req, res) =>{
    // res.send("<h1>Welcome to Home page</h1>");

    //Links
    res.send(`
        <h1>Welcome to Home page</h1><a href="/about">Go to About Page</a>
    `);
})

// Another way with backtick
app.get('/about', (req, res) =>{
    res.send(`
        <input type="text" placeholder="User Name" value="${req.query.name}"/>
        <button>Click Me</button>
    `);
})

// Rendering Json data
app.get('/help', (req, res) =>{
    //for one data use object
    // res.send({
    //     name: "Ashok",
    //     email: "ashok@test.com"
    // });

    // for many data use Array
    res.send([
        {name: "Ashok", email: "ashok@test.com"},
        {name: "Nitisha", email: "nitisha@test.com"},
        {name: "Ashish", email: "ashish@test.com"}
    ])
})

app.listen(5000);