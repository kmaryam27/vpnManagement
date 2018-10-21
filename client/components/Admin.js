import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from '../history';
import { loadAdmin } from '../store';

export class Admin extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    // console.log('component has mounted');
    // this.props.loadData(); // not sure if we need this????
  }

  render() {
    return <div>Congrats you are logged in!</div>;
  }
}

const mapState = state => {
  console.log('state in Admin is', state);
  return {
    isLoggedIn: !!state.user.id,
    isAdmin: state.user.isAdmin,
  };
};

const mapDispatch = dispatch => {
  return {
    loadData() {
      console.log('load data hit');
      dispatch(loadAdmin());
    },
  };
};

export default connect(mapState, mapDispatch)(Admin);
