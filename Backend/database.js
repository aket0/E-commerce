
const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://moynehubert:connectme@cluster0.klitm5o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);
client.connect();

async function itemList() {
    try {
        const dataset = await client.db('myLittleJungle').collection('dwwm').find().toArray();
        console.log("item collection return a successfull connexion")
        return JSON.stringify(dataset);
        
    }
    catch {
        console.log("MangoDB closed");
        await client.close();
    }
}
module.exports = {itemList};
