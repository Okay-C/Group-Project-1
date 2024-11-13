// Names: Mishaal.G and Casey.P
// Date: Nov.12.2024
// Class: Web and Script Programming
// Purpose: This is responsible for connecting to the mongoDB database and hadels errocs with connection. 

// Loads environment variables from .env file and imports mongoose for mongoDB 
// connection and interactions 
require('dotenv').config(); 
const mongoose = require('mongoose');

// Gets the MongoDB URI from the  given environment variables
const dbURI = process.env.MONGODB_URI; 

// Connect to the MongoDB database with the specified options indicated
const connectDB = async () => {
  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connected successfully');// logs a message for successful connection
  } catch (error) {
    console.error('Database connection failed:', error); // Logs an error message for connection
    process.exit(1); // Exit process with code for faluiure if the connection fails 
  }
};

// Export the connectDB function fpr possible use in other files
module.exports = connectDB;

// End of program
