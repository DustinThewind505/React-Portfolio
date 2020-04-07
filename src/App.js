import React from 'react';

import Header from './components/Header';
import Technologies from './components/Technologies';
import Card from './components/Card';
import Footer from './components/Footer'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Technologies />
        <Card />
      <Footer />
    </div>
  );
}

export default App;
