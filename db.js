const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://adrian123:pass123@api123.sdkji.mongodb.net/myDatabase?retryWrites=true&w=majority&appName=api123'

      );
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;

//mongodb+srv://carlos123:fresa12345@mystore.ava6e.mongodb.net/?retryWrites=true&w=majority&appName=mystore
