import React from 'react'

function DineOut({dineData}) {
    
    
  return (  
    <>  
    <div className="w-80 bg-white shadow-lg rounded-lg transition-transform duration-300 hover:scale-95 overflow-hidden rounded">
      {/* Image Section */}
      <img
        className="w-full h-40 object-cover"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${dineData?.info?.mediaFiles[0]?.url}`} 
        alt={dineData?.info?.name}
      />

      {/* Content Section */}
      <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800">{dineData?.info?.name}</h2>
            <p className="text-sm text-gray-500">{dineData?.info?.cuisines}</p>

            {/* Ratings & Price */}
            <div className="flex items-center justify-between mt-3">
                <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded-md">
                    ⭐ {dineData?.info?.rating?.value}
                </span>
                <span className="text-sm font-semibold text-gray-700">
                    {dineData?.info?.costForTwo}
                </span>
            </div>
        </div>
    </div>
    </>
  );



}

export default DineOut