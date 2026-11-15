// Import Express and create a router to handle page routes
var express = require('express');
var router = express.Router();

/* GET Home page */
// When the user visits "/", render views/index.ejs and send the page title
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET About Me page */
// When the user visits "/about", render views/about.ejs
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

/* GET Projects page */
// When the user visits "/projects", render views/projects.ejs
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

/* GET Contact page */
// When the user visits "/contact", render views/contact.ejs
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

// Export the router so app.js can use it
module.exports = router;