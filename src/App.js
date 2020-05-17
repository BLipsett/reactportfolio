import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './views/Home';
import Portfolio from './views/Portfolio';
import About from './views/About';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        
        <Route exact path="/" component={ Home } />
        <Route exact path="/Home" component={ Home } />
        <Route exact path="/Portfolio" component={ Portfolio } />
        <Route exact path="/About" component={ About } />
    <div className="App">
    </div>
      </Switch>
    </Router>
  );
}

export default App;
