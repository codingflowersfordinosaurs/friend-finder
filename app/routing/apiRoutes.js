let express = require("express");
let path = require("path");
let friends = require("../data/friends");
// from stackoverflow
let router = express.Router();

// MIDDLEWARE FOR THIS ROUTER
// found on stack overflow and from lecture last week
router.use(function timeDate(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});

router.post("/api/friends", (req,res) => {
  let newSurvey = req.body;
  let friended;
  let friendMath = [];
  for (var i = 0; i < friends; i++) {
    let difference = 0;
    for (var j = 0; j < 10; j++) {
      let scoreDifference = Math.abs(friends[i].scores[k] - newSurvey.scores[k]);
      difference += scoreDifference;
    }
    friendMath.push(
      {
        name: friends[i].name,
        picture: friends[i].picture,
        difference: difference
      }
    );
  }
  let highScore = 50;
  friendMath.map((obj) => {
    if (obj.difference < highScore) highScore = obj.difference;
  });
  friended = friendMath.filter((e) => {
    return e.difference === highScore;
  });
  res.json(friended);
  friends.push(newSurvey);
});

// friend list is in form of an object, need to get the friend api
router.get("/api/friends", (req,res) => {
  res.json(friends);
});

module.exports = router;