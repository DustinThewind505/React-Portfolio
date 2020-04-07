import React from 'react';

import Header from './components/Header';
import About from './components/About';
import Technologies from './components/Technologies';
import Card from './components/Card';
import Footer from './components/Footer'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <About />
      <Technologies />
        <Card />
      <Footer />
    </div>
  );
}

export default App;
