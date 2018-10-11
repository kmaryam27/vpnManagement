import React, { Component } from 'react';
import { IP } from './IP';
import { connect } from 'react-redux';

export function Home(props) {
  return (
    <div>
      <h1>Hello and Welcome to the Home Component!</h1>
      {/* <IP /> */}
    </div>
  );
}

const mapDispatch = state => {
  return {
    // getIP: state.miscellaneous.grabIP,
  };
};

export default connect(null, mapDispatch)(Home);
