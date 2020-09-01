const MongoCLient = require('mongodb').MongoClient;
const assert = require('assert');
const URL = "mongodb://localhost:27017/";

const dbname = 'conFusion';
const oper = require('./operations');


    // ************************************************************************//
// connecting with the database
MongoCLient.connect(URL, (err, client)=>{

    // assert returns true/ false 
    assert.equal(err, null);
    console.log("connected to the Server");

    const db= client.db(dbname);

    oper.insertDocument(db, {name:"Shabana", description:"Movie"}, 'dishes', (result)=>{
        console.log('Inserted Document:\n ', result.ops);


        oper.findDocuments(db, 'dishes', (docs)=>{
            console.log('Found Documents: ', docs);
        })

        oper.updateDocuments(db, {name:'Shabana'},{description: 'Person'}, 'dishes', (result)=>{
                
            console.log('Updated Document:\n', result.result);

            oper.findDocuments(db, 'dishes', (docs)=>{
                console.log('Found Documents: ', docs);
                db.dropCollection('dishes',(result)=>{
                    console.log("Dropped Collection", result);
                              client.close();    
                })
            })
        })

    })


});