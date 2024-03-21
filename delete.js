const dbConnect = require("./mongodb");

const deleteData = async ()=> {
    let data = await dbConnect();
    let result = await data.deleteMany(
        {name: 'note 5'}
    );
    console.warn(result);
    if(result.acknowledged === true) {
        console.log("record deleted");
    }
}

deleteData();