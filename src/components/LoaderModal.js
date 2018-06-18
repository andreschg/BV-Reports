import React from 'react';
import { Modal, Col, Row, Grid } from 'react-bootstrap';

const LoaderModal = (props) => (
  <Modal className="loader-modal" show={props.show} bsSize="large">
    <Modal.Body>
        <Row>
          <Col mdOffset={1} md={10}>
            <div className="loader-container">
              <div className="loader"></div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col mdOffset={1} md={10}>
            <h2>Loading...</h2>
          </Col>
        </Row>
    </Modal.Body>
  </Modal>
);

export default LoaderModal;