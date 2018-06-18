import React from 'react';
import { Panel, Row, Image, Col, Carousel, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import dataService from '../../services/dataService';

class BasicInformation extends React.Component{

  saveReport = () => {
    dataService.saveReport(this.props.username, this.props.data);
    this.props.history.push('/');
  }

  render() {
    return (
      <Panel className="report_basic-information">
        <Panel.Heading className="green-underline">
          <h3>Basic Information</h3>
        </Panel.Heading>
        <Panel.Body>
          <Carousel className="report-pics" controls={false}>
            {this.props.data.images.map((element, index) => (
            <Carousel.Item key={`pic-${index}`} className="profilePic-container">
              <Image src={element.url} responsive />
            </Carousel.Item>
            ))}
          </Carousel>
            <Col md={4}><label>Names:</label></Col>
            <Col md={8}>
              <ul className="ul-list">
                { this.props.data.names.map((element, index) => (
                  <li key={`name-${index}`}>{element.full}</li>
                ))} 
              </ul>
            </Col>
            <Col md={4}><label>Email addresses:</label></Col>
            <Col md={8}>
              <ul className="ul-list">
                { this.props.data.emails.map((element, index) => (
                  <li key={`email-${index}`}>{element.email_address}</li>
                ))} 
              </ul>
            </Col>
            <Col md={4}><label>Phones:</label></Col>
            <Col md={8}>
              <ul className="ul-list">{ this.props.data.phones.map((element, index) => (
                <li key={`phone-${index}`}>{element.number}</li>
              ))}
              </ul>
            </Col>
          { this.props.isNew && (
            <Row>
              <Col md={12}>
                <Button bsStyle="success" onClick={this.saveReport} className="btn-full" >Save Report</Button>
              </Col>
            </Row>
          )}
        </Panel.Body>
      </Panel>
    );
  }
}

const mapStateToProps = (state) => ({
  username: state.user.email
});

export default withRouter(connect(mapStateToProps)(BasicInformation));