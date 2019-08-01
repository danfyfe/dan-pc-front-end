import React from 'react';
import './App.css';

import Mpc from './containers/MPC.js'
import Mixer from './containers/Mixer.js'

function App() {
  return (
    <div className="main-container">
      <Mpc/>
      <Mixer/>
    </div>
  );
}

export default App;
