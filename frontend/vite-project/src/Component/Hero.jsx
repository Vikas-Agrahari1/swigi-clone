import React from "react";
import Content from "./content";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <div className="bg-[#ff5200] text-white py-1 relative overflow-hidden">
        {/* Background Images */}
        <img
          className="absolute w-[16%] h-[78%] right-0 top-0 hidden md:block"
          src="/assets/Sushi.avif"
          alt=""
        />
        <img
          className="absolute w-[16%] h-[78%] left-0 top-0 hidden md:block"
          src="/assets/Veggies.avif"
          alt=""
        />

        {/* Heading */}
        <div className="container mx-auto text-center px-4">
          <div className="text-3xl sm:text-4xl md:text-5xl font-semibold max-w-3xl mx-auto py-8">
            <h1>Order food & groceries. Discover best restaurants. Swiggy it!</h1>
          </div>

          {/* Search Inputs */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 py-8">
            <input
              className="bg-white text-base sm:text-lg font-semibold text-gray-800 w-full sm:w-80 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl"
              placeholder="Enter your delivery location"
            />
            <input
              className="bg-white text-base sm:text-lg font-semibold text-gray-800 w-full sm:w-96 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl"
              placeholder="Search for restaurant, item or more"
            />
          </div>
        </div>

        {/* Image Links */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 py-4 px-4">
          <Link to="/restaurants">
            <img
              className="w-32 h-32 sm:w-44 sm:h-44 md:w-76 md:h-80"
              src="/assets/sFirst.avif"
              alt="Food Delivery"
            />
          </Link>
          <a href="">
            <img
              className="w-32 h-32 sm:w-44 sm:h-44 md:w-76 md:h-80"
              src="/assets/sSe.avif"
              alt="Instamart"
            />
          </a>
          <a href="">
            <img
              className="w-32 h-32 sm:w-44 sm:h-44 md:w-76 md:h-80"
              src="/assets/sTh.avif"
              alt="Dineout"
            />
          </a>
          <a href="">
            <img
              className="w-32 h-32 sm:w-44 sm:h-44 md:w-76 md:h-80"
              src="/assets/sFo.avif"
              alt="Geni"
            />
          </a>
        </div>
      </div>
      <Content />
    </>
  );
}
