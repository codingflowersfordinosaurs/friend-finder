let express = require("express");
let path = require("path");
let router = express.Router();

// reusing middlewar from apiroutes
// MIDDLEWARE FOR THIS ROUTER
// found on stack overflow and from lecture last week
router.use(function timeDate(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});

// SURVEY ROUTE
router.get('/survey', (req,res) => {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});

// HOME PAGE ROUTE
router.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

module.exports = router;