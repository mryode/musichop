import React from 'react';
import PropTypes from 'prop-types';

import { Route, Switch, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import userActions from './redux/user/userActions';
import { selectCurrentUser } from './redux/user/userSelectors';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';
import Shop from './pages/Shop/Shop';
import Contact from './pages/Contact/Contact';
import Checkout from './pages/Checkout/Checkout';

import './App.scss';

function App({ currentUser, checkUserSession }) {
  React.useEffect(() => {
    console.log('here');
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/checkout" component={Checkout} />
        <Route
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <Auth />)}
        />
      </Switch>
    </div>
  );
}

App.propTypes = {
  currentUser: PropTypes.object,
  checkUserSession: PropTypes.func,
};

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(userActions.checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
