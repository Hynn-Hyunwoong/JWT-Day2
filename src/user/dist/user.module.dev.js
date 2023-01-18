"use strict";

var _require = require('../../models'),
    User = _require.sequelize.models.User;

var UserRepository = require('./user.repository');

var UserService = require('./user.service');

var UserController = require('./user.controller');

var JWT = require('../../lib/jwt');

var crypto = require('crypto');

var jwt = new JWT({
  crypto: crypto
});
var userRepository = new UserRepository({
  User: User
});
var userService = new UserService({
  userRepository: userRepository,
  jwt: jwt
});
var userController = new UserController({
  userService: userService
});
module.exports = {
  userController: userController
};