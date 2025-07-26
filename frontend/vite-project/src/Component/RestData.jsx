import React from 'react'

export default function RestData({restData}) {

//   console.log(restData?.info?.id)
  // console.log(restData?.info?.cloudinaryImageId)
  return (
    <div className="bg-white rounded-2xl shadow-md hover:scale-[95%] transition duration-300 ">
            <img 
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/${restData?.info?.cloudinaryImageId}`} 
                alt={restData?.info?.name} 
                className="w-full h-40 object-cover rounded-xl"
            />
            <div className="mt-3 p-2">
                <h3 className="text-lg font-semibold text-gray-800 truncate">{restData?.info?.name}</h3>
                <p className="text-sm text-gray-500 truncate">{restData?.info?.cuisines?.join(", ")}</p>
                <div className="flex items-center justify-between mt-2">
                    <span className="text-sm font-bold text-green-600">⭐ {restData?.info?.avgRating}</span>
                    <span className="text-sm text-gray-600">{restData?.info?.sla?.deliveryTime} min</span>
                </div>
            </div>
        </div>
  )
}
