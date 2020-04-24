import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About/AboutComponent';
import Projects from './components/Projects/ProjectsComponent'
import Footer from './components/Footer'

import './css/index.css';



function App() {
  return (
    <Router>
    <div className="App">
      <h1>Oi</h1>
      <Header />
      <Navigation />
      <Route exact path="/" component={About} />
      <Route path="/projects" component={Projects} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
