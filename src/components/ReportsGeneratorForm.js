import React from 'react';
import { Form, FormGroup, FormControl, InputGroup, Button} from 'react-bootstrap';

class ReportsGeneratorForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: ''
    }
  }

  onChange = (e) => {
    this.setState({
      email: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.history.push({
      pathname: '/generate-report',
      search: `?email=${this.state.email}`
    });
  }
  
  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <FormGroup>
          <InputGroup>
            <InputGroup.Button>
              <Button>Generate Report</Button>
            </InputGroup.Button>
            <FormControl 
              type="email" 
              value={this.state.email}
              onChange={this.onChange}/>
          </InputGroup>
        </FormGroup>
      </Form>
    );
  }
}

export default ReportsGeneratorForm;