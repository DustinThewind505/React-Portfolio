import React from 'react';
import Card from './components/Card';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/91212fe7-db10-4f35-8333-ca7c99160630/d2ue8bo-a0b85eee-cd0e-4a4b-9539-d75e2c61cebb.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi85MTIxMmZlNy1kYjEwLTRmMzUtODMzMy1jYTdjOTkxNjA2MzAvZDJ1ZThiby1hMGI4NWVlZS1jZDBlLTRhNGItOTUzOS1kNzVlMmM2MWNlYmIucG5nIn1dXX0.uYZCHzxX_ziTa26Rh2IqycCyYIIrOLwsLAc0AXo9i-0" className="App-logo" alt="logo" />
        <Card />
      </header>
    </div>
  );
}

export default App;
