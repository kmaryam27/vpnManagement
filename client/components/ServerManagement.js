import React from 'react';
import { connect } from 'react-redux';
import ServerTable from './ServerTable';

export function ServerManagement(props) {
  return <ServerTable servers={props.servers} />;
}

const mapState = state => {
  return {
    servers: state.miscellaneous.servers,
  };
};

export default connect(mapState)(ServerManagement);
