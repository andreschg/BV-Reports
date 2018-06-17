import React from 'react';
import SocialLinks from './SocialLinks';

const OtherInformation = (props) => (
  <SocialLinks social={props.data.social}/>
);

export default OtherInformation;