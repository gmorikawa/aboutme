const { MongoClient } = require('mongodb');

// connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// database name
const dbName = 'aboutme';

async function open(nameCollection) {
    // use connect method to connect ot the server
    await client.connect();
    console.log('database.js: Connected successfully to mongodb');
    const db = client.db(dbName);
    const collection = db.collection(nameCollection);

    return collection;
}

function close() {
    client.close();
    console.log('database.js: Closed connection to mongodb');
}

module.exports = { 
    open, close
};