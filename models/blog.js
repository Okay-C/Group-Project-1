// models/blog.js
const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  Title: { type: String, required: true },
  Text: { type: String, required: true },
  isActive: { type: Boolean, default: true },
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;

