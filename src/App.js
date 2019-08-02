import React from 'react';
import './App.css';

import Mpc from './containers/MPC.js'
import Mixer from './containers/Mixer.js'
import Keyboard from './containers/Keyboard.js'

function App() {
  return (
    <div className="main-container">
      <Mpc/>
      <Mixer/>
      <Keyboard/>
    </div>
  );
}

export default App;
