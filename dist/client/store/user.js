'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logout = exports.register = exports.auth = exports.me = exports.update = undefined;

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultUser;
  var action = arguments[1];

  switch (action.type) {
    case GET_USER:
      return action.user;
    case REMOVE_USER:
      return defaultUser;
    case ADD_USER:
      return action.user;
    default:
      return state;
  }
};

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _history = require('../history');

var _history2 = _interopRequireDefault(_history);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * ACTION TYPES
 */
var GET_USER = 'GET_USER';
var REMOVE_USER = 'REMOVE_USER';
var ADD_USER = 'ADD_USER';
var UPDATE_USER = 'UPDATE_USER';

/**
 * INITIAL STATE
 */
var defaultUser = {
  error: '',
  isAdmin: false
};

/**
 * ACTION CREATORS
 */
var getUser = function getUser(user) {
  return { type: GET_USER, user: user };
};
var addUser = function addUser(user) {
  return { type: ADD_USER, user: user };
};
var removeUser = function removeUser() {
  return { type: REMOVE_USER };
};
var updateUser = function updateUser(status) {
  return { type: UPDATE_USER, status: status };
};

/**
 * THUNK CREATORS
 */

var update = exports.update = function update(user) {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      var _ref2, data;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _axios2.default.post('/api/users/update/', user);

            case 3:
              _ref2 = _context.sent;
              data = _ref2.data;

              dispatch(updateUser(true));
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context['catch'](0);

              dispatch(updateUser({ error: _context.t0 }));

            case 11:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[0, 8]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
var me = exports.me = function me() {
  return function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch) {
      var res;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _axios2.default.get('/auth/me');

            case 3:
              res = _context2.sent;

              dispatch(getUser(res.data || defaultUser));
              _context2.next = 10;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2['catch'](0);

              console.error(_context2.t0);

            case 10:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined, [[0, 7]]);
    }));

    return function (_x2) {
      return _ref3.apply(this, arguments);
    };
  }();
};

var auth = exports.auth = function auth(email, password, method) {
  return function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch) {
      var res;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              res = void 0;
              _context3.prev = 1;
              _context3.next = 4;
              return _axios2.default.post('/auth/' + method, { email: email, password: password });

            case 4:
              res = _context3.sent;
              _context3.next = 11;
              break;

            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3['catch'](1);

              console.log('auth error', _context3.t0.toString());
              return _context3.abrupt('return', dispatch(getUser({ error: _context3.t0 })));

            case 11:

              try {
                dispatch(getUser(res.data));
                _history2.default.push('/home');
              } catch (dispatchOrHistoryErr) {
                console.error(dispatchOrHistoryErr);
              }

            case 12:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined, [[1, 7]]);
    }));

    return function (_x3) {
      return _ref4.apply(this, arguments);
    };
  }();
};

var register = exports.register = function register(user) {
  return function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(dispatch) {
      var response;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              response = void 0;

              if (!(user.password.length < 8)) {
                _context4.next = 3;
                break;
              }

              return _context4.abrupt('return', dispatch(getUser({ error: { password: true } })));

            case 3:
              _context4.prev = 3;
              _context4.next = 6;
              return _axios2.default.post('/api/users/signup', user);

            case 6:
              response = _context4.sent;
              _context4.next = 12;
              break;

            case 9:
              _context4.prev = 9;
              _context4.t0 = _context4['catch'](3);
              return _context4.abrupt('return', dispatch(getUser({ error: { email: true } })));

            case 12:

              try {
                dispatch(addUser(response.data));
                _history2.default.push('/home');
              } catch (err) {
                console.error(err);
              }

            case 13:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, undefined, [[3, 9]]);
    }));

    return function (_x4) {
      return _ref5.apply(this, arguments);
    };
  }();
};

var logout = exports.logout = function logout() {
  return function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(dispatch) {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return _axios2.default.post('/auth/logout');

            case 3:
              dispatch(removeUser());
              _history2.default.push('/login');
              _context5.next = 10;
              break;

            case 7:
              _context5.prev = 7;
              _context5.t0 = _context5['catch'](0);

              console.error(_context5.t0);

            case 10:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, undefined, [[0, 7]]);
    }));

    return function (_x5) {
      return _ref6.apply(this, arguments);
    };
  }();
};

// export const grab = () => async dispatch => {
//   try {
//     const { data } = await axios.get('/api/users/ip');
//     console.log('data should be', data);
//     dispatch(setIP(data));
//   } catch (err) {
//     console.log(err);
//   }
// };

/**
 * REDUCER
 */

//# sourceMappingURL=user.js.map