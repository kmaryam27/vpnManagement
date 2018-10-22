'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadAdmin = undefined;

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];

  switch (action.type) {
    case LOAD_DATA:
      return Object.assign({}, state, { adminData: action.adminData });
    default:
      return state;
  }
};

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * Default State
 */

var defaultState = {
  adminData: null
};

/**
 * Action Types
 */

var LOAD_DATA = 'LOAD_DATA';

/**
 * Action Creators
 */

var loadData = function loadData(data) {
  return {
    type: LOAD_DATA,
    adminData: data
  };
};

/**
 * Thunk Creators
 */

var loadAdmin = exports.loadAdmin = function loadAdmin() {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      var _ref2, data;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _axios2.default.get('/api/users/all');

            case 3:
              _ref2 = _context.sent;
              data = _ref2.data;

              // console.log('data should be', data);
              dispatch(loadData(data));
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

//# sourceMappingURL=admin.js.map