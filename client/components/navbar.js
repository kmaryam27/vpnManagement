import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';
import { Menu } from 'semantic-ui-react';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state;
    return (
      <Menu stackable>
        <Menu.Item
          as={Link}
          to="/home"
          name="home"
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          <img src="https://react.semantic-ui.com/logo.png" />
        </Menu.Item>

        {this.props.isAdmin ? (
          <>
            <Menu.Item
              as={Link}
              to="/messages"
              name="messages"
              active={activeItem === 'mesages'}
              onClick={this.handleItemClick}
            >
              Messages
            </Menu.Item>
            <Menu.Item
              as={Link}
              to="/usermanagement"
              name="usermanagement"
              active={activeItem === 'usermanagement'}
              onClick={this.handleItemClick}
            >
              Manage Users
            </Menu.Item>
            <Menu.Item
              as={Link}
              to="/servermanagement"
              name="servermanagement"
              active={activeItem === 'servermanagement'}
              onClick={this.handleItemClick}
            >
              Manage Servers
            </Menu.Item>
          </>
        ) : null}
        <Menu.Item
          as={Link}
          to="/plans"
          name="plans"
          active={activeItem === 'plans'}
          onClick={this.handleItemClick}
        >
          Plans
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/plans"
          name="plans"
          active={activeItem === 'plans'}
          onClick={this.handleItemClick}
        >
          Cart
        </Menu.Item>
        {this.props.isLoggedIn ? (
          <>
            <Menu.Item
              as={Link}
              to="/profile"
              name="profile"
              active={activeItem === 'profile'}
              onClick={this.handleItemClick}
            >
              Edit Profile
            </Menu.Item>
            <Menu.Item
              name="logout"
              active={activeItem === 'logout'}
              onClick={this.props.handleClick}
            >
              Logout
            </Menu.Item>
          </>
        ) : (
          <>
            <Menu.Item
              as={Link}
              to="/login"
              name="login"
              active={activeItem === 'login'}
              onClick={this.handleItemClick}
            >
              Login
            </Menu.Item>
            <Menu.Item
              as={Link}
              to="/signup"
              name="sign up"
              active={activeItem === 'sign up'}
              onClick={this.handleItemClick}
            >
              Sign Up
            </Menu.Item>
          </>
        )}
      </Menu>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    isAdmin: state.user.isAdmin,
  };
};

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};
