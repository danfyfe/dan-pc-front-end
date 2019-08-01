import React, {useState, useEffect} from 'react'


const LowCut = () => {
  const [engaged, setEngaged] = useState(false)

  const renderLowCutOut = () => {
    return <button className='cut-out' onClick={()=>setEngaged(!engaged)}>
      /
    </button>
  }

  const renderLowCutIn = () => {
    return <button className='cut-in' onClick={()=>setEngaged(!engaged)}>
      /
    </button>
  }

  return(
    <>
      {engaged ? renderLowCutIn() : renderLowCutOut()}
    </>
  )
}

export default LowCut