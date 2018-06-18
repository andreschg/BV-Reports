import React from 'react';
import { Table, DropdownButton, MenuItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DataService from '../../services/dataService';

class ReportsTable extends React.Component {
  
  onDetailsClick = (index) => {
    return (e) => {
      this.props.history.push(`/report/${index}`);
    }
  }
  
  render() {
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
            { DataService.getReports(this.props.username).map((element, index) => (
              <tr key={`report-${index}`}>
                <td>{ index + 1 }</td>
                <td>{ element.names[0].full }</td>
                <td>{ element.emails[0].email_address }</td>
                <td>
                  <DropdownButton title="Options" id={`report-${index}-options`}>
                    <MenuItem onClick={this.onDetailsClick(index)} eventKey="1">Details</MenuItem>
                    <MenuItem eventKey="2">Delete</MenuItem>
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

export default connect(mapStateToProps)(withRouter(ReportsTable));