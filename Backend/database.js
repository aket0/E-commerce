
const { MongoClient } = require("mongodb");
const dotenv = require('dotenv') ;
dotenv.config();


const client = new MongoClient(process.env.URI);
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
