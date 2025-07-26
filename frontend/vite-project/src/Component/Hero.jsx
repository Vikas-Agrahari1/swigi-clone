import React from "react";
import Content from "./content";
import { Link } from "react-router-dom";

export default function Hero() {
    return (
      <>
      <div className="bg-[#ff5200] text-white py-1  relative ">
        <img className="absolute w-[16%] h-[78%] right-0 pt-0" src="./src/assets/Sushi.avif" alt="" />
        <img className="absolute w-[16%] h-[78%] left-0 pt-0" src="./src/assets/Veggies.avif" alt="" />
        <div>
          <div className="text-5xl font-semibold w-180 py-8 text-center  container mx-auto">
            <h1>Order food & groceries. Discover best restaurants. Swiggy it!</h1>
          </div>
          <div className="flex justify-center items-center gap-6 py-8">
              <input className="bg-white text-lg font-semibold text-gray-800 w-80 px-8 py-4 rounded-2xl" placeholder="Enter your delivery location"></input>
              <input className="bg-white text-lg font-semibold text-gray-800 w-120 px-8 py-4 rounded-2xl" placeholder="Search for restaurant, item or more"></input> 
          </div>
        </div>

        <div className="flex justify-center items-center py-2 px-45">
          <Link to="/restaurants"><img  className="w-76 h-80"  src="./src/assets/sFirst.avif" alt="Food Delivery" /></Link>
          <a href=""><img  className="w-76 h-80" src="./src/assets/sSe.avif" alt="Instamart" /></a>
          <a href=""><img  className="w-76 h-80" src="./src/assets/sTh.avif" alt="Dineout" /></a>
          <a href=""><img  className="w-76 h-80" src="./src/assets/sFo.avif" alt="Geni" /></a>
        </div>
        </div>
        <Content/>
        </>
    );
  }