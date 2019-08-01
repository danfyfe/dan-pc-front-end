import React from 'react'

import Equalizer from '../components/Equalizer.js'
import Fader from '../components/Fader.js'
import Label from '../components/Label.js'

function Channel(props) {
  const {trackName} = props
  return(
    <div className='channel'>
      <Equalizer/>
      <Fader/>
      <Label trackName={trackName}/>
    </div>
  )
}

export default Channel