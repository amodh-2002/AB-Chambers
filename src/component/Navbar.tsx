import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleAboutDropdown = () =>
    setIsAboutDropdownOpen(!isAboutDropdownOpen);

  const isActive = (path: string) => location.pathname === path;

  const linkClass = (path: string) =>
    `px-2 py-2 text-[0.95rem] whitespace-nowrap ${
      isActive(path)
        ? "text-blue-600 font-semibold"
        : "text-gray-700 hover:text-gray-900"
    }`;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsAboutDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl lg:text-3xl font-bold text-gray-800">
              ABChambers
            </Link>
          </div>
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-4">
            <Link to="/" className={linkClass("/")}>
              Home
            </Link>
            <Link to="/gallery" className={linkClass("/gallery")}>
              Gallery
            </Link>
            <div className="relative" ref={dropdownRef}>
              <button
                onMouseEnter={() => setIsAboutDropdownOpen(true)}
                onClick={toggleAboutDropdown}
                className={`${linkClass("/about")} flex items-center`}
              >
                About Us
                <svg
                  className="w-3 h-3 ml-1 inline-block"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isAboutDropdownOpen && (
                <div
                  className="absolute z-10 bg-white shadow-lg rounded-md py-2 mt-2 w-48"
                  onMouseLeave={() => setIsAboutDropdownOpen(false)}
                >
                  <Link
                    to="/our-firm"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Our Firm
                  </Link>
                  <div className="border-b border-gray-200 my-1"></div>
                  <Link
                    to="/our-founder"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Our Founder
                  </Link>
                </div>
              )}
            </div>
            <Link to="/mission-vision" className={linkClass("/mission-vision")}>
              Mission & Vision
            </Link>
            <Link to="/our-team" className={linkClass("/our-team")}>
              Our Team
            </Link>
            <Link to="/practice-areas" className={linkClass("/practice-areas")}>
              Practice Areas
            </Link>
            <Link to="/careers" className={linkClass("/careers")}>
              Careers
            </Link>
            <Link to="/contact-us" className={linkClass("/contact-us")}>
              Contact Us
            </Link>
          </div>
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-64 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-gray-900"
          >
            <svg
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
        </div>
        <div className="flex flex-col space-y-2 p-4">
          <Link to="/" className={linkClass("/")}>
            Home
          </Link>
          <Link to="/gallery" className={linkClass("/gallery")}>
            Gallery
          </Link>
          <Link to="/our-firm" className={linkClass("/our-firm")}>
            Our Firm
          </Link>
          <Link to="/our-founder" className={linkClass("/our-founder")}>
            Our Founder
          </Link>
          <Link to="/mission-vision" className={linkClass("/mission-vision")}>
            Mission & Vision
          </Link>
          <Link to="/our-team" className={linkClass("/our-team")}>
            Our Team
          </Link>
          <Link to="/practice-areas" className={linkClass("/practice-areas")}>
            Practice Areas
          </Link>
          <Link to="/careers" className={linkClass("/careers")}>
            Careers
          </Link>
          <Link to="/contact-us" className={linkClass("/contact-us")}>
            Contact Us
          </Link>
        </div>
      </div>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
