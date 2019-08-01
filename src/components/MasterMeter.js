import React from 'react'

function MasterMeter(props){
  const {trackNumber} = props
  return(
    <div className='master-meter'>
      <div className='track-number'>{trackNumber}</div>
    </div>
  )
}

export default MasterMeter