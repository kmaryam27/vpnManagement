import React, { Component } from 'react';
import { connect } from 'react-redux';
import { me, update } from '../../store';
import { Form, Button, Dropdown } from 'semantic-ui-react';
import { edit } from '../../store';

export class UserEdit extends Component {
  constructor() {
    super();
    this.state = { plan: '' };
  }

  handleSelect = (e, { value }) => {
    this.setState({ plan: value });
  };

  render() {
    let plans = [];
    if (this.props.plans) {
      this.props.plans.forEach(plan => {
        plans.push({ text: plan.name, value: plan.name });
      });
    }

    const autoRenew = [
      { text: 'true', value: 'true' },
      { text: 'false', value: 'false' }
    ];
    return (
      <Form
        className={this.props.className}
        onSubmit={this.props.updateProfile}
        error
      >
        <Form.Group widths="equal">
          <Form.Field>
            <label>First Name</label>
            <input
              name="firstName"
              defaultValue={this.props.row.original.firstName}
            />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input
              name="lastName"
              defaultValue={this.props.row.original.lastName}
            />
          </Form.Field>
        </Form.Group>
        <Form.Field>
          <label>Email Address</label>
          <input name="email" value={this.props.row.original.email} disabled />
          {this.props.error && this.props.error.email !== undefined ? (
            <Message
              error
              header="Email Already Registered"
              content="Please Try Another Email"
            />
          ) : null}
        </Form.Field>
        <Form.Group widths="equal">
          <Form.Field>
            <label>Plan</label>
            <Dropdown
              name="plan"
              placeholder="Select a Plan"
              fluid
              selection
              options={plans}
              onChange={this.handleSelect}
              loading={this.props.plans ? false : true}
            />
          </Form.Field>
          <Form.Field>
            <label>Expiration Date</label>
            <input
              name="expiration"
              defaultValue={this.props.row.original.planEnd}
            />
          </Form.Field>
          <Form.Field>
            <label>Auto Renew?</label>
            <Dropdown
              name="renew"
              fluid
              selection
              options={autoRenew}
              defaultValue={
                this.props.row.original.autoRenew == 'true'
                  ? autoRenew[0].value
                  : autoRenew[1].value
              }
            />
          </Form.Field>
        </Form.Group>
        <Button type="submit">Update Profile</Button>
      </Form>
    );
  }
}

const mapState = state => {
  return {
    user: state.user,
    plans: state.miscellaneous.plans
  };
};

const mapDispatch = dispatch => {
  return {
    loadProfile: function() {
      dispatch(me());
    },
    updateProfile: function(evt) {
      evt.preventDefault();
      const firstName = evt.target.firstName.value || undefined;
      const lastName = evt.target.lastName.value || undefined;
      const email = evt.target.email.value || undefined;
      const newPassword = evt.target.newPassword.value || undefined;
      const currentPassword = evt.target.currentPassword.value || undefined;
      dispatch(
        update({
          firstName,
          lastName,
          email,
          newPassword,
          currentPassword
        })
      );
    }
  };
};

export default connect(mapState, mapDispatch)(UserEdit);

{
  /* <Form.Group widths="equal">
<Form.Field>
  <label>First Name</label>
  <input name="firstName" placeholder={props.row.original.port} />
</Form.Field>
<Form.Field>
  <label>Last Name</label>
  <input name="lastName" placeholder={'props.user.lastName'} />
</Form.Field>
</Form.Group>
<Form.Field>
<label>Email Address</label>
<input name="email" placeholder={'props.user.email'} />
{props.error && props.error.email !== undefined ? (
  <Message
    error
    header="Email Already Registered"
    content="Please Try Another Email"
  />
) : null}
</Form.Field> */
}
