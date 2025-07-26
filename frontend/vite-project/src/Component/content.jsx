import React from 'react'
import {imageGridCards} from "../utils/FoodData"
import FetchFoodData from './FetchFoodData'


export default function Content() {

  return (
    <>
       <div className='flex overflow-x-auto py-8 w-[80%]  mx-auto '>
        {
          imageGridCards.map((foodData) => <FetchFoodData key={foodData?.id} foodData={foodData} />)
        }
       </div>
    </>
  )
}

