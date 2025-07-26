import React, { useEffect, useState } from 'react'
import Content from './content'
import RestData from './RestData'

function Restaurant() {


  const [rest_Data, SetRes_tData] = useState([])

  useEffect(()=>{
  async function fetchData() {

    const proxyServer = "https://cors-anywhere.herokuapp.com/"
    const swiggy = "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=26.8373&lng=80.9165&carousel=true&third_party_vendor=1"
    const response = await fetch(proxyServer+swiggy)
    // const response = await fetch("http://localhost:5000/api/restaurants")
    const data = await response.json()

    SetRes_tData(data.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

    fetchData()
  }, [])
  


  return (
    <div >
        <Content/>
        <div className="grid grid-cols-4 gap-4 w-[80%] mx-auto py-8">
        {
            rest_Data.map((restData) => <RestData key={restData?.info?.id} restData = {restData} /> )
        }
        </div>
    </div>
  )
}

export default Restaurant



// https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8373&lng=80.9165&restaurantId=405025&submitAction=ENTER


// https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8373&lng=80.9165&restaurantId=636723&submitAction=ENTER