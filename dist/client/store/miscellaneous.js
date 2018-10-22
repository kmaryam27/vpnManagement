'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.grabServers = exports.grabIp = undefined;

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];

  switch (action.type) {
    case GET_IP:
      return Object.assign({}, state, { loading: true });
    case SET_IP:
      return { ip: action.ip, loading: false };
    case GET_SERVERS:
      return Object.assign({}, state, { loading: true });
    case SET_SERVERS:
      return Object.assign({}, state, { servers: action.servers, loading: false });
    default:
      return state;
  }
};

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var defaultState = { ip: 0, loading: false, servers: [] };

// Action Types
var GET_IP = 'GET_IP';
var SET_IP = 'SET_IP';
var GET_SERVERS = 'GET_SERVERS';
var SET_SERVERS = 'SET_SERVERS';

// Action Creators
var getIP = function getIP() {
  return { type: 'GET_IP', loading: true };
};
var setIp = function setIp(ip) {
  return { type: SET_IP, ip: ip };
};
var setServers = function setServers(servers) {
  return { type: 'SET_SERVERS', servers: servers };
};

// Thunk Creators
// export const grabIp = () => async dispatch => {
// };

var grabIp = exports.grabIp = function grabIp() {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      var _ref2, data;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _axios2.default.get('/api/users/ip');

            case 3:
              _ref2 = _context.sent;
              data = _ref2.data;

              dispatch(setIp(data || 1));
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context['catch'](0);

              console.error(_context.t0);

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

var grabServers = exports.grabServers = function grabServers() {
  return function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch) {
      var _ref4, data;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _axios2.default.get('/api/servers/all');

            case 3:
              _ref4 = _context2.sent;
              data = _ref4.data;

              dispatch(setServers(data));
              _context2.next = 11;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2['catch'](0);

              console.log(_context2.t0);

            case 11:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined, [[0, 8]]);
    }));

    return function (_x2) {
      return _ref3.apply(this, arguments);
    };
  }();
};

// Reducer

//# sourceMappingURL=miscellaneous.js.map