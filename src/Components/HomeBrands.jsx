import React from 'react';

const BrandsSection = () => {
  return (
    <section className="bg-purple-800 text-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">OUR BRANDS</h2>
        <p className="text-base md:text-lg mb-8 max-w-4xl mx-auto">
          Aurika Hotels & Resorts is the upscale brand of Lemon Tree Hotels. We curate extraordinary experiences in a stunning ambience, whenever you stay with us. Aurika hotels are stylishly elegant yet comfortably informal, allowing you to be just as relaxed as you wish. With an emphasis on design, our hotels are a reflection of the soul of the destination where they are located, and each has its own personality. These hotels feature new-age dining and innovative entertainment options, complemented by invigorating fitness and wellness facilities, that add a sparkle to your stay.
        </p>
        
        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:px-10 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          <div className="flex items-center justify-center h-16 md:h-20 p-2 bg-[#9f7db7] bg-opacity-5 rounded-lg hover:bg-opacity-10 transition-all duration-300">
            <img 
              src="https://www.lemontreehotels.com/assets/front/end/img/aurika.png" 
              alt="Aurika Hotels" 
              className="h-12 md:h-16 max-h-full w-auto filter brightness-0 invert transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="flex items-center justify-center h-16 md:h-20 p-2 bg-[#9f7db7] bg-opacity-5 rounded-lg hover:bg-opacity-10 transition-all duration-300">
            <img 
              src="https://www.lemontreehotels.com/assets/front/end/img/lth-p.png" 
              alt="Lemon Tree Premier" 
              className="h-12 md:h-16 max-h-full w-auto filter brightness-0 invert transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="flex items-center justify-center h-16 md:h-20 p-2 bg-[#9f7db7] bg-opacity-5 rounded-lg hover:bg-opacity-10 transition-all duration-300">
            <img 
              src="https://www.lemontreehotels.com/assets/front/end/img/lth-h.png" 
              alt="Lemon Tree Hotels" 
              className="h-12 md:h-16 max-h-full w-auto filter brightness-0 invert transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="flex items-center justify-center h-16 md:h-20 p-2 bg-[#9f7db7] bg-opacity-5 rounded-lg hover:bg-opacity-10 transition-all duration-300">
            <img 
              src="https://www.lemontreehotels.com/assets/front/end/img/brand/kph.png" 
              alt="Keys Prima" 
              className="h-12 md:h-16 max-h-full w-auto transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="flex items-center justify-center h-16 md:h-20 p-2 bg-[#9f7db7] bg-opacity-5 rounded-lg hover:bg-opacity-10 transition-all duration-300">
            <img 
              src="https://www.lemontreehotels.com/assets/front/end/img/brand/redfox.png" 
              alt="RedFox" 
              className="h-12 md:h-20 max-h-full w-auto filter brightness-0 invert transition-transform duration-300 hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;