import React from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';

import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

class BVLogin extends React.Component {

  onClickLogin = (e) => {
    $("#login-form").delay(100).fadeIn(100);
    $("#register-form").fadeOut(100);
    $('#register-form-link').removeClass('active');
    $('#login-form-link').addClass('active');
    e.preventDefault();
  }

  onClickRegister = (e) => {
    $("#register-form").delay(100).fadeIn(100);
    $("#login-form").fadeOut(100);
    $('#login-form-link').removeClass('active');
    $('#register-form-link').addClass('active');
    e.preventDefault();
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col md={6} mdOffset={3}>
            <Panel className="login-panel">
              <Panel.Heading>
                <Row>
                  <Col md={6}>
                    <a onClick={this.onClickLogin} id="login-form-link" className="active">Login</a>
                  </Col>
                  <Col md={6}>
                    <a onClick={this.onClickRegister} id="register-form-link">Register</a>
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
  }
}

export default BVLogin;