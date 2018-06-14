import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import AppRouter from './routes/AppRouter';
import './styles/style.scss';

const App = () => (
  <AppRouter />
);

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);


