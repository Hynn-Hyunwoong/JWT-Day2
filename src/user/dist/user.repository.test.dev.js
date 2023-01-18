"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var UserRepository = require("./user.repository");

describe("UserRepository", function () {
  var User, repository;
  beforeEach(function () {
    User = {
      create: jest.fn().mockResolvedValue({}) // create : ()=>{
      //     return new Promise((resolve, reject) => {})
      // }

    };
    repository = new UserRepository({
      User: User
    }); // console.log(repository)
  });
  it("UserRepository completed Import", function () {
    expect(_typeof(UserRepository)).toBe("function");
  });
  describe("addUser", function () {
    it('[try] addUser check method', function _callee() {
      var user;
      return regeneratorRuntime.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(repository.addUser(payload));

            case 2:
              user = _context.sent;
              expect(User.create).toHaveBeenCalledWith({
                userId: "Hynn",
                userPw: "1449"
              }, {
                raw: true
              }); // Test Function

              expect(user).toEqual({});

            case 5:
            case "end":
              return _context.stop();
          }
        }
      });
    });
    it("[catch] If addUser method Reject ", function _callee2() {
      return regeneratorRuntime.async(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              User.create = jest.fn().mockRejectedValue({}); // await repository.addUser(payload)

              expect(function () {
                return repository.addUser(payload);
              }).rejects.toThrow();

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      });
    });
  });
});