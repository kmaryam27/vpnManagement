import React from 'react';
import { connect } from 'react-redux';
import { me, update } from '../store';
import { Form, Button } from 'semantic-ui-react';

export function Profile(props) {
  return (
    <div>
      <Form className="profile" onSubmit={props.updateProfile} error>
        <Form.Group widths="equal">
          <Form.Field>
            <label>First Name</label>
            <input name="firstName" defaultValue={props.user.firstName} />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input name="lastName" defaultValue={props.user.lastName} />
          </Form.Field>
        </Form.Group>
        <Form.Field>
          <label>Email Address</label>
          <input name="email" value={props.user.email} disabled />
          {props.error && props.error.email !== undefined ? (
            <Message
              error
              header="Email Already Registered"
              content="Please Try Another Email"
            />
          ) : null}
        </Form.Field>
        <Form.Field>
          <label>New Password</label>
          <input name="newPassword" type="password" />
        </Form.Field>
        <Form.Field>
          <label>Current Password</label>
          <input name="currentPassword" type="password" />
          {props.error && props.error.password !== undefined ? (
            <Message
              error
              header="Password does not meet requirements"
              content="Password should be at least 8 characters long"
            />
          ) : null}
        </Form.Field>
        <Button type="submit">Update Profile</Button>
      </Form>
    </div>
  );
}

const mapState = state => {
  return {
    user: state.user,
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
          currentPassword,
        })
      );
    },
  };
};

export default connect(mapState, mapDispatch)(Profile);

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
