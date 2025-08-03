import React from 'react';
import './App.css';
import {OnOff} from "./OnOff/OnOff";

function App() {
  return (
    <div className="App">
      <OnOff on={true}/>
    </div>
  );
}

export default App;
