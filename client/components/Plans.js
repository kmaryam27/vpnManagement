import React, { Component } from 'react';
import { Button, Divider, Segment, Header } from 'semantic-ui-react';

export default class Plans extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="planTable">
        <div className="plan">
          <Header as="h3" attached="top">
            Plan 1
          </Header>
          <Segment attached>Detail 1</Segment>
          <Segment attached>Detail 2</Segment>
          <Segment attached>Detail 3</Segment>
          <Segment attached>Detail 4</Segment>
          <Segment attached>Detail 5</Segment>
          <Button attached="bottom">Select Plan 1</Button>
        </div>

        <div className="plan">
          <Header as="h3" attached="top">
            Plan 2
          </Header>
          <Segment attached>Detail 1</Segment>
          <Segment attached>Detail 2</Segment>
          <Segment attached>Detail 3</Segment>
          <Segment attached>Detail 4</Segment>
          <Segment attached>Detail 5</Segment>
          <Button attached="bottom">Select Plan 2</Button>
        </div>

        <div className="plan">
          <Header as="h3" attached="top">
            Plan 3
          </Header>
          <Segment attached>Detail 1</Segment>
          <Segment attached>Detail 2</Segment>
          <Segment attached>Detail 3</Segment>
          <Segment attached>Detail 4</Segment>
          <Segment attached>Detail 5</Segment>
          <Button attached="bottom">Select Plan 3</Button>
        </div>
      </div>
    );
  }
}
