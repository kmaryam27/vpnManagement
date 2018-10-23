import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'semantic-ui-react';
import ReactTable from 'react-table';
import UserEdit from './editors/UserEdit';

export class UserTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // column: null,
      data: [],
      // direction: null,
    };
  }

  // componentDidMount() {
  //   this.setState([...this.state, this.props.users]);
  // }
  render() {
    let data;
    this.props.users ? (data = this.props.users) : (data = data);

    return (
      <div>
        {this.props.users && this.props.users.length > 0 ? (
          <ReactTable
            filterable
            defaultFilterMethod={(filter, row) =>
              row[filter.id]
                .toString()
                .toLowerCase()
                .includes(filter.value.toString().toLowerCase())
            }
            data={data}
            columns={[
              {
                Header: 'ID',
                accessor: 'id',
                maxWidth: 50,
                filterMethod: (filter, row) =>
                  row[filter.id].toString() == filter.value.toString(),
              },
              { Header: 'Email', accessor: 'email', maxWidth: 200 },
              { Header: 'First Name', accessor: 'firstName' },
              { Header: 'Last Name', accessor: 'lastName' },
              {
                Header: 'Plan #',
                accessor: 'planId',
                filterMethod: (filter, row) =>
                  row[filter.id]
                    .toString()
                    .toLowerCase()
                    .includes(filter.value.toString().toLowerCase()),
              },
              { Header: 'Expiration', accessor: 'planEnd' },
              { Header: 'Auto-Renew?', accessor: 'autoRenew' },
              { Header: 'VPN ID', accessor: 'vpnId' },
            ]}
            defaultSorted={[{ id: 'id', asc: true }]}
            defaultPageSize={10}
            SubComponent={row => {
              return (
                <UserEdit
                  className="tableEdit"
                  plans={this.props.plans}
                  updateProfile={this.props.updateUser}
                  error={false}
                  row={row}
                />
              );
            }}
          />
        ) : null}
      </div>
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
    );
  }
}

const mapState = state => {
  return {
    plans: state.miscellaneous.plans,
  };
};

const mapDispatch = dispatch => {
  return {
    updateUser() {
      dispatch(edit());
    },
  };
};

export default connect(mapState)(UserTable);
