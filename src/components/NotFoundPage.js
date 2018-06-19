import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <Jumbotron>
    <h2>Error 404 - Not Found</h2>
    <p>Go <Link to="/">home</Link></p>
  </Jumbotron>
);

export default NotFoundPage;