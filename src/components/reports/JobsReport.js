import React from 'react';
import SingleJobReport from './SingleJobReport';
const JobsReport = (props) => (
  <div>
    { props.jobs.map((element, index) => (
      <SingleJobReport key={`job-${index}`} keyId={`job-${index}`} {...element} />
    ) )}
  </div>
);

export default JobsReport;