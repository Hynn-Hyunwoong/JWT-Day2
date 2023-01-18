"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserService =
/*#__PURE__*/
function () {
  function UserService(_ref) {
    var userRepository = _ref.userRepository,
        jwt = _ref.jwt;

    _classCallCheck(this, UserService);

    this.userRepository = userRepository;
    this.jwt = jwt;
    this.crypto = jwt.crypto;
  }

  _createClass(UserService, [{
    key: "signUp",
    value: function signUp(_ref2) {
      var userId, userPw, userName, hash, user;
      return regeneratorRuntime.async(function signUp$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              userId = _ref2.userId, userPw = _ref2.userPw, userName = _ref2.userName;
              _context.prev = 1;

              if (!(!userId || !userPw || !userName)) {
                _context.next = 4;
                break;
              }

              throw 'Empty Information, Please try again';

            case 4:
              hash = this.crypto.createHmac('sha256', '1234').update(userPw).digest('hex');
              _context.next = 7;
              return regeneratorRuntime.awrap(this.userRepository.addUser({
                userId: userId,
                userName: userName,
                userPw: hash
              }));

            case 7:
              user = _context.sent;
              return _context.abrupt("return", user);

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](1);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, [[1, 11]]);
    }
  }]);

  return UserService;
}();

module.exports = UserService;