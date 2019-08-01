import React from 'react'

import Channel from '../components/Channel.js'
import MasterChannel from '../components/MasterChannel.js'

function ChannelsContainer() {
  return(
    <div className='channels-container'>
      <Channel trackName={'kick'}/>
      <Channel trackName={'snare 1'}/>
      <Channel trackName={'snare 2'}/>
      <Channel trackName={'hat'}/>
      <Channel trackName={'tom1'}/>
      <Channel trackName={'tom2'}/>
      <Channel trackName={'bass'}/>
      <Channel trackName={'keys'}/>
      <MasterChannel/>
    </div>
  )
}

export default ChannelsContainer