import React from 'react'
import {dineoutRestaurants} from '../utils/DineData'
import DineOut from './DineOut'


function DineoutDisplay() {
    return (
      <>
      <div className="w-[80%] p-4 mx-auto">
        <h2 className="text-2xl font-bold py-4 mb-4">Dineout Restaurants</h2>
        <div className="overflow-x-auto py-6">
          <div className="grid grid-flow-col gap-4">
            {dineoutRestaurants.map((dineData) => (
              <DineOut key={dineData?.info?.id} dineData={dineData} />
            ))}
          </div>
        </div>
      </div>
      <img className='py-12' src="../public/assets/App_download_banner.avif" alt="App-Download_Banner" />
      </>
    );
  }

export default DineoutDisplay