import React from 'react'

import EqualizersContainer from '../containers/EqualizersContainer.js'
import Fader from '../components/Fader.js'
import Label from '../components/Label.js'

function Channel(props) {
  const {trackName} = props
  return(
    <div className='channel'>
      <EqualizersContainer/>
      <Fader/>
      <Label trackName={trackName}/>
    </div>
  )
}

export default Channel