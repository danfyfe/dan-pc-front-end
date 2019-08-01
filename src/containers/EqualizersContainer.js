import React from 'react'

import HighEq from '../components/HighEq.js'
import MidEq from '../components/MidEq.js'
import LowEq from '../components/LowEq.js'
import FiltersContainer from './FiltersContainer.js'


function Equalizer() {
  return(
    <div className='equalizers-container'>
      <HighEq/>
      <MidEq/>
      <LowEq/>
      <FiltersContainer/>
    </div>
  )
}

export default Equalizer