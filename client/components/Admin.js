import React from 'react';
import { connect } from 'react-redux';
import history from '../history';

export function Admin(props) {
  return <div>You are logged in!</div>;
}

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    isAdmin: state.user.isAdmin,
  };
};

export default connect(mapState)(Admin);
