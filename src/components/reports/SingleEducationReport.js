import React from 'react';
import { Panel } from 'react-bootstrap';
import moment from 'moment';

const SingleEducationReport = ({ school, degree, attended, keyId }) => {
  const startDate = moment(attended.start);
  const endDate = moment(attended.end);
  const format = 'MMMM YYYY';
  let messaage = 'No data';
  if (startDate.isValid() && endDate.isValid())
    messaage = `From ${startDate.format(format)} to ${endDate.format(format)}`;
  else if (startDate.isValid() && !endDate.isValid())
    messaage = `Since ${startDate.format(format)}`;

  return (
    <Panel key={keyId}>
      <Panel.Heading>
        {messaage}
      </Panel.Heading>
      <Panel.Body> 
        <p><label>School: </label> {school}</p>
        <p><label>Degree: </label> {degree}</p>
      </Panel.Body>
    </Panel>
  );
}

export default SingleEducationReport;