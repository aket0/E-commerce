const { MongoClient, ObjectId } = require("mongodb");


async function productData(id) {
    const client = new MongoClient(process.env.URI);
    try {
        await client.connect();
        const dataProduct = await client.db('myLittleJungle').collection('dwwm').findOne({ _id: new ObjectId(id) });
        if (dataProduct){
            console.log("data product find !");
            return dataProduct;
        }else{
            console.log("no product find")
            return null;
        }
    }catch(err){
        console.log("error", err)
    }finally{
        client.close();
    }
}
module.exports = {productData};