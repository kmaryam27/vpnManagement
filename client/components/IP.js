import React, { Component } from 'react';
import { connect } from 'react-redux';

export function Ip(props) {
  console.log('rendered');
  console.log('props: ', props);
  return (
    <div>
      <a>Just Confirming We're Here</a>
      {props.ip ? <div>Your IP Address is {props.ip}</div> : null}
    </div>
  );
}

const mapState = state => {
  console.log('ip state is', state);
  return {
    ip: state.miscellaneous.ip,
  };
};
const mapDispatch = state => {
  return {
    // getIP: state.miscellaneous.grabIP,
  };
};

export default connect(mapState, mapDispatch)(Ip);
