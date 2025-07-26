import React from 'react'



function MartDisplay({martData}) {

  return (
    <div className='w-50 h-65 p-4'>
    <img className='w-45 h-45' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${martData?.imageId}`} alt="img" />
    <h2 className='w-45 font-bold p-1'>
        {
            martData?.action?.text
        }
    </h2>
    </div>
)
}

export default MartDisplay