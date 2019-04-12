var express = require("express");
var path = require("path");
var friendList = require("../data/friends");

// MIDDLEWARE FOR THIS ROUTER
router.use(function timeStamp(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});


