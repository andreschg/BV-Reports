import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const RemoveReportModal = (props) => (
  <div className="modal-container">
    <Modal bsSize="large" show={props.show}>
      <Modal.Header>
        <Modal.Title>Remove report #{props.reportId}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to delete this report?
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.handleRemove} bsStyle="success">Yes</Button>
          <Button onClick={props.handleClose} >No</Button>
      </Modal.Footer>
    </Modal>
  </div>
);

export default RemoveReportModal;