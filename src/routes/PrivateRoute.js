import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import BVLogin from '../components/BVLogin';

export const PrivateRoute = ({ 
  isAuthenticated, 
  component: Component,
  ...rest
}) => (
  <Route {...rest} component={(props) => 
    isAuthenticated ? (
    <div>
      <Component {...props} />
    </div> ) : (<BVLogin/>) 
  }/>
);

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.user.email && !!state.user.password,
});

export default connect(mapStateToProps)(withRouter(PrivateRoute));