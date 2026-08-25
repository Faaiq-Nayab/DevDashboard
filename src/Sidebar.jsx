import React, { useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Folder,
  SquareCheck,
  GitBranch,
  BarChart3,
  CalendarDays,
  Settings,
} from "lucide-react";

const Sidebar = ({ mobileMenuIsOpen, setMobileMenuIsOpen }) => {

  useEffect(() => {
    document.body.style.overflow = mobileMenuIsOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuIsOpen]);

  const navItems = [
    {
      name: "Overview",
      path: "/",
      icon: LayoutDashboard,
    },
    {
      name: "Projects",
      path: "/projects",
      icon: Folder,
    },
    {
      name: "Tasks",
      path: "/tasks",
      icon: SquareCheck,
    },
    {
      name: "Analytics",
      path: "/analytics",
      icon: BarChart3,
    },
    {
      name: "Calendar",
      path: "/calendar",
      icon: CalendarDays,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: Settings,
    },
  ];

  return (
    <div>
      {/* Desktop Sidebar */}

      <aside className="hidden md:flex flex-col w-72 h-full shrink-0 bg-white border-r border-slate-200 shadow-lg">
        {/* Logo */}

        <div className="flex items-center h-15 px-2.5 shadow-sm">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShT3bYZDb-xedMQw0t_vRgfpuqxPbtuCXMuikQivoFcA&s=10"
            alt="dashboard"
            className="w-12 h-12 select-none"
          />

          <h2 className="text-2xl font-bold text-gray-800 select-none">
            DevDashboard
          </h2>
        </div>

        {/* Navigation */}

        <nav className="px-4 py-6 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-4 px-3 py-3 rounded-xl text-sm font-medium transition-all duration-200 select-none
                  ${isActive
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`
                }
              >
                <Icon size={19} strokeWidth={1.8} />
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </nav>
      </aside>

      {/* Mobile Sidebar */}

      {mobileMenuIsOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Background overlay */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileMenuIsOpen(false)}
          />

          {/* Sidebar */}
          <aside className="relative h-full w-72 bg-white shadow-xl">
            {/* Close Button */}
            <div className="flex items-center justify-end h-15 px-5 shadow-sm">

            </div>

            {/* Mobile Navigation */}

            <nav className="px-4 py-6 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;

                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuIsOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-4 px-3 py-3 rounded-xl text-sm font-medium transition-all duration-200
                      ${isActive
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      }`
                    }
                  >
                    <Icon size={19} strokeWidth={1.8} />
                    <span>{item.name}</span>
                  </NavLink>
                );
              })}
            </nav>
          </aside>
        </div>
      )}
    </div>
  );
};

export default Sidebar;