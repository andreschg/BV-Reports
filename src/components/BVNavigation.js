import React from 'react';
import { Navbar, Nav, NavItem  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserOptions from './UserOption';
import { connect } from 'react-redux';

const BVNavigation = (props) => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">BV-Reports</Link>
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