import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


// import Header from './components/Header';
import Site from './components/Site.js/SiteContainer';
import Home from './components/Home/Home';
// import About from './components/About/AboutComponent';
// import Projects from './components/Site.js/Projects/ProjectsComponent';
// import Footer from './components/Footer'

import './css/index.css';



const App = () => {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/app" component={Site} />
        {/* <Route path="/projects" component={Projects}/> */}
      </div>
    </Router>
  );
}

export default App;
