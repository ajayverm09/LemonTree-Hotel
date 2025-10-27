import React from 'react';

const AboutHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: 'url("https://www.lemontreehotels.com/assets/front/images/rewards_banner_1.jpg")' }}
      >
        {/* Overlay to darken the background */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-5 md:py-16 text-center">
        <div className=" rounded-2xl p-2 md:p-12 shadow-2xl">
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            About Us
          </h2>
          
          <div className="space-y-6 text-white">
            <p className="text-base md:text-lg leading-relaxed">
              Whether planning a business trip, a family holiday, or a weekend escape, Lemon Tree Hotels offers the perfect blend of comfort, convenience, and value. From upscale experiences to budget-friendly stays, our brand portfolio is designed to meet diverse preferences while ensuring consistent quality and warm Indian hospitality.
            </p>
            
            <p className="text-base hidden md:block md:text-lg leading-relaxed">
              Embarking on a long-awaited vacation, planning a blissful wedding, hosting a milestone event, or going on an extended business trip, Lemon Tree Hotels is ready to welcome you. From bustling cityscapes to tranquil natural escapes, our presence across diverse destinations brings you consistency with a refreshingly personal touch.
            </p>
          </div>
          
          <div className="mt-10">
            <a href='/blogs' className="bg-white text-gray-900 border border-gray-900 hover:bg-gray-900 hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Explore Our Hotels
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default AboutHero;