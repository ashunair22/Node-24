// Creating html pages
const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public');

// app.use(express.static(publicPath));

app.get('', (_, res) => {
    res.sendFile(`${publicPath}/index.html`);
})

app.get('/about', (_, res) => {
    res.sendFile(`${publicPath}/about.html`);
})

// Template engine
app.set('view engine', 'ejs'); // this tells node js that we are using EJS
                            // first param will always be 'view engine'
                            // second param show which package
// Folder name will always be 'views'
// extension file will always be .ejs

app.get('/profile', (_, res) => {
    const user = {
        name: 'Ashok',
        email: 'ashok@test.com',
        city: 'jabalpur',
        skills: ['angular', 'html', 'javascript']
    }
    res.render('profile', {user});
})

app.get('/login', (_, res) => {
    res.render('login');
})

app.get('*', (_, res) => {
    res.sendFile(`${publicPath}/notfound.html`);
})

app.listen(5000);