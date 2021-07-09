import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Error from './components/Error';
import './App.css';

function TBG() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/gallery' component={Gallery} />
        <Route path='/contact' component={Contact} />
        <Route path='/footer' component={Footer} />
        <Route path='*' component={Error} />
      </Switch>
    </Router>
  );
}

export default TBG;
