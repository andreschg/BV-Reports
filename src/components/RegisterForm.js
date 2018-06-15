import React from 'react';
import { Form, FormGroup, FormControl, Button, Row, Col } from 'react-bootstrap';
import * as EmailValidator from 'email-validator';

class RegisterForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pass: '',
      confPass: ''
    };
  }

  checkPassword = () => {
    if (this.state.pass.length < 1) return 'warning';
    return this.state.pass === this.state.confPass ? 'success' : 'error';
  }

  checkEmail = () => EmailValidator.validate(this.state.email) ? 'success' : 'error';

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <Form id="register-form" style={this.props.style}>
        <FormGroup>
          <FormControl type="text" placeholder="Name" />
        </FormGroup>
        <FormGroup validationState={this.checkEmail()}>
          <FormControl
            name="email" 
            type="email" 
            value={this.state.email} 
            onChange={this.onChange}
            placeholder="Email" />
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup>
          <FormControl
            name="pass" 
            value={this.state.pass} 
            type="password" 
            onChange={this.onChange} 
            placeholder="Password" />
        </FormGroup>
        <FormGroup validationState={this.checkPassword()}>
          <FormControl 
            name="confPass"
            value={this.confPass} 
            type="password" 
            onChange={this.onChange} 
            placeholder="Confirm Password" />
          <FormControl.Feedback />
        </FormGroup>
        <Row>
          <Col md={6} mdOffset={3}>
            <Button 
              bsStyle="success" 
              className="btn-full" 
              type="submit" 
              bsSize="large">Register</Button>
          </Col>
        </Row>
    </Form>
    );
  }
} 

export default RegisterForm;