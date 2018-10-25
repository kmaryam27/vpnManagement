import React, { Component } from 'react';
import { connect } from 'react-redux';
import { me, update } from '../../store';
import { Form, Button, Select, Dropdown } from 'semantic-ui-react';
import { edit } from '../../store';

export class UserEdit extends Component {
  constructor(props) {
    super(props);
    this.state = { plan: '' };
    console.log('user is', this.props.row.original);
  }

  handleSelect = (e, { name, value }) => {
    console.log('event target name is', name, e.target);
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log('event is', e);
    this.setState({
      ...this.state,
      ['firstName']: e.target.firstName.value,
      ['lastName']: e.target.lastName.value,
      ['email']: e.target.email.value
    });
  };

  render() {
    let plans = [];
    if (this.props.plans) {
      this.props.plans.forEach(plan => {
        plans.push({ text: plan.name, value: plan.id });
      });
    }

    const autoRenew = [
      { text: 'true', value: 'true' },
      { text: 'false', value: 'false' }
    ];
    return (
      <Form className={this.props.className} onSubmit={this.handleSubmit} error>
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
          <Form.Select
            name={'plan'}
            label="Plan"
            placeholder="Select a Plan"
            fluid
            selection
            options={plans}
            onChange={this.handleSelect}
            // loading={this.props.plans ? false : true}
            // value={this.props.row.original.plan}
          />
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
      console.log('target is', evt.target.plan);
      evt.preventDefault();
      const firstName = evt.target.firstName.value || undefined;
      const lastName = evt.target.lastName.value || undefined;
      const plan = evt.target.plan.value || undefined;
      const expiration = evt.target.expiration.value || undefined;
      const renew = evt.target.renew.value || undefined;

      console.log('new user is', {
        firstName,
        lastName,
        plan,
        expiration,
        renew
      });

      dispatch(
        update({
          firstName,
          lastName,
          email,
          plan,
          expiration,
          renew
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
