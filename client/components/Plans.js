import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

export default class Plans extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="planTable">
        <div className="plan one">
          <div className="planTitle">
            <h3>Plan 1</h3>
          </div>
          <div className="planDetail">Detail 1</div>
          <div className="planDetail">Detail 2</div>
          <div className="planDetail">Detail 3</div>
          <div className="planDetail">Detail 4</div>
          <div>Detail 5</div>
          <Button>Select Plan 1</Button>
        </div>
        <div className="plan two">
          <div className="planTitle">
            <h3>Plan 2</h3>
          </div>
          <div className="planDetail">Detail 1</div>
          <div className="planDetail">Detail 2</div>
          <div className="planDetail">Detail 3</div>
          <div className="planDetail">Detail 4</div>
          <div>Detail 5</div>
          <Button>Select Plan 2</Button>
        </div>
        <div className="plan three">
          <div className="planTitle">
            <h3>Plan 3</h3>
          </div>
          <div className="planDetail">Detail 1</div>
          <div className="planDetail">Detail 2</div>
          <div className="planDetail">Detail 3</div>
          <div className="planDetail">Detail 4</div>
          <div>Detail 5</div>
          <Button>Select Plan 3</Button>
        </div>
      </div>
    );
  }
}
