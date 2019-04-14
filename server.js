// DEPENDENCIES
let express = require("express");
let path = require("path");
let bodyParser = require("body-parser"); // body-parser:parser incoming requests

// CREATE AN INSTANCE OF THE EXPRESS APP
var app = express();
// SET THE PORT OF OUR APPLICATION
// PROCESS.ENV.PORT LETS THE PORT BE SET BY HEROKU
var PORT = process.env.PORT || 3000;

// PARSE THE DATA WITH EXPRESS APP CRUD
app.use(bodyParser.json()); 
app.use(bodyParser.text()); 
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

// ROUTE TO APIROUTES.JS AND HTMLROUTES.JS AND REQUIRE THEM
var apiRoutes = require("./app/routing/apiRoutes");
var htmlRoutes = require("./app/routing/htmlRoutes");

// USE THE ROUTES (TO HTMLROUTES & APIROUTES)
app.use("/", apiRoutes);
app.use("/", htmlRoutes);

// START OUR SERVER SO THAT IT CAN BEGIN LISTENING TO CLIENT REQUESTS
app.listen(PORT, () => {
  // LOG (SERVER-SIDE) WHEN OUR SERVER HAS STARTED
  console.log("Server listening on: http://localhost:" + PORT);
});