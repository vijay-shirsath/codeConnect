"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(true); // State to track scroll direction
  const [prevScrollPos, setPrevScrollPos] = useState(0); // Previous scroll position

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    // Function to track scroll events
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset; // Get current scroll position

      // Check if the user is scrolling up or down
      if (currentScrollPos < prevScrollPos) {
        setScrollingUp(true); // Scrolling up
      } else {
        setScrollingUp(false); // Scrolling down
      }

      // Update previous scroll position for next scroll event
      setPrevScrollPos(currentScrollPos);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header
      className={`bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg sticky top-0 z-50 transition-all duration-300 ease-in-out transform ${
        !scrollingUp ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="/Atal Seva Setu Kendra logo.png" // Replace with your logo path
            alt="CodeConnect Logo"
            className="w-16 h-16 mr-4 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
          <h1 className="text-2xl font-extrabold tracking-wide">
            AtalSeva<span className="text-yellow-300">SetuKendra</span>
          </h1>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <Link
            href="/"
            className="hover:text-yellow-300 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="hover:text-yellow-300 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Services
          </Link>
          <Link
            href="/about"
            className="hover:text-yellow-300 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="hover:text-yellow-300 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white hover:text-yellow-300 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
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
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-purple-600 text-white py-4 transition-transform duration-300 ease-in-out transform translate-y-0">
          <ul className="flex flex-col space-y-4 text-center">
            <li>
              <Link
                href="/"
                className="hover:text-yellow-300 transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-yellow-300 transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-yellow-300 transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-yellow-300 transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
