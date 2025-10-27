import React from "react";

const hotels = [
  {
    name: "Lemon Tree Hotel, Mira Road, Mumbai",
    img: "https://www.lemontreehotels.com/uploads/gimages/6826d9d95af98Facade%20-%20Day.jpg",
  },
  {
    name: "Lemon Tree Premier, Navi Mumbai",
    img: "https://www.lemontreehotels.com/uploads/gimages/68dbc3e3a330aimg_9327-img_9331%20(1).jpg",
  },
  {
    name: "Lemon Tree Hotel, Chinchwad, Pune",
    img: "https://www.lemontreehotels.com/uploads/gimages/681de04df3164Main%20building.jpg",
  },
  {
    name: "Lemon Tree Hotel, Ranchi",
    img: "https://www.lemontreehotels.com/uploads/gimages/68efa9c5ab5ebFacade%20Day.jpeg",
  },
];

const NewAdditions = () => {
  return (
    <div>
      {/* New Section Added at the Top */}
      <section className="bg-[#3394BB] text-white py-8">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="md:text-4xl text-2xl font-bold uppercase tracking-wide mb-4 md:mb-8">
            INDIA'S FASTEST GROWING CHAIN
          </h2>
          <div className="flex justify-center gap-4 md:gap-16">
            <div className="text-center">
              <h3 className="text-3xl font-semibold">4</h3>
              <p className="text-sm">COUNTRIES</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-semibold">73</h3>
              <p className="text-sm">DESTINATIONS</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-semibold">110+</h3>
              <p className="text-sm">HOTELS</p>
            </div>
          </div>
        </div>
      </section>

      {/* New Additions Section */}
      <section className="bg-[#F4F4F4] py-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-wide text-gray-900 uppercase">
            New Additions
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8 px-6">
          {hotels.map((hotel, index) => (
            <div
              key={index}
              className="shadow-lg bg-[#F4F4F4] rounded-lg overflow-hidden w-[300px] flex flex-col items-center hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={hotel.img}
                alt={hotel.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 text-center flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {hotel.name}
                </h3>
                <div className="mt-auto flex justify-center gap-4">
                  <a href="/blogs" className="border border-gray-400 px-4 py-2 rounded hover:bg-gray-700 hover:text-white text-gray-700 text-sm font-medium">
                    Know More
                  </a>
                  <a href="/contact" className="bg-[#3394BB] hover:text-[#3394BB] hover:bg-white border border-[#3394BB] text-white px-4 py-2 rounded text-sm font-medium">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default NewAdditions;
