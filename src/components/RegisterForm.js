import React from 'react';
import { Form, FormGroup, FormControl, HelpBlock, Button, Row, Col } from 'react-bootstrap';
import * as EmailValidator from 'email-validator';
import * as PassHash from 'password-hash';

class RegisterForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      pass: '',
      confPass: '',
      errorMessage: ''
    };
  }

  checkPassword = () => {
    if (this.state.pass.length < 1) return 'warning';
    return this.state.pass === this.state.confPass ? 'success' : 'error';
  }

  checkEmail = () => {
    if (EmailValidator.validate(this.state.email)) {
      return localStorage.getItem(this.state.email) !== null ? "error" : "success";
    } else {
      return "error";
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onEmailChange = (e) => {
    let errorMessage = '';
    const email = e.target.value;
    if (EmailValidator.validate(email)) {
      errorMessage = localStorage.getItem(email) !== null ? 'This account is already registered.' : '';
    } else {
      errorMessage = 'Invalid email format.';
    }
    this.setState({
      errorMessage,
      email
    })
  }

  onSubmit = (e) => {  
    e.preventDefault();
    let current = localStorage.getItem(this.state.email);
    if (current === null) {
      const json = JSON.stringify({
        name: this.state.name,
        pass: PassHash.generate(this.state.pass),
        reports: []
      });
      localStorage.setItem(this.state.email, json);
    }
  }

  render() {
    return (
      <Form id="register-form" style={this.props.style} onSubmit={this.onSubmit}>
        <FormGroup>
          <FormControl 
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.onChange} 
            placeholder="Name" />
        </FormGroup>
        <FormGroup validationState={this.checkEmail()}>
          <FormControl
            name="email" 
            type="email" 
            value={this.state.email} 
            onChange={this.onEmailChange}
            placeholder="Email" />
          <FormControl.Feedback />
          <HelpBlock>{this.state.errorMessage}</HelpBlock>
        </FormGroup>
        <FormGroup>
          <FormControl
            name="pass" 
            type="password" 
            onChange={this.onChange} 
            placeholder="Password" />
        </FormGroup>
        <FormGroup validationState={this.checkPassword()}>
          <FormControl 
            name="confPass"
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
              onSubmit={this.onSubmit}
              bsSize="large">Register</Button>
          </Col>
        </Row>
    </Form>
    );
  }
} 

export default RegisterForm;