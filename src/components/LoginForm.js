import React from 'react';
import { Form, FormGroup, FormControl, Button, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import UserService from '../services/user.service';
import { userLogin } from '../store/actions/userActions';

class LoginForm  extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pass: ''
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit = () => {
    const newUser = UserService.login(this.state.email, this.state.pass);
    if (newUser) {
      this.props.dispatch(userLogin(newUser));
    }
  }
  
  render() {
    return (
      <Form id="login-form" onSubmit={this.onSubmit} >
        <FormGroup>
          <FormControl 
            name="email" 
            type="email" 
            onChange={this.onChange} 
            placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <FormControl 
            name="pass" 
            type="password" 
            onChange={this.onChange} 
            placeholder="Password" />
        </FormGroup>
        <Row>
          <Col md={6} mdOffset={3}>
            <Button 
              bsStyle="success" 
              className="btn-full" 
              type="submit" 
              bsSize="large">Login</Button>
          </Col>
        </Row>
      </Form>
    );
  }

}

export default connect()(LoginForm);