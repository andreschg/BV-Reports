import React from 'react';
import { Navbar, Nav, NavItem  } from 'react-bootstrap';

const BVNavigation = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="">BV-Reports</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="#">
        Link
      </NavItem>
      <NavItem eventKey={2} href="#">
        Link
      </NavItem>
    </Nav>
  </Navbar>
);

export default BVNavigation;