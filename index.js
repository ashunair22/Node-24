const dbConnect = require('./mongodb');

// one way to handle promise with .then()
// dbConnect().then((res) => {
//     res.find().toArray().then((data) => {
//         console.warn(data);
//     })
// })

// better way to handle promise by async await
const main = async ()=> {
    let data = await dbConnect();
    data = await data.find().toArray();
    console.warn(data);
}

main();

