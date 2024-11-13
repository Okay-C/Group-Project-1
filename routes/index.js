// Names: Mishaal.G and Casey.P
// Date: Nov.12.2024
// Class: Web and Script Programming
// Purpose: This is responsible for rendering the main page and exporting it.

var express = require('express'); // Imports express for module creation
var router = express.Router(); // New router instance creation 

// Render the main page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' }); 
});

// Exporets the router 
module.exports = router;

// End of program
