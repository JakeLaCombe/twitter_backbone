var express = require('express');
var app = express();

var Twit = require('Twit');
var client = null;

function connectToTwitter() {
  client = new Twit({
    consumer_key: 'JMMpipmSVmzA6xKXknrpFuHf5',
    consumer_secret: 'uwhT8d6OT5nnbsgII5dz7yv97FqPdp7E5t31VLz9bl52ktu30W',
    access_token: '770491231-iMo00OBoF8HdrgX9f0yfzYJdpzersNtwwU19HzsT',
    access_token_secret: '770491231-iMo00OBoF8HdrgX9f0yfzYJdpzersNtwwU19HzsT'
  });
}

connectToTwitter();

//additional setup to allow CORS requests
var allowCrossDomain = function(req, response, next) {
    response.header('Access-Control-Allow-Origin', "http://localhost
");
    response.header('Access-Control-Allow-Methods', 'OPTIONS, GET,PUT,POST,DELETE');
    response.header('Access-Control-Allow-Headers', 'Content-Type');

    if ('OPTIONS' == req.method) {
      response.send(200);
    }
    else {
      next();
    }
};

/**
 * Returns the twitter timeline for the current user
 **/
app.get('/timeline', function (request, response) {     
  response.header('Access-Control-Allow-Origin', '*');
  client.get('statuses/home_timeline', { },  function (err, reply) {
    if(err){
      response.send(404);
    }
    if(reply){
      response.json(reply);
    }
  });
});

app.configure(function() {
    app.use(allowCrossDomain);
  //Parses the JSON object given in the body request
    app.use(express.bodyParser());
});

//start up the app on port 8080
app.listen(8080);
