require('dotenv').config();

var HTMLEncoder = require('htmlencode');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

//Mongo Atlas Server URL Connection String
var url = process.env.MONGODB_CLOUD_URL;
console.log("URL:", url)
//url = HTMLEncoder.htmlEncode(url);
//console.log("URL Value: ", url);

var localMongo = process.env.MONGODB_LOCAL_URL;
console.log("Local Mongo URL: ", localMongo);

const dbName = "debug";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database connection successful!");

  const database = db.db(dbName);

  insertDocuments(database, function() {
    //client.close();
  });

  findDocuments(database, function () {});

  db.close();
});


const insertDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('exception');
  // Insert some documents
  collection.insertMany([
    {a : 1}, {a : 2}, {a : 3}
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}

const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('exception');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
}


function NoCallsMade() {


}

NoCallsMade();

