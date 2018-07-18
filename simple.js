
 Database = require('arangojs').Database;
db = new Database('http://127.0.0.1:8529');
db.useBasicAuth('user1', '123456789');
// db.createDatabase('db1').then(
//   () => console.log('Database created'),
//   err => console.error('Failed to create database:', err)
// );    
db.useDatabase('db1');

collection = db.collection('c2');

// collection.create().then(
//   () => console.log('Collection created'),
//   err => console.error('Failed to create collection:', err)
// );

for(i = 11; i <= 15; i ++){

    doc = {
      _key: '' + i, 
       a : "some info"
    };
    collection.save(doc).then(
        meta => console.log('Document saved:', meta._rev),
        err => console.error('Failed to save document:', err)
      );
    }