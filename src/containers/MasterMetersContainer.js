import React from 'react'

import MasterMeter from '../components/MasterMeter.js'

function MasterMetersContainer() {
  return(
    <div className='meters-container'>
      <MasterMeter trackNumber={'L'}/>
      <MasterMeter trackNumber={'R'}/>
    </div>
  )
}

export default MasterMetersContainer