import React from 'react'


import LowCut from '../components/LowCut.js'
import HighCut from '../components/HighCut.js'


function FiltersContainer() {
  return(
    <div className='filters-container'>
      <LowCut/>
      <HighCut/>
    </div>
  )
}

export default FiltersContainer