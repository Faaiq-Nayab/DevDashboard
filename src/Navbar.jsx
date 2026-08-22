import React from 'react'
import Searchbar from "./components/Searchbar";
import { Menu, X } from "lucide-react";
import { FaBell } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

const Navbar = ({ mobileMenuIsOpen, setMobileMenuIsOpen }) => {
   const location = useLocation();
  const pageNames = {
    "/": "Overview",
    "/projects": "Projects",
    "/tasks": "Tasks",
    "/analytics": "Analytics",
    "/calendar": "Calendar",
    "/settings": "Settings",
  };
  const pageName = pageNames[location.pathname] || "Overview";
  
  return (
    <div className="sticky top-0 z-50">
      <header className="w-full h-15 bg-white/90 backdrop-blur-sm shadow-md px-4 mx-[1px] md:px-8 flex items-center justify-between border-b border-slate-200">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden p-2 text-gray-700 hover:text-black"
            onClick={() => setMobileMenuIsOpen((prev) => !prev)}
          >
            {mobileMenuIsOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>

          <h3 className="text-xl md:text-2xl font-bold text-gray-800 select-none">
            {pageName}
          </h3>
        </div>

        <div className="flex items-center gap-4">
          <Searchbar />

          <button className="relative">
            <FaBell
              size={22}
              className="text-gray-500 hover:text-black cursor-pointer transition"
            />

            <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center select-none">
              3
            </span>
          </button>
        </div>
      </header>
    </div>
  )
}

export default Navbar
