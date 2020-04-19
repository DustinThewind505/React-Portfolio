import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About/AboutComponent';
import Projects from './components/Projects/ProjectsComponent'
import Footer from './components/Footer'

import './css/index.css';



function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Route exact path="/" component={About} />
      <Route path="/projects" component={Projects} />
      <Footer />
    </div>
  );
}

export default App;
