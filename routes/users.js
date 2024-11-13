// Names: Mishaal.G and Casey.P
// Date: Nov.12.2024
// Class: Web and Script Programming
// Purpose: This is responsible for defining a route for GET request with a messege and exports.

// Imports express for creating routs and creates a new instance in router
var express = require('express');
var router = express.Router();

//Route  to get list of users
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Exports the router  
module.exports = router;

// End of program
