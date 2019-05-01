// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });

};




// let express = require("express");
// let path = require("path");
// let router = express.Router();

// // reusing middlewar from apiroutes
// // MIDDLEWARE FOR THIS ROUTER
// // found on stack overflow and from lecture last week
// router.use(function timeDate(req, res, next) {
//   console.log("Time: ", Date.now());
//   next();
// });

// // HOME PAGE ROUTE
// router.get('/', (req,res) => {
//   res.sendFile(path.join(__dirname, "./../public/home.html")); // /app/public/home.html
// });
// // SURVEY ROUTE
// router.get('/survey.html', (req,res) => { // routing to survey.html
//   res.sendFile(path.join(__dirname, "./../public/survey.html")); // /app/public/survey.html
// });

// module.exports = router;