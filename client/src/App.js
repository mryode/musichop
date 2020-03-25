import React from 'react';
import PropTypes from 'prop-types';

import { Route, Switch, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/userSelectors';

import Header from './components/Header/Header';
import FirebaseAuth from './components/FirebaseAuth/FirebaseAuth';
import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';
import Shop from './pages/Shop/Shop';
import Checkout from './pages/Checkout/Checkout';

import './App.scss';

function App({ currentUser }) {
  return (
    <div className="App">
      <FirebaseAuth passSignOutTo="Header">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route exact path="/checkout" component={Checkout} />
          <Route
            path="/signin"
            render={() => (currentUser ? <Redirect to="/" /> : <Auth />)}
          />
        </Switch>
      </FirebaseAuth>
    </div>
  );
}

App.propTypes = {
  currentUser: PropTypes.object,
};

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state),
});

export default connect(mapStateToProps)(App);
