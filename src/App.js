import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Nav from './components/Nav.js';
import Labeller from './containers/Labeller.js';
import Browser from './containers/Browser.js';
import './style/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Switch>
          <Route exact path='/' component={() => <Browser/> }/>
          <Route path='/labeller' component={() => <Labeller/> }/>
        </Switch>
      </div>
    );
  }
}

export default App;
