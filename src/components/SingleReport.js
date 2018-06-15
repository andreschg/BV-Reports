import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import DataService from '../services/dataService';
import BasicInformation from './BasicInformation';

class SingleReport extends React.Component {

  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  componentDidMount() {
    DataService.getReport('skip.suva@gmail.com')
      .then((response) => {
        console.log(response);
        this.setState({
          data:  response.data
        });     
    });
  }

  render() {
    return (
      <div>
        {this.state.data ? (
          <Col md={3}>
            <BasicInformation data={this.state.data} />
          </Col>) : (
            <p>Loading...</p>
          ) }
      </div>
    )
  }
}

export default SingleReport;