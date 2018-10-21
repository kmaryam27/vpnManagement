import React from 'react';
import { connect } from 'react-redux';
import UserTable from './UserTable';

export function UserManagement(props) {
  return <UserTable users={props.users} />;
}

const mapState = state => {
  return {
    users: state.admin.adminData,
  };
};

const mapDispatch = dispatch => {
  return {
    //something
  };
};

export default connect(mapState, mapDispatch)(UserManagement);
