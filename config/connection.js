const mongoose = require('mongoose');
const dotenv = require('dotenv').config() ; 
 
const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error('MONGO_URI is not defined. Please check your environment variables.');
    }

    const conn = await mongoose.connect(process.env.MONGO_URI); 
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Database Connection Error: ${error.message}`);
    process.exit(1); // Exit with failure
  }
};

module.exports = connectDB;
