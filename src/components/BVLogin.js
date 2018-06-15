import React from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';

import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import '../scripts/login-register';

const BVLogin = () => (
  <Grid>
    <Row>
      <Col md={6} mdOffset={3}>
        <Panel className="login-panel">
          <Panel.Heading>
            <Row>
              <Col md={6}>
                <a id="login-form-link">Login</a>
              </Col>
              <Col md={6}>
                <a id="register-form-link">Register</a>
              </Col>
            </Row>
          </Panel.Heading>
          <Panel.Body>
            <Row>
              <LoginForm />
              <RegisterForm style={{ display: "none" }}/>
            </Row>
          </Panel.Body> 
        </Panel>
      </Col>
    </Row>
  </Grid>
);

export default BVLogin;