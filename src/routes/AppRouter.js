import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Grid } from 'react-bootstrap';
import BVNavigation from '../components/BVNavigation';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <BVNavigation />
      <div className="app-body" >
        <Grid md={12} >
          <Switch>
          </Switch>
        </Grid>
      </div>
    </div>
  </BrowserRouter>
);

export default AppRouter;