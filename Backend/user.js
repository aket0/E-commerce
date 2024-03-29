const { MongoClient } = require("mongodb");
const dotenv = require('dotenv') ;
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
dotenv.config();

async function checkUserExists(email, password) {
    const client = new MongoClient(process.env.URI);
    try {
        await client.connect();
        const userExists = await client.db('myLittleJungle').collection('user').findOne({ email: email });
        if (userExists) {
            
            let compare = await bcrypt.compare(password, userExists.password)
            if(compare){
                const payload = {
                    userId: userExists._id,
                    name: userExists.name,
                    familyName: userExists.familyName,
                    adress: userExists.adress,
                    city: userExists.city,
                    codePostal: userExists.codePostal,
                    superUser: userExists.superUser

                    
                };
                console.log(payload)
                const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
                console.log(token)
                return { success: true, token: token };
                
            }else{
                
                return { success: false, token: null };
            }
        } else {
            
            return { success: false, token: null };
        }
    } catch (err) {
        return { success: false, token: null };
    } finally {
        client.close();
    }
}
async function handleLogin(req, res) {
    const { email, password } = req.body;

    try {
        const { exists, token } = await checkUserExists(email, password);
        if (exists) {
            res.status(200).json({ exists, token });
        } else {
            res.status(401).json({ exists });
        }
    } catch (error) {
        console.error('Error handling login:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

  

module.exports = { checkUserExists, handleLogin };
