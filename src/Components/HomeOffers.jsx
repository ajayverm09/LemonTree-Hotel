import React, { useState } from 'react';

const OffersSection = () => {
  const [imageLoaded, setImageLoaded] = useState({});
  const [imageError, setImageError] = useState({});

  const offers = [
    {
      id: 1,
      title: "MORE AND MERRIER",
      imageSrc: "https://www.lemontreehotels.com/assets/front/end/img/HappyHours.jpg",
      imageAlt: "More and Merrier",
      link: "/blogs"
    },
    {
      id: 2,
      title: "DAY ROOMS",
      imageSrc: "https://www.lemontreehotels.com/assets/front/end/img/DayUse.jpg",
      imageAlt: "Day Rooms",
      link: "/blogs"
    },
    {
      id: 3,
      title: "MEMBER'S RATE",
      imageSrc: "https://www.lemontreehotels.com/assets/front/end/img/member-rate_img.jpg",
      imageAlt: "Member's Rate",
      link: "/blogs"
    }
  ];

  const handleImageLoad = (id) => {
    setImageLoaded(prev => ({ ...prev, [id]: true }));
  };

  const handleImageError = (id) => {
    setImageError(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section className="py-16 px-4 md:px-20 text-center bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-gray-800 relative inline-block">
          OFFERS
          <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-500 transform scale-x-0 transition-transform duration-300 origin-bottom-right group-hover:scale-x-100 group-hover:origin-bottom-left"></span>
        </h2>
        
        {/* Card Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <article 
              key={offer.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl group"
            >
              <div className="relative h-64 overflow-hidden">
                {/* Loading State */}
                {!imageLoaded[offer.id] && !imageError[offer.id] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                    <div className="w-10 h-10 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
                
                {/* Error State */}
                {imageError[offer.id] ? (
                  <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">
                    <span>Image unavailable</span>
                  </div>
                ) : (
                  <img
                    src={offer.imageSrc}
                    alt={offer.imageAlt}
                    className={`w-full h-full transition-transform duration-500 group-hover:scale-110 ${imageLoaded[offer.id] ? 'opacity-100' : 'opacity-0'}`}
                    onLoad={() => handleImageLoad(offer.id)}
                    onError={() => handleImageError(offer.id)}
                  />
                )}
              </div>
              
              {/* Text Content and Button Side by Side */}
              <div className="p-6 flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-800">{offer.title}</h3>
                
                <a
                  href={offer.link}
                  className="inline-flex items-center text-yellow-600 font-semibold hover:text-yellow-700 transition-colors duration-200 group"
                  aria-label={`Explore more about ${offer.title}`}
                >
                  Explore More
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-2 transform transition-transform duration-200 group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersSection;