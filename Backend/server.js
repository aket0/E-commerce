const http = require('http');
const database = require('./database');
const { checkUserExists } = require('./user');
const { createNewUser } = require('./newUser');
const {productData} = require('./product')
const url = require('url');
 
http.createServer(async (req, res) => {
   
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
    res.setHeader('Access-Control-Max-Age', 2592000); 

    if (req.method === 'OPTIONS') {
        res.writeHead(200, {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
            'Access-Control-Allow-Headers': 'Content-Type',

            'Access-Control-Max-Age': 2592000
        });
        res.end();
        return;
    }
    if (req.url.startsWith('/api/product/') && req.method === 'GET') {
        try {
            // Extraire l'ID du produit de l'URL
            const productId = req.url.split('/').pop();
    
            res.writeHead(200, { 'Content-Type': 'application/json' });
            const dataProduct = await productData(productId);
            res.write(JSON.stringify(dataProduct));
        } catch (error) {
            console.error('Error processing request:', error);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.write('Internal Server Error');
        } finally {
            res.end();
        }
    }
   else if (req.url === '/api/itemList') {
        try {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            const dataset = await database.itemList();
            res.write(dataset); 
        } finally {
            res.end(); 
        }
        
    } else if (req.url === '/api/user' && req.method === 'POST') {
        
        let data = '';
        req.on('data', chunk => {
            data += chunk.toString();
        });

        req.on('end', async () => {
            try {
                res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); 
                res.setHeader('Access-Control-Expose-Headers', 'Content-Length, Content-Type'); 
                
                const { email, password } = JSON.parse(data);
                
                const userExists = await checkUserExists(email, password);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.write(JSON.stringify({ userExists }));
            } catch (error) {
                console.error('Erreur lors de la vérification de l\'utilisateur:', error);
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.write('Erreur serveur lors de la vérification de l\'utilisateur');
            } finally {
                res.end();
            }
        });
    } else if (req.url === '/api/newUser' && req.method === 'POST') {
        
        let data = '';
        req.on('data', chunk => {
            data += chunk.toString();
        });

        req.on('end', async () => {
            try {
                res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); 
                res.setHeader('Access-Control-Expose-Headers', 'Content-Length, Content-Type'); 
                
                const { name, familyName, address, codePostal, city, superUser, email, password } = JSON.parse(data);
                
                const emailNotTaken = await createNewUser(name, familyName, address, codePostal, city, superUser, email, password);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.write(JSON.stringify({ emailNotTaken }));
            } catch (error) {
                console.error('Erreur lors de la vérification de l\'utilisateur:', error);
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.write('Erreur serveur lors de la vérification de l\'utilisateur');
            } finally {
                res.end();
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write('Not Found');
        res.end();
    }
}).listen(4000);
