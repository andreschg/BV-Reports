import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Grid } from 'react-bootstrap';
import { connect } from 'react-redux';
import BVNavigation from '../components/BVNavigation';
import Dashboard from '../components/Dashboard';
import PrivateRoute from './PrivateRoute';
import SingleReport from '../components/reports/SingleReport';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <BVNavigation />
      <div className="app-body" >
        <Grid md={12} >
          <Switch>
            <PrivateRoute path="/" component={Dashboard} exact={true}/>
            <PrivateRoute path="/generate-report/:email" component={() => (
              <SingleReport isNew={true} />
            )} />
            <PrivateRoute path="/report/:id" component={() => (
              <SingleReport isNew={false} />
            )} />
          </Switch>
        </Grid>
      </div>
    </div>
  </BrowserRouter>
);

const mapStateToProps = (state) => {
  return {
    auth: state.authenticated
  }
}

export default connect(mapStateToProps)(AppRouter);