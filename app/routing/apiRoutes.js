let express = require("express");
let path = require("path");
let router = express.Router();
let friendList = require("../data/friends");


// MIDDLEWARE FOR THIS ROUTER
// found on stack overflow and from lecture last week abotu middleware
router.use(function timeDate(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});

router.post("/api/friends", (req,res) => {
  let new_survey = req.body;
  let friended;
  let friendMath = [];
  for (var i = 0; i < friendList; i++) {
    // start of diff to be 0; then answer will be the abs val to find friends
    let difference = 0;
    for (var j = 0; j < 10; j++) {
      let scoreMath = Math.abs(friendList[i].scores[k] - new_survey.scores[k]);
      difference += scoreMath;
    }
    friendMath.push(
      {
        name: friendList[i].name,
        picture: friendList[i].picture,
        difference: difference
      }
    );
  }
  let highScore = 50;// got this from 5 pt w/10 numbers 
  friendMath.map((obj) => {
    if (obj.difference < highScore) {
      highScore = obj.difference;
    }
  });
  friended = friendMath.filter((event) => {
    return event.difference === highScore;
  });
  res.json(friended);
  friendList.push(new_survey);
});

// friend list is in form of an object, need to get the friend api
router.get("/api/friends", (req,res) => {
  res.json(friendList);
});

module.exports = router;