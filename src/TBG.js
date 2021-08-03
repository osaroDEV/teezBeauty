import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Error from './components/Error';
import './App.css';

function TBG() {
  return (
    <Router>
        <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/gallery' component={Gallery} />
        <Route path='/contact' component={Contact} />
        <Route path='*' component={Error} />
      </Switch>
        <Footer/>
    </Router>
  );
}

export default TBG;
