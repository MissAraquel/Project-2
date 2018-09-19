var express = require("express");
var router = express.Router();
var request = require("request");

//Index/Home
router.get('/', function(req, res) {
  res.render('index');
});
//Results
router.get('/results', function (req, res) {
    var userKey = process.env.ORGHUNTER_USER_KEY;
    var resultType = req.query.resultType;

    if (resultType === 'orghunter') {
      handleOrghunterRequest(req, res);
    } else if (resultType === 'eventbrite') {
      handleEventbriteRequest(req, res);
    }
});

function handleOrghunterRequest(req, res) {
  var userKey = process.env.ORGHUNTER_USER_KEY;
  var charityCity = req.query.charityCity;
  var charityType = req.query.charityType;
  var charityState = req.query.charityState;
  var reqUrl = 'http://data.orghunter.com/v1/charitysearch?user_key=' +
                userKey + '&searchTerm=' + charityType + '&city=' +
                charityCity + '&state=' + charityState;

  console.log(reqUrl);
  // res.render('results');

  console.log(reqUrl);
  request(reqUrl, function(err, data) {
    var toParse = data.body || '';

    try {
      var parsedBody = JSON.parse(toParse);
    }catch(error) {}

    // console.log(JSON.stringify(data.body, null, 2));;
    console.log(parsedBody);
    res.render('results', {orgs: parsedBody.data})
  });
}

function handleEventbriteRequest(req, res) {
  
}

//export routes for server.js 
module.exports = router;
