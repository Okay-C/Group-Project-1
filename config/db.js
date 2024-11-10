require('dotenv').config(); // Add this line to load the .env file
const mongoose = require('mongoose');

const dbURI = process.env.MONGODB_URI; // Get the MongoDB URI from the environment variables

const connectDB = async () => {
  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1); // Exit with failure
  }
};

module.exports = connectDB;
