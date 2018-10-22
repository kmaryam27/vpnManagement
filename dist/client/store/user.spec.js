'use strict';

var _chai = require('chai');

var _user = require('./user');

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _axiosMockAdapter = require('axios-mock-adapter');

var _axiosMockAdapter2 = _interopRequireDefault(_axiosMockAdapter);

var _reduxMockStore = require('redux-mock-store');

var _reduxMockStore2 = _interopRequireDefault(_reduxMockStore);

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _history = require('../history');

var _history2 = _interopRequireDefault(_history);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /* global describe beforeEach afterEach it */

var middlewares = [_reduxThunk2.default];
var mockStore = (0, _reduxMockStore2.default)(middlewares);

describe('thunk creators', function () {
  var store = void 0;
  var mockAxios = void 0;

  var initialState = { user: {} };

  beforeEach(function () {
    mockAxios = new _axiosMockAdapter2.default(_axios2.default);
    store = mockStore(initialState);
  });

  afterEach(function () {
    mockAxios.restore();
    store.clearActions();
  });

  describe('me', function () {
    it('eventually dispatches the GET USER action', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var fakeUser, actions;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              fakeUser = { email: 'Cody' };

              mockAxios.onGet('/auth/me').replyOnce(200, fakeUser);
              _context.next = 4;
              return store.dispatch((0, _user.me)());

            case 4:
              actions = store.getActions();

              (0, _chai.expect)(actions[0].type).to.be.equal('GET_USER');
              (0, _chai.expect)(actions[0].user).to.be.deep.equal(fakeUser);

            case 7:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    })));
  });

  describe('logout', function () {
    it('logout: eventually dispatches the REMOVE_USER action', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var actions;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              mockAxios.onPost('/auth/logout').replyOnce(204);
              _context2.next = 3;
              return store.dispatch((0, _user.logout)());

            case 3:
              actions = store.getActions();

              (0, _chai.expect)(actions[0].type).to.be.equal('REMOVE_USER');
              (0, _chai.expect)(_history2.default.location.pathname).to.be.equal('/login');

            case 6:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    })));
  });
});

//# sourceMappingURL=user.spec.js.map