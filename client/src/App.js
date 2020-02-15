import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';
import Shop from './pages/Shop/Shop';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/signin" component={Auth} />
      </Switch>
    </div>
  );
}

export default App;
