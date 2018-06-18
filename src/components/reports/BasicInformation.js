import React from 'react';
import { Row, Image, Col, Carousel, Button } from 'react-bootstrap';
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
      <div>
        <Carousel controls={false}>
          {this.props.data.images.map((element, index) => (
          <Carousel.Item key={`pic-${index}`} className="profilePic-container">
            <Image src={element.url} rounded responsive />
          </Carousel.Item>
          ))}
        </Carousel>
        <h2>Basic Information</h2>
        <Row>
          <Col md={3}><label>Names:</label></Col>
          <Col md={9}>
            <ul>
              { this.props.data.names.map((element, index) => (
                <li key={`name-${index}`}>{element.full}</li>
              ))} 
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={3}><label>Email addresses:</label></Col>
          <Col md={9}>
            <ul>
              { this.props.data.emails.map((element, index) => (
                <li key={`email-${index}`}>{element.email_address}</li>
              ))} 
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={3}><label>Phones:</label></Col>
          <Col md={9}>
            <ul>{ this.props.data.phones.map((element, index) => (
              <li key={`phone-${index}`}>{element.number}</li>
            ))}
            </ul>
          </Col>
        </Row>
        { this.props.isNew && (
          <Row>
            <Col md={12}>
              <Button bsStyle="success" onClick={this.saveReport} className="btn-full" >Save Report</Button>
            </Col>
          </Row>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  username: state.user.email
});

export default connect(mapStateToProps)(withRouter(BasicInformation));