var assert = require('assert');

exports.insertDocument = (db, document, collection, callback)=>{

    //  creating db instance collection
   const coll= db.collection(collection);
   coll.insert(document, (err, result)=>{

    assert.equal(err, null);
    // document inserted has a result property .n tells how many documents have to be inserted
    console.log('inserted'+ result.result.n+  " documents into the collection "+ collection);
    callback(result);


   });
};

exports.findDocuments = (db,  collection, callback)=>{

    const coll= db.collection(collection);
    coll.find({}).toArray((err, docs )=>{
        assert.equal(err, null);
        callback(docs);
    })
    
};

exports.removeDocuments = (db, document, collection, callback)=>{
    
    const coll = db.collection(collection);

    coll.delete(document, (err, result)=>{
        assert.equal(err, null);
        console.log('DELETED', document);
    });
};

exports.updateDocuments = (db, document, update, collection, callback)=>{
    const coll =  db.collection(collection);
    coll.updateOne(document, {$set: update}, null, (err, result)=>{
        assert.equal(err, null);
        console.log("Updated with ", update);
        

    })
    
};
