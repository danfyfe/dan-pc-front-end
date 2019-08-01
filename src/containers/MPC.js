import React from 'react'

import PadContainer from './PadContainer.js'
import MpcScreen from './MpcScreen.js'

function MPC(){
  return (
    <div className='mpc-main-container'>
      <MpcScreen/>
      <PadContainer/>
    </div>

  )
}

export default MPC