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

  onClick = (e) => {
    e.preventDefault();
    this.props.history.push(`report?email=${this.state.email}`);
  }
  
  render() {
    return (
        <FormGroup>
          <InputGroup>
            <InputGroup.Button>
              <Button onClick={this.onClick}>Generate Report</Button>
            </InputGroup.Button>
            <FormControl 
              type="email" 
              value={this.state.email}
              onChange={this.onChange}/>
          </InputGroup>
        </FormGroup>
    );
  }
}

export default ReportsGeneratorForm;