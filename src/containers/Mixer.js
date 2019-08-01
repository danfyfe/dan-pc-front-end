import React from 'react'

import MetersContainer from './MetersContainer.js'
import ChannelsContainer from './ChannelsContainer'

import MixerPadding from '../components/MixerPadding.js'


function Mixer() {
  return(
    <div className='mixer-main-container'>
      <MetersContainer/>
      <ChannelsContainer/>
      <MixerPadding/>
    </div>
  )
}

export default Mixer