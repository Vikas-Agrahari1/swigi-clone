import React from "react";

export default function Header() {
    return (
      <div className="bg-[#ff5200] flex justify-between items-center px-38 py-8 text-white">
        <div>
          <img className="h-12 w-40" src="/assets/Swiggy.png" alt="Swiggy_logo" />
        </div>
        <div className="flex gap-8 text-lg font-bold">
          <a href="https://www.swiggy.com/corporate/" className="py-2">Swiggy Corporate</a>
          <a href="https://partner.swiggy.com/login#/swiggy" className="py-2">Partner with us</a>
          <a href="#" className="border rounded-xl px-4 py-2">Get the app</a>
          <a href="#" className="bg-black border-black rounded-xl px-6 py-2">Sign in</a>
        </div>
      </div>
    );
  }