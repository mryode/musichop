import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
