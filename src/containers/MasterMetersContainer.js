import React from 'react'

import Meter from '../components/Meter.js'

function MasterMetersContainer() {
  return(
    <div className='meters-container'>
      <Meter trackNumber={'L'}/>
      <Meter trackNumber={'R'}/>
    </div>
  )
}

export default MasterMetersContainer