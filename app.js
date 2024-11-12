// Names: Mishaal.G and Casey.P
// Date: Nov.12.2024
// Class: Web and Script Programming
// Purpose: app.js connects to mongo DB, sets up routes, and starts the server. 
// Also set middleware and routes for CRUD and error handling.


// Importing necessary modules
require('dotenv').config(); // Load environment variables with .env file
var createError = require('http-errors'); //Create HTTP errors for the error handling
var express = require('express'); // A reqirement for express framework
var path = require('path');
var cookieParser = require('cookie-parser'); // Middlewhare for cookies
var logger = require('morgan'); // Http requests a logger middleware

const connectDB = require('./config/db'); // Imports the database connection

// Database connection
connectDB();

// Initializes the Express app and creates a instance of the applicationg (express)
var app = express();

// Import route modules
var indexRouter = require('./routes/index'); // Route for the main page
var usersRouter = require('./routes/users'); // Route for user operations/management
const blogRoutes = require('./routes/blogs'); // Route for the bologs management (CRUD) 

// view engine setup, sets directory for views and configures the EJS as template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware setup
app.use(logger('dev')); // HTTP logs request that are in development
app.use(express.json()); // Parses the incoming JSON requests
app.use(express.urlencoded({ extended: false })); // URL-encoded data from forms 
app.use(cookieParser());// Cookies from incoming requests
app.use(express.static(path.join(__dirname, 'public'))); // Gives access to static files via public

// Routes for the application user and blog related
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/blogs', blogRoutes); 

// Catches the 404 error and sends to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler sets the local variables and provides error details
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page, rror view, and sets status code 
  res.status(err.status || 500);
  res.render('error');
});

// Port set to start sever  and provides mesesage when server is live 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Export app module for use in other parts of the application
module.exports = app;

//End of app.js
