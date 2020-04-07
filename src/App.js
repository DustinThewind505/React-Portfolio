import React, { Fragment } from 'react';

import Header from './components/Header';
import About from './components/About';
import Technologies from './components/Technologies';
import Card from './components/Card';
import Footer from './components/Footer'

import './css/index.css';

function App() {
  return (
    <Fragment>
      <Header />
      <div className="App">
        <About />
        <Technologies />
        <Card />
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
