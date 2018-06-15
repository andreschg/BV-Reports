import React from 'react';
import { Panel } from 'react-bootstrap';
import moment from 'moment';

const SingleJobReport = ({ company, title, industry, period, keyId }) => {
  const startDate = moment(period.start);
  const endDate = moment(period.end);
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
        <p><label>Company: </label> {company}</p>
        <p><label>Title: </label> {title}</p>
        <p><label>industry: </label> {industry}</p>
      </Panel.Body>
    </Panel>
  );
}

export default SingleJobReport;