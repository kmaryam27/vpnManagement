import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Login,
  Signup,
  UserHome,
  Home,
  Plans,
  Registration,
  Admin,
  Profile,
  UserManagement,
} from './components';
import { me, grabIp, loadAdmin } from './store';

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  // componentDidUpdate() {
  //   this.props.isAdmin ? this.props.loadInitialAdmin() : null;
  // }

  render() {
    const { isLoggedIn, isAdmin } = this.props;
    console.log('props are', isLoggedIn, isAdmin);

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Registration} />
        <Route path="/plans" component={Plans} />
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route path="/home" component={UserHome} />
            <Route path="/profile" component={Profile} />
            {isAdmin && (
              <Switch>
                <Route path="/admin" component={Admin} />
                <Route path="/users" component={UserManagement} />
              </Switch>
            )}
          </Switch>
        )}
        <Route component={Home} />
      </Switch>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id,
    isAdmin: state.user.isAdmin,
  };
};

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(grabIp());
      dispatch(me());
      dispatch(loadAdmin());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};
