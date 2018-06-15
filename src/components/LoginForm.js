import React from 'react';
import { Form, FormGroup, FormControl, Button, Row, Col } from 'react-bootstrap';

const LoginForm = () => (
  <Form id="login-form">
    <FormGroup>
      <FormControl type="email" placeholder="Email" />
    </FormGroup>
    <FormGroup>
      <FormControl type="password" placeholder="Password" />
    </FormGroup>
    <Row>
      <Col md={6} mdOffset={3}>
        <Button bsStyle="success" className="btn-full" type="submit" bsSize="large">Login</Button>
      </Col>
    </Row>
  </Form>
);

export default LoginForm;