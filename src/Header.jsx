import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import KABPlogo from './assets/KA-BP-LOGO1.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo (Wrapped in a Link to navigate to home) */}
        <div className="flex items-center">
          <Link to="/">
            <img src={KABPlogo} alt="King's Academy Brune Park Logo" className="h-12 w-auto" />
          </Link>
        </div>

        {/* Hamburger Button for Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-gray-600 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation Links (hidden on mobile) */}
        <nav className="hidden lg:flex lg:items-center lg:space-x-6">
          <ul className="flex flex-row lg:space-x-6">
            <li>
              <Link
                to="/"
                className="block text-gray-700 hover:text-blue-500 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/choices"
                className="block text-gray-700 hover:text-blue-500 transition duration-300"
              >
                Making Good Choices
              </Link>
            </li>
            <li>
              <Link
                to="/curriculum"
                className="block text-gray-700 hover:text-blue-500 transition duration-300"
              >
                The Year 10/11 Curriculum
              </Link>
            </li>
            <li>
              <Link
                to="/faqs"
                className="block text-gray-700 hover:text-blue-500 transition duration-300"
              >
                Questions and FAQs
              </Link>
            </li>
            {/* <li>
              <Link
                to="/subjects"
                className="block text-gray-700 hover:text-blue-500 transition duration-300"
              >
                Subjects
              </Link>
            </li> */}
          </ul>
        </nav>
      </div>

      {/* Side Drawer for Mobile (Right Side) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-20`}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 left-4 text-gray-600 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <ul className="mt-16 space-y-4 px-6">
          <li>
            <Link
              to="/"
              className="block text-gray-700 hover:text-blue-500 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/choices"
              className="block text-gray-700 hover:text-blue-500 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Making Good Choices
            </Link>
          </li>
          <li>
            <Link
              to="/curriculum"
              className="block text-gray-700 hover:text-blue-500 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              The Year 10/11 Curriculum
            </Link>
          </li>
          <li>
            <Link
              to="/faqs"
              className="block text-gray-700 hover:text-blue-500 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Questions and FAQs
            </Link>
          </li>
          {/* <li>
            <Link
              to="/subjects"
              className="block text-gray-700 hover:text-blue-500 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Subjects
            </Link>
          </li> */}
        </ul>
      </div>

      {/* Overlay for Drawer */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;
