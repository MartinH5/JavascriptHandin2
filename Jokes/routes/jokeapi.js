var express = require('express');
var router = express.Router();
var jokes = require("../model/jokes");

//random joke
router.get('/joke/random', function(req, res, next) {
  res.send({joke: jokes.getRandomJoke()})
});

//list of all jokes
router.get('/jokes', function(req, res, next) {
  res.send({jokes: jokes.allJokes})
});

//adding joke
router.post('/joke', function(req, res, next) {
  var joke = req.body;
  console.log(JSON.stringify(joke));
  jokes.addJoke(joke.joke);
  res.json({joke: joke})
});

module.exports = router;