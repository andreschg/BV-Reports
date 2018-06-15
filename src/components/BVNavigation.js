import React from 'react';
import { Navbar, Nav, NavItem  } from 'react-bootstrap';
import UserOptions from './UserOption';
import { connect } from 'react-redux';

const BVNavigation = (props) => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="">BV-Reports</a>
      </Navbar.Brand>
    </Navbar.Header>
    { props.isAuthenticated && <UserOptions userName={props.userName} /> }
  </Navbar>
);

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.user.email && !!state.user.password,
  userName: state.user.name
});

export default connect(mapStateToProps)(BVNavigation);