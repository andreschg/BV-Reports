import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import EducationReport from './EducationReport';

const AnotherInformation = (props) => (
  <Tabs id="another-info-tabs">
    <Tab title="Education">
      <EducationReport education={props.data.educations} />
    </Tab>
    <Tab title="Jobs">

    </Tab>
    <Tab title="Other"> 

    </Tab>
  </Tabs>
);

export default AnotherInformation;