import React, {useState, userEffect} from 'react'



function HighCut() {
  const [engaged, setEngaged] = useState(false)

  const renderHighCutOut = () => {
    return <button className='cut-out' onClick={()=>setEngaged(!engaged)}>
      \
    </button>
  }

  const renderHighCutIn = () => {
    return <button className='cut-in' onClick={()=>setEngaged(!engaged)}>
      \
    </button>
  }

  return(
    <>
      {engaged ? renderHighCutIn() : renderHighCutOut()}
    </>
  )
}

export default HighCut