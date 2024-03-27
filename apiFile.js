const express = require('express');
const dbConnect = require('./mongodb');
const mongodb = require('./mongodb');
const app = express();

// whenever getting data from postman(POST) we need to use below syntax.
app.use(express.json());

// to fetch or get data from mongodb
app.get('/', async (req, res)=> {
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
    res.send(data);
})

//to post new data to the mongo db
app.post('/', async (req, res) => {
    console.log(req.body);
    let data = await dbConnect();
    let result = await data.insertOne(req.body)
    res.send(result);
})

//to update existing data in the mongo db by using postman body
app.put('/', async (req, res) => {
    let data = await dbConnect();
    let result = await data.updateOne(
        // {name: 'S 20 FE'}, // static
        {name: req.body.name}, // dynamic
        {$set: req.body}
    )
    console.log(req.body);
    res.send(result);
})

//to update existing data in the mongo db by using query params
//using this we can change name as well
app.put('/:name', async (req, res) => {
    let data = await dbConnect();
    let result = await data.updateOne(
        // {name: 'S 20 FE'}, // static
        {name: req.params.name}, // dynamic // better to use ID
        {$set: req.body}
    )
    console.log(req.body);
    // res.send(result);
})

app.delete('/:id', async (req, res)=> {
    let myquery = { name: 'S 21 FE' };
    const data = await dbConnect();
    const result = await data.deleteOne(myquery, function(err, obj) {
        if (err) throw err;
        console.log("1 document deleted");
        // db.close();
      });
    // const result = await data.deleteMany({_id: new mongodb.ObjectId(req.params.id)}); // in tutorial not working
    res.send(result);

})

app.listen(5000);