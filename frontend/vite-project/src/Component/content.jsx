import React from "react";
import { imageGridCards } from "../utils/FoodData";
import FetchFoodData from "./FetchFoodData";

export default function Content() {
  return (
    <>
      <div
        className="
          flex 
          overflow-x-auto 
          py-8 
          w-full sm:w-[90%] md:w-[80%] 
          mx-auto 
          gap-4 
          scrollbar-thin 
          scrollbar-thumb-gray-300 
          scrollbar-track-transparent
        "
      >
        {imageGridCards.map((foodData) => (
          <FetchFoodData key={foodData?.id} foodData={foodData} />
        ))}
      </div>
    </>
  );
}
