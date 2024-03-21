// updating single or mulitple data in mongo
const dbConnect = require('./mongodb');

const updateData = async ()=> {
    let data = await dbConnect();
    let result = await data.updateMany(
        {name: 'note 7'}, {
            $set: {name: 'note updated 10'}
        }
    );
    console.warn(result);
}

updateData();