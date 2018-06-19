import React from 'react';
import { Modal, Button } from 'react-bootstrap';

class RemoveReportModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: this.props.show
    }
  }

  render() {
    return (
      <div className="modal-container">
        <Modal bsSize="large" show={this.props.show}>
            <Modal.Header>
              <Modal.Title>Remove report #{this.props.reportId}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Are you sure you want to delete this report?
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.handleRemove} bsStyle="success">Yes</Button>
              <Button onClick={this.props.handleClose} >No</Button>
            </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default RemoveReportModal;