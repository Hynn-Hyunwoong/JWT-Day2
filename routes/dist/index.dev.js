"use strict";

var express = require('express');

var router = express.Router();

var users = require('../src/user/user.route');

router.use('/users', users);
module.exports = router;