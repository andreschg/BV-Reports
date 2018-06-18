import React from 'react';
import moment from 'moment';
import SingleEducationReport from './SingleEducationReport';

const EducationReport = (props) => { 
  return (
  <div>
    {props.education.map((element, index) => (
      <SingleEducationReport keyId={`ed-${index}`} key={`ed-${index}`} {...element} />
    ))}
  </div>
  )
}

export default EducationReport;