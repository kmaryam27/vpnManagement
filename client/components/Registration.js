import React from 'react';
import { connect } from 'react-redux';
import { Form, Button, Message } from 'semantic-ui-react';
import { register } from '../store';

export function Registration(props) {
  console.log('error props', props.error !== undefined);
  return (
    <Form className="registration" onSubmit={props.handleRegistration} error>
      <Form.Group widths="equal">
        <Form.Field>
          <label>First Name</label>
          <input name="firstName" placeholder="First Name" />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input name="lastName" placeholder="Last Name" />
        </Form.Field>
      </Form.Group>
      <Form.Field>
        <label>Email Address</label>
        <input name="email" placeholder="Email Address" />
        {props.error.email !== undefined ? (
          <Message
            error
            header="Email Already Registered"
            content="Please Try Another Email"
          />
        ) : null}
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input name="password" placeholder="Password" type="password" />
        {props.error.password !== undefined ? (
          <Message
            error
            header="Password does not meat requirements"
            content="Password should be at least 8 characters long"
          />
        ) : null}
      </Form.Field>
      <Button type="submit">Register</Button>
    </Form>
  );
}

const mapState = state => {
  console.log('state is', state);
  return {
    userId: state.user.id,
    error: state.user.error,
  };
};

const mapDispatch = dispatch => {
  return {
    handleRegistration(evt) {
      evt.preventDefault();
      const firstName = evt.target.firstName.value;
      const lastName = evt.target.lastName.value;
      const email = evt.target.email.value;
      const password = evt.target.password.value;
      dispatch(register({ firstName, lastName, email, password }));
    },
  };
};

export default connect(mapState, mapDispatch)(Registration);
