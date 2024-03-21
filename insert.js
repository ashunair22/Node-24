// inserting single or mulitple data in mongo
const dbConnect = require('./mongodb');

const insert =async ()=> {
    const db=await dbConnect();
    const result = await db.insertMany(
        [
            {name:'note 6', brand:'vivo', price:330, category:'mobile'},
            {name:'note 7', brand:'vivo', price:430, category:'mobile'},
            {name:'note 8', brand:'vivo', price:530, category:'mobile'}
        ]
    );
    if(result.acknowledged === true) {
        console.log("data inserted");
    }
}

// insert();