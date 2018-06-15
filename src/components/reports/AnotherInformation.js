import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import EducationReport from './EducationReport';
import JobsReport from './JobsReport';

const AnotherInformation = (props) => (
  <Tabs defaultActiveKey={1} id="another-info-tabs">
    <Tab eventKey={1} title="Education">
      <EducationReport education={props.data.educations} />
    </Tab>
    <Tab eventKey={2} title="Jobs">
      <JobsReport jobs={props.data.jobs} />
    </Tab>
    <Tab eventKey={3} title="Other"> 

    </Tab>
  </Tabs>
);

export default AnotherInformation;