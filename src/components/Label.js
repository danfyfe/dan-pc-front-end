import React from 'react'

function Label(props) {
  const {trackName} = props
  return(
    <div className='label'>
      <p>{trackName}</p>
    </div>
  )
}

export default Label