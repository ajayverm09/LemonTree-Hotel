import React, { useState } from "react";

const experiences = [
  // Nature Experiences
  {
    id: 1,
    name: "Mahi Dam",
    img: "https://www.lemontreehotels.com/uploads/city/687e377b9fbccMahi%20Dam.jpg",
    category: "nature"
  },
  {
    id: 2,
    name: "Corbett",
    img: "https://www.lemontreehotels.com/uploads/city/67ea7a2ee195bcorbett.jpg",
    category: "nature"
  },
  {
    id: 3,
    name: "Gangtok",
    img: "https://www.lemontreehotels.com/uploads/city/67ea7cd7e446bgangtok.jpg",
    category: "nature"
  },
  {
    id: 4,
    name: "Kanha",
    img: "https://www.lemontreehotels.com/uploads/city/67ea8438675e8kanha_exp.jpg",
    category: "nature"
  },
  
  // Romantic Experiences
  {
    id: 5,
    name: "Goa",
    img: "https://www.lemontreehotels.com/uploads/city/67ea8a4a3d826goa_exp.jpg",
    category: "romantic"
  },
  {
    id: 6,
    name: "Jaipur",
    img: "https://www.lemontreehotels.com/uploads/city/67efb191aae0267ea8267e577bjaipur.jpg",
    category: "romantic"
  },
  {
    id: 7,
    name: "Jamnagar",
    img: "https://www.lemontreehotels.com/uploads/city/682dd03eddfe0Jamnagar.jpg",
    category: "romantic"
  },
  {
    id: 8,
    name: "Port Blair",
    img: "https://www.lemontreehotels.com/uploads/city/67ea8f9da1c40port_exp.jpg",
    category: "romantic"
  },
  
  // Beach Experiences
  {
    id: 9,
    name: "Goa Beach",
    img: "https://www.lemontreehotels.com/uploads/city/67ea8a4a3d826goa_exp.jpg",
    category: "beach"
  },
  {
    id: 10,
    name: "Dwarka",
    img: "https://www.lemontreehotels.com/uploads/city/67ea7b19edc1aDwarka.jpg",
    category: "cultural"
  },
  {
    id: 11,
    name: "Port Blair Beach",
    img: "https://www.lemontreehotels.com/uploads/city/67ea8f9da1c40port_exp.jpg",
    category: "beach"
  },
  
  // Cultural Experiences
  {
    id: 12,
    name: "Jaipur Heritage",
    img: "https://www.lemontreehotels.com/uploads/city/67efb191aae0267ea8267e577bjaipur.jpg",
    category: "cultural"
  },
  {
    id: 14,
    name: "Kumbhalgarh",
    img: "https://www.lemontreehotels.com/uploads/city/67efb483d6c54kumbhalgarhe.jpg",
    category: "cultural"
  },
  {
    id: 15,
    name: "Heritage Site",
    img: "https://www.lemontreehotels.com/uploads/city/687a23c12dbb0Adobe%20Express%20-%20file.jpg",
    category: "cultural"
  }
];

const categories = [
  { id: "all", name: "All" },
  { id: "nature", name: "Nature" },
  { id: "romantic", name: "Romantic" },
  { id: "beach", name: "Beach" },
  { id: "cultural", name: "Cultural" }
];

const Experiences = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredExperiences = activeCategory === "all" 
    ? experiences 
    : experiences.filter(exp => exp.category === activeCategory);

  return (
    <section className="md:py-16 py-5 md:px-16 px-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold tracking-wide text-gray-900 uppercase">
          EXPERIENCES
        </h2>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center mb-8">
        <div className="bg-gray-100 rounded-lg p-1 inline-flex">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`md:px-4 px-2 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                activeCategory === category.id
                  ? "bg-white text-[#3394BB] shadow-sm"
                  : "text-gray-700 hover:text-[#3394BB]"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Experiences Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredExperiences.map((experience) => (
          <div
            key={experience.id}
            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={experience.img}
                alt={experience.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute top-2 right-2">
                <span className="bg-white bg-opacity-90 text-xs font-semibold px-2 py-1 rounded capitalize">
                  {experience.category}
                </span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{experience.name}</h3>
              <div className="mt-4 flex justify-between">
                <a href="/blogs" className="border border-gray-400 px-4 py-2 rounded hover:bg-gray-700 hover:text-white text-gray-700 text-sm font-medium transition-colors duration-200">
                  Explore More
                </a>
                <a href="/contact" className="bg-[#3394BB] hover:text-[#3394BB] hover:bg-white border border-[#3394BB] text-white px-4 py-2 rounded text-sm font-medium transition-colors duration-200">
                  Book Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;