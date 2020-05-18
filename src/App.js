import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './views/Home';
import Portfolio from './views/Portfolio';
import About from './views/About';
import Header from './components/Header';
import Contact from './views/Contact';
import './App.css';

function App() {


  return (
    <div className="App">
    <Router>
    <Header />
    <Switch>
    
    <Route exact path="/" component={ Home } />
    <Route exact path="/Home" component={ Home } />
    <Route exact path="/Portfolio" component={ Portfolio } />
    <Route exact path="/About" component={ About } />
    <Route exact path="/Contact" component={ Contact } />
    </Switch>
    </Router>
    </div>
    );
  }
  
export default App;
