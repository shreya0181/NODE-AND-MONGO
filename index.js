const MongoCLient = require('mongodb').MongoClient;
const assert = require('assert');
const URL = "mongodb://localhost:27017/";

const dbname = 'conFusion';



    // ************************************************************************//
// connecting with the database
MongoCLient.connect(URL, (err, client)=>{

    // assert returns true/ false 
    assert.equal(err, null);
    console.log("connected to the Server");

    const db= client.db(dbname);

    const collection = db.collection('dishes');


// callback 2

    collection.insertOne({"name": "Cake", "description": "sweet and Sugary"}, (err, result)=>{

        assert.equal(err, null);

        console.log("After Insert \n");
        // prints number of operations carried out
        console.log(result.ops);


// callback 3
        // if empty db pass a string else converted to JSON using toarray
        collection.find({}).toArray((err, docs)=>{
               
            assert.equal(err, null);
            console.log("Found: \n");
            console.log(docs);

            collection.drop('dishes', (err, result)=>{
                assert.equal(err, null);
                client.close();
            });
        })

    });

});