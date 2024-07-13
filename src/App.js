import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage';
import ConfirmationPage from './components/ConfirmationPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import AdminPage from './components/AdminPage';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/book/:carId" component={BookingPage} />
      <Route path="/confirmation/:bookingNo" component={ConfirmationPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/admin" component={AdminPage} />
    </Switch>
  </Router>
);

export default App;
