import React from "react";

const events = [
  {
    name: "Corporate Events",
    img: "https://www.lemontreehotels.com/assets/front/end/img/event-1.jpg",
  },
  {
    name: "Wedding and Social Events",
    img: "https://www.lemontreehotels.com/assets/front/end/img/wedding-and-event-image.jpg",
  },
  {
    name: "Conference Rooms",
    img: "https://www.lemontreehotels.com/assets/front/end/img/event-3.jpg",
  },
  {
    name: "Special Occasions",
    img: "https://www.lemontreehotels.com/assets/front/end/img/event-2.jpg",
  },
];

const EventsAndConferences = () => {
  return (
    <section className="py-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold tracking-wide text-gray-900 uppercase">
          EVENTS & CONFERENCES
        </h2>
      </div>

      <div className=" md:flex-row flex flex-col items-center justify-center gap-8">
        {events.map((event, index) => (
          <div
            key={index}
            className="w-64 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={event.img}
              alt={event.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{event.name}</h3>
              <div className="mt-4 flex justify-center">
                <a href="/contact" className="bg-sky-600 hover:text-sky-700 hover:bg-white border border-sky-700 text-white px-4 py-2 rounded text-sm font-medium">
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

export default EventsAndConferences;