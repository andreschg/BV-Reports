import React from 'react';
import { Row, Image, Col } from 'react-bootstrap';

const BasicInformation = (props) => (
  <div>
    <Image src={props.data.images[2].url} rounded responsive />
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
        ))}</ul>
      </Col>
    </Row>
  </div>
)

export default BasicInformation;