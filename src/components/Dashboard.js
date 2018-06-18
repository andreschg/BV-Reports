import React from 'react';
import ReportsGeneratorForm from './ReportsGeneratorForm';
import ReportsTable from './reports/ReportsTable';

const Dashboard = (props) => (
  <div>
    <ReportsGeneratorForm history={props.history} />
    <ReportsTable />
  </div>
);

export default Dashboard;
