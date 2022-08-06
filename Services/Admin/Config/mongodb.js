const { MongoClient, ServerApiVersion } = require("mongodb");

// Conection to MongoDB
const uri = `mongodb+srv://eunonia:iW5S2ziptqtgnTLl@cluster0.b640hoq.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// Database name
const dbName = "eunonia_db";
let db;

const connect = async () => {
  await client.connect();
  db = client.db(dbName);
};

const getDatabase = () => {
  return db;
};

module.exports = { connect, getDatabase };
