import React from 'react';

import WhiteKey from '../components/WhiteKey.js'
import BlackKey from '../components/BlackKey.js'

function KeysContainer() {
  return (
    <div className="keys-container">
      <WhiteKey/>
      <BlackKey/>
    </div>
  );
}

export default KeysContainer;
