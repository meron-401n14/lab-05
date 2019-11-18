const mongoose = require('mongoose');
const { default: MongoMemoryServer } = require('mongodb-memory-server');
const { mongoServer } = require("./supertester");

mongoServer =  new MongoMemoryServer();
async function startDB() {
  const mongoUri = await mongoServer.getConnectionString();
  const mongooseOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    
  };
  await mongoose.connect(mongoUri, mongooseOptions);
}
exports.startDB = startDB;
