import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import AppRouter from './routes/AppRouter';
import BVLogin from './components/BVLogin';
import './styles/style.scss';

const App = () => (
  <AppRouter />
);

ReactDOM.render(
  <BVLogin/>,
  document.getElementById('app')
);


