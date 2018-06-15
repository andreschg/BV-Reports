import React from 'react';
import SingleJobReport from './SingleJobReport';
const JobsReport = (props) => (
  <div>
    { props.jobs.map((element, index) => (
      <SingleJobReport keyId={`job-${index}`} {...element} />
    ) )}
  </div>
);

export default JobsReport;