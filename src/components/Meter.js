import React from 'react'

function Meter(props){
  const {trackNumber} = props
  return(
    <div className='meter'>
      <div className='track-number'>{trackNumber}</div>
    </div>
  )
}

export default Meter