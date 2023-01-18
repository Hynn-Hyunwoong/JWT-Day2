"use strict";

var _require = require('../../models'),
    User = _require.sequelize.models.User;

var UserRepository = require('./user.repository');

var UserService = require('./user.service');

var UserController = require('./user.controller');

var JWT = new JWT({
  crypto: crypto
});