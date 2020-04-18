import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header';
import Navigation from './components/Home/Navigation';
import About from './components/Home/About';
import Technologies from './components/Home/Technologies';
import Card from './components/Home/Card';
import Footer from './components/Footer'

import Projects from './components/Projects/Projects'

import './css/index.css';

function App() {
  return (
    <Fragment>
      <div className="App">
      <Header />
      <Navigation />
        <Route exact path="/" component={About}/>
        <Route path="/projects" component={Projects}/>
        <Technologies />
        <Card />
      
      <Footer />
      </div>
    </Fragment>
  );
}

export default App;
