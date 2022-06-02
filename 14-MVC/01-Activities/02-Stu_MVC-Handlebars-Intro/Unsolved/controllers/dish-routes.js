// TODO: Add a comment indicating how this file fits into the MVC framework (is it a Model, a View, or a Controller?) and what it is responsible for handling.
// controller
const router = require('express').Router();

// TODO: Add a comment describing the purpose of the get route
// handles the routing for the dish routes
router.get('/', async (req, res) => {
//TODO: Add a comment describing the purpose of the render method
// rendering the all.handlebars file in the views folder.
  res.render('all');
});

module.exports = router;
