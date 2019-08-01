import React from 'react'

import Equalizer from '../components/Equalizer.js'
import Fader from '../components/Fader.js'
import Label from '../components/Label.js'

function Channel() {
  return(
    <div className='channel'>
      <Equalizer/>
      <Label/>
      <Fader/>
    </div>
  )
}

export default Channel