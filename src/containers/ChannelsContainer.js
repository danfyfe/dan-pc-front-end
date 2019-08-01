import React from 'react'

import Channel from '../components/Channel.js'
import MasterChannel from '../components/MasterChannel.js'

function ChannelsContainer() {
  return(
    <div className='channels-container'>
      <Channel trackNumber={1}/>
      <Channel trackNumber={2}/>
      <Channel trackNumber={3}/>
      <Channel trackNumber={4}/>
      <Channel trackNumber={5}/>
      <Channel trackNumber={6}/>
      <Channel trackNumber={7}/>
      <Channel trackNumber={8}/>
      <MasterChannel/>
    </div>
  )
}

export default ChannelsContainer