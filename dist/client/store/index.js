'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _user = require('./user');

Object.keys(_user).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _user[key];
    }
  });
});

var _miscellaneous = require('./miscellaneous');

Object.keys(_miscellaneous).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _miscellaneous[key];
    }
  });
});

var _admin = require('./admin');

Object.keys(_admin).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _admin[key];
    }
  });
});

var _redux = require('redux');

var _reduxLogger = require('redux-logger');

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxDevtoolsExtension = require('redux-devtools-extension');

var _user2 = _interopRequireDefault(_user);

var _miscellaneous2 = _interopRequireDefault(_miscellaneous);

var _admin2 = _interopRequireDefault(_admin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = (0, _redux.combineReducers)({ user: _user2.default, miscellaneous: _miscellaneous2.default, admin: _admin2.default });
var middleware = (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxThunk2.default, (0, _reduxLogger2.default)({ collapsed: true })));
var store = (0, _redux.createStore)(reducer, middleware);

exports.default = store;

//# sourceMappingURL=index.js.map