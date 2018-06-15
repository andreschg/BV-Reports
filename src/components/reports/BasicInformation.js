import React from 'react';
import { Row, Image, Col, Carousel } from 'react-bootstrap';

const BasicInformation = (props) => (
  <div>
    <Carousel controls={false}>
      {props.data.images.map((element, index) => (
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
          { props.data.names.map((element, index) => (
            <li key={`name-${index}`}>{element.full}</li>
          ))} 
        </ul>
      </Col>
    </Row>
    <Row>
      <Col md={3}><label>Email addresses:</label></Col>
      <Col md={9}>
        <ul>
          { props.data.emails.map((element, index) => (
            <li key={`email-${index}`}>{element.email_address}</li>
          ))} 
        </ul>
      </Col>
    </Row>
    <Row>
      <Col md={3}><label>Phones:</label></Col>
      <Col md={9}>
        <ul>{props.data.phones.map((element, index) => (
          <li key={`phone-${index}`}>{element.number}</li>
        ))}
        </ul>
      </Col>
    </Row>
  </div>
)

export default BasicInformation;