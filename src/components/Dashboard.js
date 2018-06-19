import React from 'react';
import ReportsGeneratorForm from './ReportsGeneratorForm';
import ReportsTable from './reports/ReportsTable';
import { PageHeader } from 'react-bootstrap';

const Dashboard = (props) => (
  <div>
    <ReportsGeneratorForm history={props.history} />
    <ReportsTable />
  </div>
);

export default Dashboard;
