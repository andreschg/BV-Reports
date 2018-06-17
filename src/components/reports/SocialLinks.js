import React from 'react';
import { Panel, Col } from 'react-bootstrap';

const SocialLinks = ({ social }) => {
  let fa = '';
  const logoClass = (type) => { 
    switch (type) {
      case 'facebook':
        return 'fa fa-facebook-square';
      case 'twitter':
        return 'fa fa-twitter-square';
      case 'linkedin':
        return 'fa fa-linkedin';
      default:
        return 'fa fa-question-circle';
    }
  }
  return (
    <Panel>
      <Panel.Heading>
        Social Networks
      </Panel.Heading>
      <Panel.Body>
        <div>
          {social.map((element, index) => (
            <Col md={2}>
              <a className="social-link" href={element.url} target="_blank"><i className={logoClass(element.type)}></i></a>
            </Col>
          ))}
        </div>
      </Panel.Body>
    </Panel>
  );
};

export default SocialLinks;