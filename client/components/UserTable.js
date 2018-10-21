import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'semantic-ui-react';

export default function UserTable(props) {
  console.log('props are', props.users);
  return (
    <Table striped>
      <Table.Header>
        <Table.HeaderCell>ID</Table.HeaderCell>
        <Table.HeaderCell>Email</Table.HeaderCell>
        <Table.HeaderCell>First Name</Table.HeaderCell>
        <Table.HeaderCell>Last Name</Table.HeaderCell>
        <Table.HeaderCell>Plan</Table.HeaderCell>
        <Table.HeaderCell>Expiration</Table.HeaderCell>
        <Table.HeaderCell>Auto Renew</Table.HeaderCell>
        <Table.HeaderCell>VPN ID</Table.HeaderCell>
      </Table.Header>
      {props.users ? (
        <Table.Body>
          {props.users.map(user => {
            return (
              <Table.Row key={user.id}>
                <Table.Cell>{user.id}</Table.Cell>
                <Table.Cell>{user.email}</Table.Cell>
                <Table.Cell>{user.firstName}</Table.Cell>
                <Table.Cell>{user.lastName}</Table.Cell>
                <Table.Cell>{user.planId}</Table.Cell>
                <Table.Cell>{user.planEnd}</Table.Cell>
                <Table.Cell>{user.autoRenew.toString()}</Table.Cell>
                <Table.Cell>{user.vpnId}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      ) : null}
    </Table>
  );
}

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
