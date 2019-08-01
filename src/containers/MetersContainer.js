import React from 'react'

import Meter from '../components/Meter.js'

function MetersContainer() {
  return(
    <div className='meters-container'>
      <Meter trackNumber={1}/>
      <Meter trackNumber={2}/>
      <Meter trackNumber={3}/>
      <Meter trackNumber={4}/>
      <Meter trackNumber={5}/>
      <Meter trackNumber={6}/>
      <Meter trackNumber={7}/>
      <Meter trackNumber={8}/>
    </div>
  )
}

export default MetersContainer