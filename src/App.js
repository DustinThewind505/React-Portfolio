import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Site from './components/Site.js/SiteContainer';
import Home from './components/Home/Home';

import './css/index.css';



const App = () => {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/app" component={Site} />
      </div>
    </Router>
  );
}

export default App;
