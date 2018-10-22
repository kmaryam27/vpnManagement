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

var UserTable = function (_Component) {
  _inherits(UserTable, _Component);

  function UserTable(props) {
    _classCallCheck(this, UserTable);

    var _this = _possibleConstructorReturn(this, (UserTable.__proto__ || Object.getPrototypeOf(UserTable)).call(this, props));

    _this.state = {
      // column: null,
      data: []
      // direction: null,
    };
    return _this;
  }

  // componentDidMount() {
  //   this.setState([...this.state, this.props.users]);
  // }


  _createClass(UserTable, [{
    key: 'render',
    value: function render() {
      var data = void 0;
      this.props.users ? data = this.props.users : data = data;

      return _react2.default.createElement(
        'div',
        null,
        this.props.users && this.props.users.length > 0 ? _react2.default.createElement(_reactTable2.default, {
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
          }, { Header: 'Email', accessor: 'email', maxWidth: 200 }, { Header: 'First Name', accessor: 'firstName' }, { Header: 'Last Name', accessor: 'lastName' }, {
            Header: 'Plan #',
            accessor: 'planId',
            filterMethod: function filterMethod(filter, row) {
              return row[filter.id].toString().toLowerCase().includes(filter.value.toString().toLowerCase());
            }
          }, { Header: 'Expiration', accessor: 'planEnd' }, { Header: 'Auto-Renew?', accessor: 'autoRenew' }, { Header: 'VPN ID', accessor: 'vpnId' }],
          defaultSorted: [{ id: 'id', asc: true }],
          defaultPageSize: 10
        }) : null
      )
      // <Table striped sortable>
      //   <Table.Header>
      //     <Table.HeaderCell>ID</Table.HeaderCell>
      //     <Table.HeaderCell>Email</Table.HeaderCell>
      //     <Table.HeaderCell>First Name</Table.HeaderCell>
      //     <Table.HeaderCell>Last Name</Table.HeaderCell>
      //     <Table.HeaderCell>Plan</Table.HeaderCell>
      //     <Table.HeaderCell>Expiration</Table.HeaderCell>
      //     <Table.HeaderCell>Auto Renew</Table.HeaderCell>
      //     <Table.HeaderCell>VPN ID</Table.HeaderCell>
      //   </Table.Header>
      //   {this.props.users ? (
      //     <Table.Body>
      //       {this.props.users.map(user => {
      //         return (
      //           <Table.Row key={user.id}>
      //             <Table.Cell>{user.id}</Table.Cell>
      //             <Table.Cell>{user.email}</Table.Cell>
      //             <Table.Cell>{user.firstName}</Table.Cell>
      //             <Table.Cell>{user.lastName}</Table.Cell>
      //             <Table.Cell>{user.planId}</Table.Cell>
      //             <Table.Cell>{user.planEnd}</Table.Cell>
      //             <Table.Cell>{user.autoRenew.toString()}</Table.Cell>
      //             <Table.Cell>{user.vpnId}</Table.Cell>
      //           </Table.Row>
      //         );
      //       })}
      //     </Table.Body>
      //   ) : null}
      // </Table>
      ;
    }
  }]);

  return UserTable;
}(_react.Component);

// const mapState = state => {
//   return {
//     // something
//   };
// };

// const mapDispatch = dispatch => {
//   return {
//     //something
//   };
// };

// export default connect(mapState, mapDispatch)(UserTable);


exports.default = UserTable;

//# sourceMappingURL=UserTable.js.map