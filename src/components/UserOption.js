import React from 'react';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import { userLogout } from '../store/actions/userActions';
import UserService from '../services/user.service';

class UserOptions extends React.Component {

  onClick = (e) => {
    e.preventDefault();
    UserService.logout();
    this.props.dispatch(userLogout());
  }

  render() {
    return  (
      <Nav className="navbar-user-options" pullRight>
        <NavDropdown eventKey={3} title={this.props.userName} id="basic-nav-dropdown">
          <MenuItem eventKey={3.1} onClick={this.onClick}>Logout</MenuItem>
        </NavDropdown>
      </Nav>
    );
  }
}

export default connect()(UserOptions);