const { MongoClient } = require("mongodb");
const bcrypt = require('bcryptjs')
const uri = "mongodb+srv://moynehubert:connectme@cluster0.klitm5o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function checkUserExists(email, password) {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const user = await client.db('myLittleJungle').collection('user').findOne({ email: email});
        if (user) {
            
            let compare = await bcrypt.compare(password, user.password)
            if(compare){
              
                return true
            }else{
                
                return null
            }
        } else {
            
            return null;
        }
    } catch (err) {
        return null;
    } finally {
        client.close();
    }
}

module.exports = { checkUserExists };
