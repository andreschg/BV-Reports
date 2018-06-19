import React from 'react';
import { Table, DropdownButton, MenuItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DataService from '../../services/dataService';
import RemoveReportModal from './RemoveReportModal';
import LoaderModal from '../LoaderModal';

class ReportsTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      reportSelected: 0,
      showRemoveModal: false,
      reports: []
    }
  }

  componentDidMount() {
    this.updateReports();
  }

  updateReports = () => {
    const reports = DataService.getReports(this.props.username);
    this.setState({
      reports
    });
  }
   
  onDetailsClick = (index) => (e) => {
    this.props.history.push(`/report/${index}`);
  }

  onDeleteClick = (index) => (e) => {
    this.setState({
      showRemoveModal: true,
      reportSelected: index
    });
  }

  handleCloseModal = () => {
    this.setState({
      showRemoveModal: false
    });
  }

  handleRemove = () => {
    DataService.removeReport(this.props.username, this.state.reportSelected);
    this.updateReports();
    this.setState({
      showRemoveModal: false
    })
  }
  
  render() {
    return (
      <div>
        <RemoveReportModal 
          reportId={this.state.reportSelected + 1} 
          show={this.state.showRemoveModal} 
          handleClose={this.handleCloseModal}
          handleRemove={this.handleRemove} />
        <Table className="reports-table" responsive striped >
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
            { this.state.reports.map((element, index) => (
              <tr key={`report-${index}`}>
                <td>{ index + 1 }</td>
                <td>{ element.names[0].full }</td>
                <td>{ element.emails[0].email_address }</td>
                <td>
                  <DropdownButton bsStyle="success" title="Options" id={`report-${index}-options`}>
                    <MenuItem onClick={this.onDetailsClick(index)} eventKey="1">Details</MenuItem>
                    <MenuItem onClick={this.onDeleteClick(index)}  eventKey="2">Delete</MenuItem>
                  </DropdownButton>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  username: state.user.email
});

export default withRouter(connect(mapStateToProps)(ReportsTable));