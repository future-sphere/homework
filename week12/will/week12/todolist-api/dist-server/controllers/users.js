"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _User = _interopRequireDefault(require("../models/User"));

var _paginate = _interopRequireDefault(require("../helpers/paginate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var fetchUsers = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* () {
    var data = yield _User.default.find();
    console.log(data);
    return data;
  });

  return function fetchUsers() {
    return _ref.apply(this, arguments);
  };
}();

var createNewTodo = todo => {
  return _User.default.create({
    todo,
    isFinished: false
  });
};

var removeTodo = (id, todo) => {
  return _User.default.findByIdAndDelete(id, {
    data: todo,
    isFinished: false
  });
};

var finishTodo = (id, todo, isFinished) => {
  return _User.default.findByIdAndUpdate(id, {
    data: todo,
    isFinished: !isFinished
  });
};

var UserController = {
  fetchUsers,
  createNewTodo,
  removeTodo,
  finishTodo
};
var _default = UserController;
exports.default = _default;