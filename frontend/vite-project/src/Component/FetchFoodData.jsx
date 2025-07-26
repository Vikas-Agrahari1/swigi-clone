import React from 'react'


function FetchFoodData({foodData}) {
  return ( 

    
        <img className='w-40 h-45' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/"+foodData?.imageId} alt="img" />
    
    

  )
}

export default FetchFoodData