"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setScrollingUp(currentScrollPos < prevScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <header
      className={`bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg sticky top-0 z-50 transition-transform duration-300 ${
        scrollingUp ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4 md:px-6">
        
        {/* Logo + Title */}
        <div className="flex items-center gap-3 min-w-0">
          <img
            src="/Atal Seva Setu Kendra logo.png"
            alt="Atal Seva Setu Kendra"
            className="w-10 h-10 md:w-14 md:h-14 rounded-full flex-shrink-0"
          />

          {/* Truncate text on small screens */}
          <h1 className="text-lg md:text-2xl font-extrabold tracking-wide truncate">
            AtalSeva
            <span className="text-yellow-300">SetuKendra</span>
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {["/", "/services", "/about", "/contact"].map((path, i) => (
            <Link
              key={i}
              href={path}
              className="hover:text-yellow-300 transition-transform hover:scale-105"
            >
              {path === "/" ? "Home" : path.replace("/", "").replace("-", " ")}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex-shrink-0 text-white hover:text-yellow-300"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-purple-600 text-white py-6">
          <ul className="flex flex-col items-center space-y-5 text-lg font-medium">
            <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
