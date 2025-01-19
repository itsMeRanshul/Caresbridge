import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 text-white sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-xl font-bold">MyCompany</div>

        {/* Navigation Links */}
        <nav
          className={`flex gap-6 md:static md:flex ${
            isMenuOpen
              ? 'absolute top-full right-0 bg-gray-800 flex-col p-4'
              : 'hidden md:flex'
          }`}
        >
          <NavLink
            to="/"
            exact
            className={({ isActive }) =>
              `text-white hover:text-orange-400 ${
                isActive ? 'text-orange-400' : ''
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-white hover:text-orange-400 ${
                isActive ? 'text-orange-400' : ''
              }`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-white hover:text-orange-400 ${
                isActive ? 'text-orange-400' : ''
              }`
            }
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/product"
            className={({ isActive }) =>
              `text-white hover:text-orange-400 ${
                isActive ? 'text-orange-400' : ''
              }`
            }
          >
            Product
          </NavLink>
        </nav>

          {/* Login/Register Links */}
          <div className="hidden md:flex gap-4">
            <Link
              to="/login"
              className="bg-gray-800 text-white px-3 py-1 rounded hover:bg-orange-400 hover:text-white transition-colors"
            >
              Login
            </Link>
            <Link
            to="/cart"
            className="relative text-white mt-1 hover:text-orange-400 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M3 3h2l3.6 7.59-1.35 2.45C7.16 14.85 7 15.19 7 15.56 7 16.35 7.65 17 8.44 17H19v-2H8.42c-.04 0-.08-.03-.08-.07l.02-.1L9 13h7.58c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.3.12-.48A1 1 0 0 0 21 4H5.21L4.27 2H1v2zm4.16 13A1.993 1.993 0 0 0 7 20a1.993 1.993 0 0 0 2-2 1.993 1.993 0 0 0-2-2c-1.1 0-2 .9-2 2zm10 0c-1.1 0-2 .9-2 2 0 1.1.9 2 2 2 1.1 0 2-.9 2-2 0-1.1-.9-2-2-2z" />
            </svg>
          </Link>
          <Link
            to="/profile"
            className="text-white hover:text-orange-400 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-7 h-7"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </Link>
            
        </div>

        {/* Hamburger Menu for Mobile */}
        <div
          className="flex md:hidden flex-col gap-1 cursor-pointer"
          onClick={toggleMenu}
        >
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full right-0 bg-gray-800 w-full flex flex-col items-center p-4">
            <NavLink
              to="/"
              exact
              className={({ isActive }) =>
                `text-white hover:text-orange-400 mb-2 ${
                  isActive ? 'text-orange-400' : ''
                }`
              }
            >
              Home Page
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-white hover:text-orange-400 mb-2 ${
                  isActive ? 'text-orange-400' : ''
                }`
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-white hover:text-orange-400 mb-2 ${
                  isActive ? 'text-orange-400' : ''
                }`
              }
            >
              Contact Us
            </NavLink>
            <NavLink
              to="/product"
              className={({ isActive }) =>
                `text-white hover:text-orange-400 mb-2 ${
                  isActive ? 'text-orange-400' : ''
                }`
              }
            >
              Products
            </NavLink>
            <Link to="/login" className="text-white hover:text-orange-400 mb-2">
              Login
            </Link>
            <Link to="/register" className="text-white hover:text-orange-400">
              Register
            </Link>
            <Link
            to="/cart"
            className="relative text-white hover:text-orange-400 transition-colors"
          >
            Cart
          </Link>
          <Link
            to="/profile"
            className="text-white hover:text-orange-400 transition-colors"
          >
            Profile
          </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
