import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import FirebaseAuth from './components/FirebaseAuth/FirebaseAuth';
import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';
import Shop from './pages/Shop/Shop';

import './App.scss';

function App() {
  const renderApp = (currentUser, auth) => (
    <div className="App">
      <Header
        currentUser={currentUser}
        handleSignOutClick={() => auth.signOut()}
      />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/signin" component={Auth} />
      </Switch>
    </div>
  );

  return (
    <FirebaseAuth
      render={(currentUser, auth) => renderApp(currentUser, auth)}
    />
  );
}

export default App;
