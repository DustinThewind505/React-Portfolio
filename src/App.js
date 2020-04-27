import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './components/Home/Home';
import About from './components/About/AboutComponent';
import Projects from './components/Projects/ProjectsComponent'
import Footer from './components/Footer'

import './css/index.css';



const App = () => {
  return (
    <Router>
    <div className="App">
      <Header />
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
