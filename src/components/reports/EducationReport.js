import React from 'react';
import { Panel, Label, Row } from 'react-bootstrap';
import moment from 'moment';
import SingleEducationReport from './SingleEducationReport';

const EducationReport = (props) => { 
  return (
  <div>
    {props.education.map((element) => (
      <SingleEducationReport {...element} />
    ))}
  </div>
  )
}

export default EducationReport;