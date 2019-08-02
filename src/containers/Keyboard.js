import React from 'react';

import KeysContainer from './KeysContainer.js'
import KeyboardDisplay from '../components/KeyboardDisplay.js'

function Keyboard() {
  return (
    <div className="keyboard">
      <KeyboardDisplay/>
      <KeysContainer/>
    </div>
  );
}

export default Keyboard;
