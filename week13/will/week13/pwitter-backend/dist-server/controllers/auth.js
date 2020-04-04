"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _User = _interopRequireDefault(require("../models/User"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

require('dotenv').config();

var jwtSecret = process.env.JWT_SECRET;

var handleLogin = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (data) {
    var {
      phone,
      password
    } = data;

    if (phone && password) {
      try {
        var user = yield _User.default.findOne({
          phone
        });

        if (user) {
          var passwordMatch = _bcryptjs.default.compareSync(password, user.password);

          if (passwordMatch) {
            var token = _jsonwebtoken.default.sign({
              userId: user._id
            }, jwtSecret);

            return {
              token,
              userId: user._id
            };
          }

          throw 'Password is incorrect ';
        }

        throw 'User phone is not found ';
      } catch (error) {
        throw error;
      }
    }

    throw 'You need to provide both phone and password ';
  });

  return function handleLogin(_x) {
    return _ref.apply(this, arguments);
  };
}();

var register = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (data) {
    var {
      email,
      password,
      phone,
      firstName,
      lastName,
      age,
      gender,
      street,
      city,
      state,
      zip,
      avatar
    } = data;

    try {
      var emailExisted = yield _User.default.findOne({
        email
      });
      var phoneExisted = yield _User.default.findOne({
        phone
      });

      if (email && password && phone) {
        if (emailExisted) {
          throw 'The email has been taken';
        }

        if (phoneExisted) {
          throw 'The phone has been taken';
        }

        var newUser = {
          email,
          password,
          phone,
          firstName,
          lastName,
          age,
          gender,
          street,
          city,
          state,
          zip,
          avatar
        };
        newUser.password = _bcryptjs.default.hashSync(password);
        return _User.default.create(newUser);
      }

      throw 'You need to provide email, phone and password';
    } catch (error) {
      throw error;
    }
  });

  return function register(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var verifyToken = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (data) {
    try {
      return yield _jsonwebtoken.default.verify(data, jwtSecret);
    } catch (error) {
      throw error;
    }
  });

  return function verifyToken(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

var AuthController = {
  handleLogin,
  register,
  verifyToken
};
var _default = AuthController;
exports.default = _default;