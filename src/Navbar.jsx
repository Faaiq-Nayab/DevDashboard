import React from "react";
import { useState } from "react";
import Searchbar from "./components/Searchbar";
import { Menu, X } from "lucide-react";
import { FaBell } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
const Navbar = ({ mobileMenuIsOpen, setMobileMenuIsOpen }) => {
  const [showNotification, setShowNotification] = useState(false);
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
              onClick={() => setShowNotification(!showNotification)}
              className="text-gray-500 hover:text-black cursor-pointer transition"
            />
          </button>
          {showNotification && (
            <div className="absolute right-0 top-12 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
              <div className="p-4">
                <p className="text-gray-700 text-sm">No new notifications.</p>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
