import React from 'react';
import { connect } from 'react-redux';

export function Admin(props) {
  return (
    <div>
      <a>Something here</a>
    </div>
  );
}

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    isAdmin: state.user.isAdmin,
  };
};

export default connect(mapState)(Admin);
