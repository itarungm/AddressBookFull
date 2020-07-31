var express = require('express');
var router = express.Router();
var userModel = require('../modules/user');
var getUserDetails = userModel.find({});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
