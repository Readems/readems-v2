const mongoose = require('mongoose');
const keys = require('./dev');

const connectDB = async () => {
  try {
    const mongoDB = await mongoose.connect(keys.mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log(`MongoDb conncted on host: ${mongoDB.connection.host}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
}

module.exports = { connectDB };