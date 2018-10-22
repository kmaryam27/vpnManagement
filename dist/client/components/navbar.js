'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _reactRouterDom = require('react-router-dom');

var _store = require('../store');

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_Component) {
  _inherits(Navbar, _Component);

  function Navbar(props) {
    _classCallCheck(this, Navbar);

    var _this = _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call(this, props));

    _this.handleItemClick = function (e, _ref) {
      var name = _ref.name;

      _this.setState({ activeItem: name });
    };

    _this.state = {};
    return _this;
  }

  _createClass(Navbar, [{
    key: 'render',
    value: function render() {
      var activeItem = this.state.activeItem;

      return _react2.default.createElement(
        _semanticUiReact.Menu,
        { stackable: true },
        _react2.default.createElement(
          _semanticUiReact.Menu.Item,
          {
            as: _reactRouterDom.Link,
            to: '/home',
            name: 'home',
            active: activeItem === 'home',
            onClick: this.handleItemClick
          },
          _react2.default.createElement('img', { src: 'https://react.semantic-ui.com/logo.png' })
        ),
        this.props.isAdmin ? _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _semanticUiReact.Menu.Item,
            {
              as: _reactRouterDom.Link,
              to: '/messages',
              name: 'messages',
              active: activeItem === 'mesages',
              onClick: this.handleItemClick
            },
            'Messages'
          ),
          _react2.default.createElement(
            _semanticUiReact.Menu.Item,
            {
              as: _reactRouterDom.Link,
              to: '/admin',
              name: 'admin',
              active: activeItem === 'admin',
              onClick: this.handleItemClick
            },
            'Administration'
          ),
          _react2.default.createElement(
            _semanticUiReact.Menu.Item,
            {
              as: _reactRouterDom.Link,
              to: '/users',
              name: 'users',
              active: activeItem === 'users',
              onClick: this.handleItemClick
            },
            'Manage Users'
          ),
          _react2.default.createElement(
            _semanticUiReact.Menu.Item,
            {
              as: _reactRouterDom.Link,
              to: '/servers',
              name: 'servers',
              active: activeItem === 'servers',
              onClick: this.handleItemClick
            },
            'Manage Servers'
          )
        ) : null,
        _react2.default.createElement(
          _semanticUiReact.Menu.Item,
          {
            as: _reactRouterDom.Link,
            to: '/plans',
            name: 'plans',
            active: activeItem === 'plans',
            onClick: this.handleItemClick
          },
          'Plans'
        ),
        _react2.default.createElement(
          _semanticUiReact.Menu.Item,
          {
            as: _reactRouterDom.Link,
            to: '/plans',
            name: 'plans',
            active: activeItem === 'plans',
            onClick: this.handleItemClick
          },
          'Cart'
        ),
        this.props.isLoggedIn ? _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _semanticUiReact.Menu.Item,
            {
              as: _reactRouterDom.Link,
              to: '/profile',
              name: 'profile',
              active: activeItem === 'profile',
              onClick: this.handleItemClick
            },
            'Edit Profile'
          ),
          _react2.default.createElement(
            _semanticUiReact.Menu.Item,
            {
              name: 'logout',
              active: activeItem === 'logout',
              onClick: this.props.handleClick
            },
            'Logout'
          )
        ) : _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _semanticUiReact.Menu.Item,
            {
              as: _reactRouterDom.Link,
              to: '/login',
              name: 'login',
              active: activeItem === 'login',
              onClick: this.handleItemClick
            },
            'Login'
          ),
          _react2.default.createElement(
            _semanticUiReact.Menu.Item,
            {
              as: _reactRouterDom.Link,
              to: '/signup',
              name: 'sign up',
              active: activeItem === 'sign up',
              onClick: this.handleItemClick
            },
            'Sign Up'
          )
        )
      );
    }
  }]);

  return Navbar;
}(_react.Component);

/**
 * CONTAINER
 */


var mapState = function mapState(state) {
  return {
    isLoggedIn: !!state.user.id,
    isAdmin: state.user.isAdmin
  };
};

var mapDispatch = function mapDispatch(dispatch) {
  return {
    handleClick: function handleClick() {
      dispatch((0, _store.logout)());
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapState, mapDispatch)(Navbar);

/**
 * PROP TYPES
 */

Navbar.propTypes = {
  handleClick: _propTypes2.default.func.isRequired,
  isLoggedIn: _propTypes2.default.bool.isRequired
};

//# sourceMappingURL=navbar.js.map