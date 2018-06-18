import React from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import DataService from '../../services/dataService';

const ReportsTable = (props) => (
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
        { DataService.getReports(props.username).map((element, index) => (
          <tr>
            <td>{ index + 1 }</td>
            <td>{ element.names[0].full }</td>
            <td>{ element.emails[0].email_address }</td>
            <td>Options</td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
);

const mapStateToProps = (state) => ({
  username: state.user.email
});

export default connect(mapStateToProps)(ReportsTable);