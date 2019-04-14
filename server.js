// DEPENDENCIES
let express = require("express");
let path = require("path");
let bodyParser = require("body-parser"); // body-parser:parser incoming requests

// CREATE AN INSTANCE OF THE EXPRESS APP
var app = express();
// SET THE PORT OF OUR APPLICATION
// PROCESS.ENV.PORT LETS THE PORT BE SET BY HEROKU
var PORT = process.env.PORT || 8080;

// PARSE THE DATA WITH EXPRESS APP
app.use(bodyParser.json()); // use to parse javascript objects
app.use(bodyParser.text()); // use to parse text

// ROUTE TO APIROUTES.JS AND HTMLROUTES.JS AND REQUIRE THEM
var htmlRoutes = require("./app/routing/apiRoutes");
var apiRoutes = require("./app/routing/htmlRoutes");

// USE THE ROUTES (TO HTMLROUTES & APIROUTES)
app.use("/", htmlRoutes);
app.use("/", apiRoutes);

// START OUR SERVER SO THAT IT CAN BEGIN LISTENING TO CLIENT REQUESTS
app.listen(PORT, () => {
  // LOG (SERVER-SIDE) WHEN OUR SERVER HAS STARTED
  console.log("Server listening on: http://localhost:" + PORT);
});