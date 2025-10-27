import React, { useState } from 'react';

const MonsoonBreakSection = ({ 
  title = "YOUR MONSOON BREAK IS HERE",
  destinations = [
    {
      id: 1,
      title: "MOUNTAINS & HILL STATIONS",
      imageSrc: "https://www.lemontreehotels.com/uploads/summer/682db7f391e72moun.webp",
      imageAlt: "Mountains & Hill Stations",
      link: "/explore"
    },
    {
      id: 2,
      title: "WILDLIFE SAFARIS",
      imageSrc: "https://www.lemontreehotels.com/uploads/summer/682db7fb84f22nature.webp",
      imageAlt: "Wildlife Safaris",
      link: "/explore"
    },
    {
      id: 3,
      title: "SPIRITUAL AND HERITAGE ESCAPES",
      imageSrc: "https://www.lemontreehotels.com/uploads/summer/682db803d45d5Spiritual.webp",
      imageAlt: "Spiritual and Heritage Escapes",
      link: "/explore"
    }
  ]
}) => {
  const [imageLoading, setImageLoading] = useState({});
  const [imageError, setImageError] = useState({});

  const handleImageLoad = (id) => {
    setImageLoading(prev => ({ ...prev, [id]: false }));
  };

  const handleImageError = (id) => {
    setImageError(prev => ({ ...prev, [id]: true }));
    setImageLoading(prev => ({ ...prev, [id]: false }));
  };

  return (
    <section className="py-16 md:px-24 px-4 text-center bg-gradient-to-b from-blue-50 to-green-50">
      <div className="container mx-auto">
        <h2 className="md:text-4xl text-2xl font-bold mb-8 text-gray-800 relative inline-block">
          {title}
          <span className="absolute bottom-0 left-0 w-full h-1 bg-[#3394BB] transform scale-x-0 transition-transform duration-300 origin-bottom-right group-hover:scale-x-100 group-hover:origin-bottom-left"></span>
        </h2>
        
        {/* Card Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <article 
              key={destination.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl group"
            >
              <div className="relative h-56 overflow-hidden">
                {imageLoading[destination.id] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <div className="w-10 h-10 border-4 border-[#3394BB] border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
                {imageError[destination.id] ? (
                  <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">
                    <span>Image unavailable</span>
                  </div>
                ) : (
                  <img
                    src={destination.imageSrc}
                    alt={destination.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onLoad={() => handleImageLoad(destination.id)}
                    onError={() => handleImageError(destination.id)}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-4">
                <h3 className="md:text-xl text-lg text-center items-center font-semibold text-gray-800">{destination.title}</h3>
               
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MonsoonBreakSection;