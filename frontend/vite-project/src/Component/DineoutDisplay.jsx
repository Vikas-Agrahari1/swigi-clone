import React from 'react';
import { dineoutRestaurants } from '../utils/DineData';
import DineOut from './DineOut';

function DineoutDisplay() {
  return (
    <>
      <div className="w-full sm:w-[90%] md:w-[80%] p-4 mx-auto">
        <h2 className="text-center md:text-left text-xl sm:text-2xl font-bold py-4 mb-4">
          Dineout Restaurants
        </h2>

        <div className="overflow-x-auto py-4 sm:py-6">
          <div
            className="
              grid grid-flow-col sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
              gap-4 min-w-max sm:min-w-0
            "
          >
            {dineoutRestaurants.map((dineData) => (
              <DineOut key={dineData?.info?.id} dineData={dineData} />
            ))}
          </div>
        </div>
      </div>

      <img
        className="w-full md:w-[100%] mx-auto py-8 sm:py-12"
        src="/assets/App_download_banner.avif"
        alt="App-Download_Banner"
      />
    </>
  );
}

export default DineoutDisplay;
