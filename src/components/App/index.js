import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import PasswordChangePage from '../PasswordChange';
import HomePage from '../Home';
import AdminPage from '../Admin';
import Account from '../Account';
import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';

const App = () => (
  <Router>
    <div>
      <Navigation />
      <hr />
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={ROUTES.PASSWORD_CHANGE} component={PasswordChangePage} />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
      <Route path={ROUTES.ACCOUNT} component={Account} />
    </div>
  </Router>
);

export default withAuthentication(App);
