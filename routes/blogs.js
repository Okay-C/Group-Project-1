const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');

// Display all blog posts (GET /blogs)
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find({ isActive: true }); // Fetch active blogs from MongoDB
    console.log('Blogs fetched:', blogs); // Log the fetched blogs to check if they're being retrieved correctly
    res.render('blogs/index', { blogs }); // Pass blogs to the view
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).send("An error occurred while fetching the blog posts.");
  }
});


// Handle blog post creation (POST /blogs)
router.post('/', async (req, res) => {
  try {
    // Create new blog from the request body data
    const newBlog = new Blog({
      Title: req.body.Title,  // Blog Title
      Text: req.body.Text,  // Blog Text
      isActive: true,  // Activate the blog post immediately
    });
    
    // Save the blog to MongoDB
    await newBlog.save();
    
    // Redirect to the main blog page to see the new post
    res.redirect('/blogs');
  } catch (error) {
    console.error("Error creating blog:", error);
    res.status(500).send("An error occurred while creating the blog post.");
  }
});

// Render the create blog form (GET /blogs/create)
router.get('/create', (req, res) => {
  res.render('blogs/create'); // Render the create form page
});

// Edit a blog post (GET /blogs/edit/:id)
router.get('/edit/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id); // Find the blog by ID
    res.render('blogs/edit', { blog }); // Render edit page with the blog data
  } catch (error) {
    console.error("Error fetching blog for editing:", error);
    res.status(500).send("An error occurred while fetching the blog post for editing.");
  }
});

// Process the blog post update (POST /blogs/update/:id)
router.post('/update/:id', async (req, res) => {
  try {
    // Find the blog by ID and update it with new data from the form
    await Blog.findByIdAndUpdate(req.params.id, req.body);
    
    // After updating, redirect to the main blog page
    res.redirect('/blogs');
  } catch (error) {
    console.error("Error updating blog:", error);
    res.status(500).send("An error occurred while updating the blog post.");
  }
});

// Delete a blog post (POST /blogs/delete/:id)
router.post('/delete/:id', async (req, res) => {
  try {
    // Find the blog by ID and delete it
    await Blog.findByIdAndDelete(req.params.id);
    
    // After deletion, redirect back to the main blog page
    res.redirect('/blogs');
  } catch (error) {
    console.error("Error deleting blog:", error);
    res.status(500).send("An error occurred while deleting the blog post.");
  }
});

module.exports = router;
