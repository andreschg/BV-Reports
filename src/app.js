import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap-sass';
import AppRouter from './routes/AppRouter';
import BVLogin from './components/BVLogin';
import store from './store/configureStore';
import UserService from './services/user.service';
import { userLogin } from './store/actions/userActions';
import './styles/style.scss';

const user = UserService.auth();
if (user) {
  store.dispatch(userLogin(user));
}

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);


