import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from 'semantic-ui-react';

export function Ip(props) {
  let description = 'Your IP Address is ' + props.ip;
  return (
    <div className="ipBox">
      {props.ip ? (
        <Card fluid header="You Are Not Protected!" description={description} />
      ) : null}
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
