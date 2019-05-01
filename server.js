// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

var express = require("express");

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// express.json and express.urlEncoded make it easy for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// ==============================================================================
// LISTENER
// The below code effectively "starts" our server
// ==============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});


// // DEPENDENCIES
// let express = require("express");
// let path = require("path");
// let bodyParser = require("body-parser"); // body-parser:parser incoming requests

// // CREATE AN INSTANCE OF THE EXPRESS APP
// var app = express();
// // SET THE PORT OF OUR APPLICATION
// // PROCESS.ENV.PORT LETS THE PORT BE SET BY HEROKU
// var PORT = process.env.PORT || 3000;

// // PARSE THE DATA WITH EXPRESS APP CRUD
// app.use(bodyParser.json()); 
// app.use(bodyParser.text()); 
// app.use(bodyParser.urlencoded({ extended: true}));
// app.use(bodyParser.json({ type: "application/vnd.api+json"}));

// // ROUTE TO APIROUTES.JS AND HTMLROUTES.JS AND REQUIRE THEM
// var apiRoutes = require("./app/routing/apiRoutes");
// var htmlRoutes = require("./app/routing/htmlRoutes");

// // USE THE ROUTES (TO HTMLROUTES & APIROUTES)
// app.use("/", apiRoutes);
// app.use("/", htmlRoutes);

// // START OUR SERVER SO THAT IT CAN BEGIN LISTENING TO CLIENT REQUESTS
// app.listen(PORT, () => {
//   // LOG (SERVER-SIDE) WHEN OUR SERVER HAS STARTED
//   console.log("Server listening on: http://localhost:" + PORT);
// });