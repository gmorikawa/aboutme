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
    const collection = await database.open(collectionName);
    collection.insertOne(data).then(() => database.close());
}

function update(data) {

}

async function remove(username) {
    const collection = await database.open(collectionName);
    await collection.deleteOne({ username: username });
}

module.exports = {
    get,
    getByUsername,
    insert,
    update,
    remove
};