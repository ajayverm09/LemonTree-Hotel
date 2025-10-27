import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const HeroSection = ({ 
  desktopImage = "https://www.lemontreehotels.com/assets/front/end/img/hero-banner5.jpg",
  mobileImage = "https://www.lemontreehotels.com/assets/front/end/img/hero-mobile-banner5.jpg",
  title = "Welcome to Lemon Tree Hotels",
  subtitle = "Experience luxury, comfort, and a delightful stay at our hotels.",
  overlayOpacity = 0.4,
  showContactButton = true
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <section 
      className={`relative w-full overflow-hidden ${
        isMobile ? 'h-[70vh]' : 'h-screen'
      }`} 
      aria-labelledby="hero-title"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={isMobile ? mobileImage : desktopImage}
          alt="Lemon Tree Hotels - Luxury accommodation"
          className={`w-full h-full transition-opacity duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          } ${
            isMobile 
              ? 'object-cover object-center' 
              : 'object-cover'
          }`}
          style={{
            objectPosition: isMobile ? 'center' : 'center'
          }}
          onLoad={handleImageLoad}
          loading="eager"
          decoding="async"
        />
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
        )}
      </div>

      {/* Overlay */}
      <div 
        className="absolute inset-0 z-10 bg-black/50"
        style={{ opacity: overlayOpacity }}
        aria-hidden="true"
      ></div>

      {/* Hero Content */}
      <div className={`relative z-20 flex flex-col justify-center items-center px-4 text-center ${
        isMobile ? 'h-full py-8' : 'h-full md:pt-72'
      }`}>
        <div className={`${isMobile ? 'mb-8' : 'mt-0'}`}>
          <h1 id="hero-title" className={`font-bold md:mt-10 mt-50 text-white mb-4 ${
            isMobile ? 'text-2xl' : 'text-3xl md:text-5xl'
          }`}>
            {title}
          </h1>
          
          <p className={`text-white mb-6 ${
            isMobile 
              ? 'text-base max-w-sm mx-auto' 
              : 'text-lg md:text-xl max-w-2xl mx-auto mb-8'
          }`}>
            {subtitle}
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className={`inline-block font-semibold border border-[#3394BB] rounded-full hover:text-[#12a8e3] hover:bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-300 transform hover:scale-105 ${
                isMobile 
                  ? 'px-6 py-2 text-sm bg-[#3394BB] text-white' 
                  : 'px-8 py-3 bg-[#3394BB] text-white'
              }`}
              aria-label="Book your stay at Lemon Tree Hotels"
            >
              Book Now
            </a>
            
            {showContactButton && !isMobile && (
              <a 
                href="/contact"
                className="inline-block px-8 py-3 bg-transparent text-white font-semibold rounded-full border-2 border-white hover:bg-white hover:text-[#3394BB] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent transition duration-300 transform hover:scale-105"
                aria-label="Contact Lemon Tree Hotels"
              >
                Get in Touch
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

HeroSection.propTypes = {
  desktopImage: PropTypes.string,
  mobileImage: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  overlayOpacity: PropTypes.number,
  showContactButton: PropTypes.bool
};

export default HeroSection;