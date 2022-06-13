const database = require('../services/database');
const collectionName = 'user';

async function get() {
    const collection = await database.open(collectionName);
    const queryResult = await collection.find().toArray();
    database.close();

    return queryResult;
}

async function getByUsername(username) {
    const collection = await database.open(collectionName);
    const queryResult = await collection.find({ username: username }).toArray();
    database.close();

    return queryResult[0];
}

async function insert(data) {
    // a cryptography must be applied to password before inserting into table
    const collection = await database.open(collectionName);
    collection.insertOne(data).then(() => database.close());
}

async function update(username, data) {
    const collection = await database.open(collectionName);
    collection.updateOne({ username: username }, { $set: data }).then(() => database.close());
}

async function remove(username) {
    const collection = await database.open(collectionName);
    collection.deleteOne({ username: username }).then(() => database.close());
}

module.exports = {
    get,
    getByUsername,
    insert,
    update,
    remove
};