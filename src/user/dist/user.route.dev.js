"use strict";

var express = require('express');

var router = express.Router();

var _require = require('./user.module'),
    controller = _require.userController;

router.post('/', function (req, res, next) {
  return controller.postSignup(req, res, next);
});
module.exports = router;