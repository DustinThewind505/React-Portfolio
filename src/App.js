import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/header';
import Home from './pages/home';
import About from './pages/about'
import Projects from './pages/projects'
import Footer from './components/footer';

import './css/index.css';



const App = () => {
  return (
    <Router>
      <div className="App">
        <ul class="boxes">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
