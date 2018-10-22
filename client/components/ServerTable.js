import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'semantic-ui-react';
import ReactTable from 'react-table';

export default class ServerTable extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  render() {
    let data;
    this.props.servers ? (data = this.props.servers) : (data = data);

    return (
      <div>
        {this.props.servers && this.props.servers.length > 0 ? (
          <ReactTable
            filterable
            defaultFilterMethod={(filter, row) =>
              row[filter.id]
                .toString()
                .toLowerCase()
                .includes(filter.value.toString().toLowerCase())
            }
            data={data}
            columns={[
              {
                Header: 'ID',
                accessor: 'id',
                maxWidth: 50,
                filterMethod: (filter, row) =>
                  row[filter.id].toString() == filter.value.toString(),
              },
              { Header: 'Address', accessor: 'address', maxWidth: 200 },
              { Header: 'Port', accessor: 'port', maxWidth: 75 },
              { Header: 'Country', accessor: 'country' },
            ]}
            defaultSorted={[{ id: 'id', asc: true }]}
            defaultPageSize={10}
          />
        ) : null}
      </div>
    );
  }
}
