var express = require('express');
var router = express.Router();
// const {db} = require("../mongo");

/* GET project. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });
  
  module.exports = router;

  