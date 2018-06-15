import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap';
import AppRouter from './routes/AppRouter';
import BVLogin from './components/BVLogin';
import store from './store/configureStore';
import './styles/style.scss';

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);


