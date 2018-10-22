'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _semanticUiReact = require('semantic-ui-react');

var _reactTable = require('react-table');

var _reactTable2 = _interopRequireDefault(_reactTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ServerTable = function (_Component) {
  _inherits(ServerTable, _Component);

  function ServerTable() {
    _classCallCheck(this, ServerTable);

    var _this = _possibleConstructorReturn(this, (ServerTable.__proto__ || Object.getPrototypeOf(ServerTable)).call(this));

    _this.state = {
      data: []
    };
    return _this;
  }

  _createClass(ServerTable, [{
    key: 'render',
    value: function render() {
      var data = void 0;
      this.props.servers ? data = this.props.servers : data = data;

      return _react2.default.createElement(
        'div',
        null,
        this.props.servers && this.props.servers.length > 0 ? _react2.default.createElement(_reactTable2.default, {
          filterable: true,
          defaultFilterMethod: function defaultFilterMethod(filter, row) {
            return row[filter.id].toString().toLowerCase().includes(filter.value.toString().toLowerCase());
          },
          data: data,
          columns: [{
            Header: 'ID',
            accessor: 'id',
            maxWidth: 50,
            filterMethod: function filterMethod(filter, row) {
              return row[filter.id].toString() == filter.value.toString();
            }
          }, { Header: 'Address', accessor: 'address', maxWidth: 200 }, { Header: 'Port', accessor: 'port', maxWidth: 75 }, { Header: 'Country', accessor: 'country' }],
          defaultSorted: [{ id: 'id', asc: true }],
          defaultPageSize: 10
        }) : null
      );
    }
  }]);

  return ServerTable;
}(_react.Component);

exports.default = ServerTable;

//# sourceMappingURL=ServerTable.js.map