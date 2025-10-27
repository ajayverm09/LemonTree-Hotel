import React, { useState } from "react";
import { Facebook, Instagram, Twitter, X, Youtube, Mail, Phone, MapPin, Clock, CreditCard, Wifi, Car, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  
  const quickLinks = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
    { name: "Blogs", url: "/blogs" },
    { name: "Contact Us", url: "/contact" }
  ];

  const services = [
    { name: "Room Booking", url: "#" },
    { name: "Event Spaces", url: "#" },
    { name: "Restaurant", url: "#" },
    { name: "Spa & Wellness", url: "#" }
  ];

  // Social icons using lucide-react
  const socialIcons = [
    { Icon: Facebook, url: "#", label: "Facebook" },
    { Icon: Instagram, url: "#", label: "Instagram" },
    { Icon: Twitter, url: "#", label: "Twitter" },
    { Icon: X, url: "#", label: "X" },
    { Icon: Youtube, url: "#", label: "Youtube" },
  ];

  const amenities = [
    { Icon: Wifi, label: "Free WiFi" },
    { Icon: Car, label: "Parking" },
    { Icon: Clock, label: "24/7 Service" },
    { Icon: CreditCard, label: "Payment Options" }
  ];

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white font-sans py-12 rounded-t-3xl shadow-2xl w-full relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-sky-500 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Top Section with Logo and Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-center pb-8 mb-8 border-b border-slate-700">
          {/* Logo Section */}
          <div className="flex justify-center lg:justify-start items-center group mb-6 lg:mb-0">
            <Link to="/" className="flex flex-col transform transition-all duration-500">
              <img
                src="https://www.lemontreehotels.com/assets/front/end/img/logo.png"
                alt="Lemon Tree Hotels Logo"
                className="h-12 md:h-14 filter brightness-0 invert object-contain drop-shadow-md group-hover:drop-shadow-xl transition-all duration-300"
              />
              <span className="text-xs text-slate-400 mt-1 group-hover:text-sky-400 transition-colors">Experience Luxury</span>
            </Link>
          </div>

          {/* Newsletter Section */}
          <div className="flex flex-col items-center lg:items-end">
            <p className="font-medium text-sm mb-3 tracking-wider uppercase text-sky-400">
              EXCLUSIVE OFFERS
            </p>
            <div className="flex items-center space-x-0 rounded-lg overflow-hidden shadow-lg border border-slate-600 bg-slate-800/50 backdrop-blur-sm">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="p-3 border-none focus:ring-2 focus:ring-sky-500 md:w-64 text-sm placeholder-slate-400 bg-transparent focus:outline-none"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-sky-500 to-blue-600 text-white p-3 hover:from-sky-600 hover:to-blue-700 transition-all duration-300 text-sm font-semibold hover:shadow-inner"
              >
                Subscribe
              </button>
            </div>
            <div className="flex items-center mt-3 text-xs">
              <input
                type="checkbox"
                id="privacy-agree"
                className="mr-2 h-4 w-4 rounded text-sky-500 border-slate-600 focus:ring-sky-500 focus:ring-2 bg-slate-800"
              />
              <label htmlFor="privacy-agree" className="text-slate-400">
                I agree to the{" "}
                <Link to="#" className="text-sky-400 hover:underline transition-colors font-medium">
                  privacy policy.
                </Link>
              </label>
            </div>
          </div>
        </div>

        {/* Main Content Section - Desktop View */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8 pb-8 mb-8">
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-sky-400">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="text-sm text-slate-300 hover:text-sky-400 transition-all duration-300 relative group inline-block py-1"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-sky-400">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.url}
                    className="text-sm text-slate-300 hover:text-sky-400 transition-all duration-300 relative group inline-block py-1"
                  >
                    {service.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-sky-400">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start group">
                <div className="p-2 rounded-full bg-slate-800 mr-3 group-hover:bg-sky-600 transition-colors duration-300 mt-0.5">
                  <MapPin size={16} className="text-slate-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-slate-300 group-hover:text-white transition-colors">123 Catering Street, Hyderabad</span>
              </div>
              <div className="flex items-center group">
                <div className="p-2 rounded-full bg-slate-800 mr-3 group-hover:bg-sky-600 transition-colors duration-300">
                  <Phone size={16} className="text-slate-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-slate-300 group-hover:text-white transition-colors">+91 98765 43210</span>
              </div>
              <div className="flex items-center group">
                <div className="p-2 rounded-full bg-slate-800 mr-3 group-hover:bg-sky-600 transition-colors duration-300">
                  <Mail size={16} className="text-slate-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-slate-300 group-hover:text-white transition-colors">info@lemontree.com</span>
              </div>
            </div>
          </div>

          {/* Hotel Amenities */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-sky-400">Hotel Amenities</h3>
            <div className="grid grid-cols-2 gap-3">
              {amenities.map(({ Icon, label }, index) => (
                <div key={index} className="flex items-center group">
                  <div className="p-2 rounded-full bg-slate-800 mr-2 group-hover:bg-sky-600 transition-colors duration-300">
                    <Icon size={16} className="text-slate-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-sm text-slate-300 group-hover:text-white transition-colors">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile View - Dropdown Menus */}
        <div className="md:hidden pb-8 mb-8">
          {/* Quick Links Dropdown */}
          <div className="mb-4">
            <button
              onClick={() => toggleDropdown('quickLinks')}
              className="flex justify-between items-center w-full py-3 px-4 bg-slate-800/50 rounded-lg text-left"
            >
              <h3 className="font-bold text-lg text-sky-400">Quick Links</h3>
              {openDropdown === 'quickLinks' ? 
                <ChevronUp size={20} className="text-sky-400" /> : 
                <ChevronDown size={20} className="text-sky-400" />
              }
            </button>
            {openDropdown === 'quickLinks' && (
              <ul className="mt-2 ml-4 space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.url}
                      className="text-sm text-slate-300 hover:text-sky-400 transition-all duration-300 block py-1"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Services Dropdown */}
          <div className="mb-4">
            <button
              onClick={() => toggleDropdown('services')}
              className="flex justify-between items-center w-full py-3 px-4 bg-slate-800/50 rounded-lg text-left"
            >
              <h3 className="font-bold text-lg text-sky-400">Our Services</h3>
              {openDropdown === 'services' ? 
                <ChevronUp size={20} className="text-sky-400" /> : 
                <ChevronDown size={20} className="text-sky-400" />
              }
            </button>
            {openDropdown === 'services' && (
              <ul className="mt-2 ml-4 space-y-2">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      to={service.url}
                      className="text-sm text-slate-300 hover:text-sky-400 transition-all duration-300 block py-1"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Contact Dropdown */}
          <div className="mb-4">
            <button
              onClick={() => toggleDropdown('contact')}
              className="flex justify-between items-center w-full py-3 px-4 bg-slate-800/50 rounded-lg text-left"
            >
              <h3 className="font-bold text-lg text-sky-400">Contact Us</h3>
              {openDropdown === 'contact' ? 
                <ChevronUp size={20} className="text-sky-400" /> : 
                <ChevronDown size={20} className="text-sky-400" />
              }
            </button>
            {openDropdown === 'contact' && (
              <div className="mt-2 ml-4 space-y-3 text-sm">
                <div className="flex items-start group">
                  <div className="p-2 rounded-full bg-slate-800 mr-3 group-hover:bg-sky-600 transition-colors duration-300 mt-0.5">
                    <MapPin size={16} className="text-slate-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-slate-300 group-hover:text-white transition-colors">123 Catering Street, Hyderabad</span>
                </div>
                <div className="flex items-center group">
                  <div className="p-2 rounded-full bg-slate-800 mr-3 group-hover:bg-sky-600 transition-colors duration-300">
                    <Phone size={16} className="text-slate-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-slate-300 group-hover:text-white transition-colors">+91 98765 43210</span>
                </div>
                <div className="flex items-center group">
                  <div className="p-2 rounded-full bg-slate-800 mr-3 group-hover:bg-sky-600 transition-colors duration-300">
                    <Mail size={16} className="text-slate-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-slate-300 group-hover:text-white transition-colors">info@lemontree.com</span>
                </div>
              </div>
            )}
          </div>

          {/* Amenities Dropdown */}
          <div className="">
            <button
              onClick={() => toggleDropdown('amenities')}
              className="flex justify-between items-center w-full py-3 px-4 bg-slate-800/50 rounded-lg text-left"
            >
              <h3 className="font-bold text-lg text-sky-400">Hotel Amenities</h3>
              {openDropdown === 'amenities' ? 
                <ChevronUp size={20} className="text-sky-400" /> : 
                <ChevronDown size={20} className="text-sky-400" />
              }
            </button>
            {openDropdown === 'amenities' && (
              <div className="mt-2 ml-4 grid grid-cols-2 gap-3">
                {amenities.map(({ Icon, label }, index) => (
                  <div key={index} className="flex items-center group">
                    <div className="p-2 rounded-full bg-slate-800 mr-2 group-hover:bg-sky-600 transition-colors duration-300">
                      <Icon size={16} className="text-slate-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-sm text-slate-300 group-hover:text-white transition-colors">{label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Social Media and Copyright Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-5 border-t border-slate-700">
          {/* Social Media Icons */}
          <div className="flex items-center mb-4 md:mb-0">
            <p className="font-medium text-sm mr-4 tracking-wider uppercase text-sky-400">
              FOLLOW US
            </p>
            <div className="flex md:space-x-3">
              {socialIcons.map(({ Icon, url, label }, index) => (
                <a
                  key={index}
                  href={url}
                  className="bg-slate-800 text-white ml-1 w-10 h-10 flex items-center justify-center text-lg rounded-full hover:bg-gradient-to-r hover:from-sky-500 hover:to-blue-600 transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1 group"
                  aria-label={`Follow us on ${label}`}
                  title={label}
                >
                  <Icon size={18} className="group-hover:rotate-6 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-xs text-slate-400">
            <p>©{new Date().getFullYear()} BY LEMON TREE HOTELS LTD. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;