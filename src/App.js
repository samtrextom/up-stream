import React from 'react';
import {BrowserRouter as Router, Switch, Route}from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './LoginComponents/Login.js'
import Footer from './Footer.js'
import Home from './Home.js'
import Register from './Register.js'

function App() {
  return (
    <Router>
        <div className="App">
          <Switch>
              <Route path = '/' exact component = {Login}/>
              <Route path = '/Home' exact component = {Home}/>
              <Route path = '/Register' exact component = {Register}/>
          </Switch>
          <Footer/>
        </div>
    </Router>
  );
}

export default App;
