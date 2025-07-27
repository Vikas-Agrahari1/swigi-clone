import React, { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#ff5200] text-white relative">
      <div className="container mx-auto flex flex-wrap justify-between items-center px-4 sm:px-6 lg:px-10 py-4">
        {/* Logo */}
        <div>
          <img
            className="h-10 w-28 sm:h-12 sm:w-40 object-contain"
            src="/assets/Swiggy.png"
            alt="Swiggy_logo"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 lg:gap-8 text-base lg:text-lg font-bold">
          <a
            href="https://www.swiggy.com/corporate/"
            className="py-2 hover:underline"
          >
            Swiggy Corporate
          </a>
          <a
            href="https://partner.swiggy.com/login#/swiggy"
            className="py-2 hover:underline"
          >
            Partner with us
          </a>
          <a
            href="#"
            className="border rounded-xl px-3 py-1 lg:px-4 lg:py-2 hover:bg-white hover:text-[#ff5200] transition"
          >
            Get the app
          </a>
          <a
            href="#"
            className="bg-black border border-black rounded-xl px-4 py-1 lg:px-6 lg:py-2 hover:opacity-80 transition"
          >
            Sign in
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden bg-black px-3 py-2 rounded-lg"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#ff5200] text-white flex flex-col items-center py-4 space-y-4 md:hidden z-50">
          <a
            href="https://www.swiggy.com/corporate/"
            className="hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Swiggy Corporate
          </a>
          <a
            href="https://partner.swiggy.com/login#/swiggy"
            className="hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Partner with us
          </a>
          <a
            href="#"
            className="border rounded-xl px-3 py-1 hover:bg-white hover:text-[#ff5200] transition"
            onClick={() => setMenuOpen(false)}
          >
            Get the app
          </a>
          <a
            href="#"
            className="bg-black border border-black rounded-xl px-4 py-1 hover:opacity-80 transition"
            onClick={() => setMenuOpen(false)}
          >
            Sign in
          </a>
        </div>
      )}
    </header>
  );
}
