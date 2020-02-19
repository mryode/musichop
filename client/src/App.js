import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import Header from './components/Header/Header';
import FirebaseAuth from './components/FirebaseAuth/FirebaseAuth';
import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';
import Shop from './pages/Shop/Shop';

import './App.scss';

function App({ currentUser }) {
  return (
    <div className="App">
      <FirebaseAuth passSignOutTo="Header">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route
            path="/signin"
            render={() => (currentUser ? <Redirect to="/" /> : <Auth />)}
          />
        </Switch>
      </FirebaseAuth>
      ;
    </div>
  );
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(App);
