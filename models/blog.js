// Names: Mishaal.G and Casey.P
// Date: Nov.12.2024
// Class: Web and Script Programming
// Purpose: This is responsible for creating the blog model and exporting it. It also defines MongoDB schema and model.

// models/blog.js
const mongoose = require('mongoose'); //Imports mongoose in order to define model and shema

// Defines the schema for a blog post with a active status fields, text, and title,
const blogSchema = new mongoose.Schema({
  Title: { type: String, required: true },
  Text: { type: String, required: true },
  isActive: { type: Boolean, default: true },
});
// Creates mongoose model from the blog schema
const Blog = mongoose.model('Blog', blogSchema);

// Exports Blog model
module.exports = Blog;

// End of program

