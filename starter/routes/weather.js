var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let weatherData = {
        Temp:   '90.5',
        Unit:   'fahrenheit',
        Cloudy: false,
        PrecipitationChance:    '0'
    }
});

module.exports = router;
