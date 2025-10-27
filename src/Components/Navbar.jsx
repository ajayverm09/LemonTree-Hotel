import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation(); // Get the current route

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.dropdown-container')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Function to check if the link is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-gray-50 py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src="https://www.lemontreehotels.com/assets/front/end/img/logo.png"
                alt="Lemon Tree Hotels"
                className="h-10 w-auto text-black transition-transform duration-300 hover:scale-105 filter brightness-0"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link
                to="/"
                className={`text-gray-800 font-medium transition-colors duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#3394BB] after:left-0 after:-bottom-1 after:transition-all after:duration-300 ${isActive('/') ? 'text-[#3394BB]' : 'hover:text-[#12a8e3]'} ${isActive('/') ? 'after:w-full' : 'hover:after:w-full'}`}
              >
                Home
              </Link>

              {/* About Link */}
              <Link
                to="/about"
                className={`text-gray-800 font-medium transition-colors duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#3394BB] after:left-0 after:-bottom-1 after:transition-all after:duration-300 ${isActive('/about') ? 'text-[#3394BB]' : 'hover:text-[#12a8e3]'} ${isActive('/about') ? 'after:w-full' : 'hover:after:w-full'}`}
              >
                About
              </Link>

              <Link
                to="/blogs"
                className={`text-gray-800 font-medium transition-colors duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#3394BB] after:left-0 after:-bottom-1 after:transition-all after:duration-300 ${isActive('/blogs') ? 'text-[#3394BB]' : 'hover:text-[#12a8e3]'} ${isActive('/blogs') ? 'after:w-full' : 'hover:after:w-full'}`}
              >
                Blogs
              </Link>
              <Link
                to="/contact"
                className={`text-gray-800 font-medium transition-colors duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#3394BB] after:left-0 after:-bottom-1 after:transition-all after:duration-300 ${isActive('/contact') ? 'text-[#3394BB]' : 'hover:text-[#12a8e3]'} ${isActive('/contact') ? 'after:w-full' : 'hover:after:w-full'}`}
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right side items */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-[#3394BB] font-medium">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 124 456 7890
            </div>
            <Link
              to="/book"
              className="bg-[#3394BB] hover:text-[#12a8e3] border border-[#3394BB] hover:bg-white text-white font-medium py-2 px-6 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800 hover:text-[#3394BB] focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-[#3394BB] hover:bg-sky-50 ${isActive('/') ? 'text-[#3394BB] bg-sky-50' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-[#3394BB] hover:bg-sky-50 ${isActive('/about') ? 'text-[#3394BB] bg-sky-50' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/blogs"
              className={`block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-[#3394BB] hover:bg-sky-50 ${isActive('/blogs') ? 'text-[#3394BB] bg-sky-50' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Blogs
            </Link>
            <Link
              to="/contact"
              className={`block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-[#3394BB] hover:bg-sky-50 ${isActive('/contact') ? 'text-[#3394BB] bg-sky-50' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            
            {/* Phone number in mobile menu */}
            <div className="flex items-center px-3 py-2 text-[#3394BB] font-medium">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 124 456 7890
            </div>
            
            {/* Book Now button in mobile menu */}
            <div className="px-3 py-2">
              <Link
                to="/book"
                className="bg-[#3394BB] hover:bg-white hover:text-[#3394BB] border border-[#3394BB] text-white font-medium py-2 px-6 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg w-full block text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;