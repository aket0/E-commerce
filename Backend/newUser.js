const { MongoClient } = require("mongodb");
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs')
dotenv.config();

async function createNewUser(name, familyName, address, codePostal, city, superUser, email, password) {
    const client = new MongoClient(process.env.URI);
    try {
        await client.connect();
        const userExists = await client.db('myLittleJungle').collection('user').findOne({ email: email });

        if (userExists) {
            console.log("User already exists, cannot create new user");
            return null;
        } else {
            const salt = await bcrypt.genSalt(10);
            const hashedpassword = await bcrypt.hash(password, salt)
            await client.db('myLittleJungle').collection('user').insertOne({
                name: name,
                familyName: familyName,
                address: address,
                codePostal: codePostal,
                city: city,
                superUser: superUser,
                email: email,
                password: hashedpassword,
            });
            
            
            console.log("New user created:", email);
            return {  name, familyName, address, codePostal, city, superUser, email, password }; // Retourne les informations de l'utilisateur créé
        }
    } catch (error) {
        console.error("Error creating new user:", error);
        return null;
    } finally {
        await client.close();
    }
}

module.exports = { createNewUser };
