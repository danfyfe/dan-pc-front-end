import React from 'react'

function Label(props) {
  console.log('label props', props)
  const {trackName} = props
  return(
    <div className='label'>
      <p>{trackName}</p>
    </div>
  )
}

export default Label