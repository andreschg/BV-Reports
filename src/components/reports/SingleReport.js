import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import DataService from '../../services/dataService';
import BasicInformation from './BasicInformation';
import AnotherInformation from './AnotherInformation';

class SingleReport extends React.Component {

  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  componentDidMount() {
    DataService.getReportFromApi('skip.suva@gmail.com')
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
          <div>
            <Col md={3}>
              <BasicInformation data={this.state.data} isNew={this.props.isNew}/>
            </Col>
            <Col md={9}>
              <AnotherInformation data={this.state.data} />
            </Col>
          </div>
          ) : (
            <p>Loading...</p>
          ) }
      </div>
    )
  }
}

export default SingleReport;