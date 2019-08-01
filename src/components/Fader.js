import React, {useState, userEffect} from 'react'

function Fader() {
  const [level, setLevel] = useState(50)

  const setFaderPosition = (e) => {

    setLevel(e.target.value)
    console.log(level)
  }
  return(
    <div className='fader'>
      <div className='fader-guide'>
        <input type='range' className='fader-pad' min='0' max='100' onChange={setFaderPosition}/>
      </div>
      {/*<div className='fader-guide'>
      <div className='fader-pad'>
        <div className='fader-pad-top'/>
        <div className='fader-pad-middle'/>
        <div className='fader-pad-bottom'/>
      </div>
      </div>*/}
    </div>
  )
}

export default Fader