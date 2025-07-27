import React from 'react';
import MartDisplay from './MartDisplay';
import { martData } from '../utils/MartData';

function MartCard() {
  return (
    <div className="mx-auto w-full sm:w-[90%] md:w-[80%] py-6 sm:py-8">
      <h1 className="text-center text-xl sm:text-2xl font-bold py-4 sm:py-8">
        Shop groceries on Instamart
      </h1>

      <div
        className="
          flex overflow-x-auto gap-4
          scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent
        "
      >
        {martData.map((martData) => (
          <MartDisplay key={martData?.id} martData={martData} />
        ))}
      </div>
    </div>
  );
}

export default MartCard;
