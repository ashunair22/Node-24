// Middleware in express Js(Application level)

// const express = require('express');
// const app = express();

// const reqFilter = (req, res, next) => {
//     if(!req.query.age){
//         res.send('Please provide age');
//     } else if(req.query.age < 18) {
//         res.send('You cannot access this page');
//     } else {
//         next();
//     }
// }

// app.use(reqFilter); // Used for application level middleware

// app.get('', (req, res) => {
//     res.send('Welcome to home page');
// })

// app.get('/users', (req, res) => {
//     res.send('Welcome to Users page');
// })




// // Route level middleware(placing middleware code in same file)
// const express = require('express');
// const app = express();

// const reqFilter = (req, res, next) => {
//     if(!req.query.age){
//         res.send('Please provide age');
//     } else if(req.query.age < 18) {
//         res.send('You cannot access this page');
//     } else {
//         next();
//     }
// }

// app.get('', (req, res) => {
//     res.send('Welcome to home page');
// })

// app.get('/users',reqFilter,  (req, res) => {
//     res.send('Welcome to Users page');
// })

// app.get('/contact',reqFilter,  (req, res) => {
//     res.send('Welcome to Contact page');
// })




// // Route level middleware(placing middleware code in seperate file)
// const express = require('express');
// const reqFilter = require('./middleware');
// const app = express();

// app.get('', (req, res) => {
//     res.send('Welcome to home page');
// })

// app.get('/users',reqFilter,  (req, res) => {
//     res.send('Welcome to Users page');
// })

// app.get('/contact',reqFilter,  (req, res) => {
//     res.send('Welcome to Contact page');
// })




// Route level middleware(placing middlewareon group of routes maybe 25 out of 200 routes)
const express = require('express');
const reqFilter = require('./middleware');
const app = express();
const route = express.Router();

route.use(reqFilter);

app.get('', (req, res) => {
    res.send('Welcome to home page');
})

route.get('/users', (req, res) => {
    res.send('Welcome to Users page');
})

app.get('/contact', (req, res) => {
    res.send('Welcome to Contact page');
})

app.use('/', route);


app.listen(5000);