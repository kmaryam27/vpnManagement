import React from 'react';
import { connect } from 'react-redux';

export function IP(props) {
  if (props.getIP) {
    props.getIP();
  } else {
    console.log('props: ', props);
  }
  return (
    <div>
      <a>Just Confirming We're Here</a>
      {props.ip != undefined ? <div>Your IP Address is + props.ip</div> : null}
    </div>
  );
}

const mapState = state => {
  return {
    ip: state.ip,
  };
};

const mapDispatch = dispatch => {
  return {
    // getIP: state.miscellaneous.grabIP,
  };
};

export default connect(mapState, mapDispatch)(IP);
