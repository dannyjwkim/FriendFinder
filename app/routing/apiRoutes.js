var friends = require('../data/friends.js')
var path = require('path');

module.exports = function(app) {

  //GET REQUESTS JSON DATA OF ALL POTENTIAL FRIEND MATCHES
  app.get('/api/friends', function(req, res) {
    res.json(friends);
  })

  //POST REQUESTS USER INPUTTED DATA
  app.post('/api/friends', function(req, res) {
    var match = matchCheck(req);
    friends.push(req.body);
    res.json(match);
  })

};

function matchCheck(req) {

  var matchIndex = 0;
  var differences = [];

  for (var i = 0; i < friends.length; i++) {

    var totalDifference = 0;

    for (var x = 0; x < friends[i].scores.length; x++) {
      totalDifference += Math.abs(req.body.scores[x] - friends[i].scores[x]);
    }

    differences.push(totalDifference);

  }

  //FINDING THE INDEX OF THE SMALLEST NUMBER IN THE DIFFERENCES ARRAY
  matchIndex = differences.indexOf(Math.min.apply(Math, differences));

  return friends[matchIndex];
}