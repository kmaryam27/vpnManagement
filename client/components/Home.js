import React, { Component } from 'react';
import Ip from './Ip';
import { connect } from 'react-redux';

export default function Home(props) {
  return (
    <div>
      <h1>Hello and Welcome to the Home Component!</h1>
      {/* <Ip /> */}
    </div>
  );
}

// const mapState = state => {
//   console.log('home state is', state);
//   return {
//     ip: state.miscellaneous.ip,
//   };
// };
// const mapDispatch = state => {
// return {
// getIP: state.miscellaneous.grabIP,
// };
// };

// export default connect(mapState, mapDispatch)(Home);
