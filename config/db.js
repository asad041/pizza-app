const config = require('config');
const mongoose = require('mongoose');

const db = config.get('mongoURI');
const options = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

const connectDB = async () => {
  try {
    await mongoose.connect(db, options);
    console.log('mongoDB connected....');
  } catch (error) {
    console.log(error.message);

    // exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
