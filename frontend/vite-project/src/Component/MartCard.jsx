import React from 'react'
import MartDisplay from './MartDisplay'
import { martData } from '../utils/MartData'

function MartCard() {
  return (
    <div className=' mx-auto w-[80%] py-8'>
    <h1 className='text-2xl font-bold py-8'>Shop groceries on Instamart</h1>
    <div className='flex overflow-x-auto  '>
    
        {
            martData.map((martData) => <MartDisplay key={martData?.id} martData={martData} />)
        }
    </div>
    </div>
  )
}

export default MartCard