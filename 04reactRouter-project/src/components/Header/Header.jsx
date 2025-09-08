import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="shadow-md sticky z-50 top-0 bg-white">
      <nav className="px-4 lg:px-6 py-3">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12"
              alt="Logo"
            />
            <span className="font-bold text-xl text-gray-800">MyBrand</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex space-x-8 font-medium">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
              { to: "/github", label: "Github" },
            ].map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `relative py-2 transition ${
                    isActive ? "text-orange-700" : "text-gray-700"
                  } hover:text-orange-700`
                }
              >
                {label}
                {/* underline animation */}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-700 transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            ))}
          </div>

          {/* Buttons (Desktop) */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              to="#"
              className="text-gray-800 border border-gray-300 hover:bg-gray-100 font-medium rounded-lg text-sm px-4 py-2 transition"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-white bg-orange-700 hover:bg-orange-800 font-medium rounded-lg text-sm px-4 py-2 transition"
            >
              Get started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 rounded-md hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="lg:hidden mt-4 space-y-3 font-medium">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
              { to: "/github", label: "Github" },
            ].map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-md ${
                    isActive
                      ? "bg-orange-100 text-orange-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {label}
              </NavLink>
            ))}

            <div className="flex flex-col gap-2 mt-3">
              <Link
                to="#"
                className="text-center border border-gray-300 py-2 rounded-lg text-gray-800 hover:bg-gray-100"
              >
                Log in
              </Link>
              <Link
                to="#"
                className="text-center py-2 rounded-lg text-white bg-orange-700 hover:bg-orange-800"
              >
                Get started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
