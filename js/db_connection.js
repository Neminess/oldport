const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://nemirana:Tr1gg3Reed@cluster0.ninqb.mongodb.net/cluster0?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});