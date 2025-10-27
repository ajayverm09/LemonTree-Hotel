import React, { useState } from 'react';

const RewardsSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <section className="relative w-full bg-gray-100 h-screen py-16 px-4 text-center overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Desktop Image */}
        <img
          src="https://www.lemontreehotels.com/assets/front/end/img/h-banner3.jpg"
          alt="Our Rewards Program"
          className="hidden md:block object-cover w-full h-full"
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
        
        {/* Mobile Image */}
        <img
          src="https://www.lemontreehotels.com/assets/front/images/kv-stay-banner-mob.jpg"
          alt="Our Rewards Program Mobile"
          className="md:hidden object-cover w-full h-full"
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
        
        {/* Fallback Background */}
        {imageError && (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-green-700"></div>
        )}
        
        {/* Loading State */}
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
        )}
      </div>

      {/* Overlay */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-black transition-opacity duration-1000"
        style={{ opacity: imageLoaded ? 0.5 : 0 }}
      ></div>

      {/* Text and Buttons - Mobile Only (Hidden on Big Screens) */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-8 md:hidden h-full flex items-center justify-center">
        <div className={`transform transition-all duration-1000 ${imageLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-2xl font-bold mb-3 text-white">REWARDING STAY</h2>
          <h3 className="text-lg font-semibold mb-4 text-white">GET EXCLUSIVE DISCOUNTS ON MEALS</h3>
          <p className="text-base mb-6 text-white">
            With Infinity Rewards your points go beyond stays. Join us to dine, relax, and indulge!
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col justify-center gap-3 mt-6">
            <a
              href="/explore"
              className="group bg-transparent border-2 border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
              aria-label="Explore rewards program"
            >
              <span className="flex items-center justify-center">
                Explore
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </a>
            <a
              href="/join"
              className="group bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-500 focus:ring-opacity-50 shadow-lg"
              aria-label="Join the rewards program now"
            >
              <span className="flex items-center justify-center">
                Join Now
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent opacity-30"></div>
    </section>
  );
};

export default RewardsSection;