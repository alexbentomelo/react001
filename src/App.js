import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar'
import './App.css';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import axios from 'axios';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Home from './components/pages/Home';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App = () => {

 /* async componentDidMount(){

    this.setState({ loading: true});
    const res = await axios.get('https://api.github.com/users');
    //const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    this.setState({ users: res.data, loading: false});
  }*/
    return (
     
      <GithubState>
        <AlertState>
      <Router>
      <div className="App">
       <Navbar title='Github Finder' icon='fab fa-github'/>
       <div className="container">
       <Alert />
       <Switch>
         <Route exact path='/' component={Home}/>
         <Route exact path='/about' component={About}/>
         <Route exact path='/user/:login' component={User}/>
         <Route component={NotFound}/>
         )}/>
       </Switch>
       
       </div>
      </div>
      </Router>
      </AlertState>
      </GithubState>
    );
  
  
}

export default App;
