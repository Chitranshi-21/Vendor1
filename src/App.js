import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Login from './Components/Login';
import Admin from './Components/Admin';
import Logout from './Components/Logout';
import Home from './Components/Home';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route  path="/admin" component={Admin}/>
        <Route  path="/logout" component={Logout}/>
        <Route  path="/login" component={Login}/>
      </Switch>
  );
   }
}

export default App;
