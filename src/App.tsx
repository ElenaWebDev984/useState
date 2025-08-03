import React from 'react';
import './App.css';
import {OnOff} from "./OnOff/OnOff";

function App() {
  return (
    <div className="App">
      <OnOff defaultOn={true}/>
      <OnOff defaultOn={true}/>
      <OnOff defaultOn={true}/>
      <OnOff defaultOn={true}/>
    </div>
  );
}

export default App;
