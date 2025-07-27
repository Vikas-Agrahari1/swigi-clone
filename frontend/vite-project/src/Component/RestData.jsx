import React from 'react';

export default function RestData({ restData }) {
  return (
    <div
      className="
        bg-white rounded-2xl shadow-md 
        hover:scale-[95%] transition duration-300 
        w-full sm:w-64 md:w-72
      "
    >
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/${restData?.info?.cloudinaryImageId}`}
        alt={restData?.info?.name}
        className="w-full h-32 sm:h-36 md:h-40 object-cover rounded-xl"
      />
      <div className="mt-2 sm:mt-3 p-2">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800 truncate">
          {restData?.info?.name}
        </h3>
        <p className="text-xs sm:text-sm text-gray-500 truncate">
          {restData?.info?.cuisines?.join(", ")}
        </p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-xs sm:text-sm font-bold text-green-600">
            ⭐ {restData?.info?.avgRating}
          </span>
          <span className="text-xs sm:text-sm text-gray-600">
            {restData?.info?.sla?.deliveryTime} min
          </span>
        </div>
      </div>
    </div>
  );
}
