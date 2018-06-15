import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Grid } from 'react-bootstrap';
import { connect } from 'react-redux';
import BVNavigation from '../components/BVNavigation';
import Dashboard from '../components/Dashboard';
import PrivateRoute from './PrivateRoute';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <BVNavigation />
      <div className="app-body" >
        <Grid md={12} >
          <Switch>
            <PrivateRoute path="/" component={Dashboard} exact={true}/>
          </Switch>
        </Grid>
      </div>
    </div>
  </BrowserRouter>
);

const mapStateToProps = (state) => {
  return {
    auth: state.authenticated,
    currentUser: state.user
  }
}

export default connect(mapStateToProps)(AppRouter);