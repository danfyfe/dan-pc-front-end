import React from 'react'

import MasterMetersContainer from '../containers/MasterMetersContainer.js'
import MasterEqualizersContainer from '../containers/MasterEqualizersContainer.js'

function MasterChannel() {
  return(
    <div className='master-channel'>
      <MasterMetersContainer/>
      <MasterEqualizersContainer/>
    </div>
  )
}

export default MasterChannel