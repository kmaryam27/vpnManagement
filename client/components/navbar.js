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
          to="/"
          name="home"
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          <img src="https://react.semantic-ui.com/logo.png" />
        </Menu.Item>
        {this.props.isLoggedIn ? (
          <div>
            <Menu.Item
              as={Link}
              to="/home"
              name="home"
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            >
              Home
            </Menu.Item>
            <Menu.Item
              name="logout"
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            >
              <a href="#" onClick={this.props.handleClick}>
                Logout
              </a>
            </Menu.Item>
            {this.props.isAdmin ? (
              <div>
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
              </div>
            ) : null}
          </div>
        ) : (
          <div className="navBar">
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
          </div>
        )}
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
      </Menu>
    );
  }
}

//   <div>
//     <a href="/home">
//       <h1>CryptoBanker's VPN Management Suite</h1>
//     </a>
//     <nav>
//       {isLoggedIn ? (
//         <div>
//           {/* The navbar will show these links after you log in */}
//           <Link to="/home">Home</Link>
//           <a href="#" onClick={handleClick}>
//             Logout
//           </a>
//         </div>
//       ) : (
//         <div>
//           {/* The navbar will show these links before you log in */}
//           <Link to="/login">Login</Link>
//           <Link to="/signup">Sign Up</Link>
//         </div>
//       )}
//       <Link to="/plans">Plans</Link>
//     </nav>
//     <hr />
//   </div>
// );

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
