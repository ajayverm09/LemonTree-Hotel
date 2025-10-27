import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with added top padding to prevent hiding under nav */}
      <div className="relative bg-[url('https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=1600&q=80')] md:h-[70vh] h-[50vh] pt-10 bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60"></div> {/* overlay */}
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center px-4">
            <h1
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Contact Us
            </h1>
            <p className="text-lg sm:text-xl text-center text-sky-100 max-w-2xl mx-auto">
              Have questions about our catering services? We'd love to hear from
              you. Reach out to our team for any inquiries.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information and Form Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Form */}
            <div className="bg-gray-50 p-6 sm:p-8 rounded-xl shadow-sm">
              <h2
                className="text-2xl font-bold mb-6"
                style={{ color: "#3394BB ", fontFamily: "Poppins, sans-serif" }}
              >
                Send us a message
              </h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#3394BB] focus:border-[#3394BB]"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#3394BB] focus:border-[#3394BB]"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#3394BB] focus:border-[#3394BB]"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#3394BB] focus:border-[#3394BB]"
                    placeholder="(123) 456-7890"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#3394BB] focus:border-[#3394BB]"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#3394BB] focus:border-[#3394BB]"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-[#3394BB] hover:text-[#3394BB] hover:bg-white text-white font-medium rounded-lg transition duration-150 ease-in-out"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2
                  className="text-2xl font-bold mb-6"
                  style={{
                    color: "#3394BB",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  Get in touch
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-[#3394BB]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        Our Address
                      </h3>
                      <p className="mt-1 text-gray-600">
                        123 Catering Street, Food District
                      </p>
                      <p className="text-gray-600">
                        Hyderabad, Telangana 500001, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-[#3394BB]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        Phone
                      </h3>
                      <p className="mt-1 text-gray-600">+91 98765 43210</p>
                      <p className="text-gray-600">Mon-Fri: 9am-6pm</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-[#3394BB]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        Email
                      </h3>
                      <p className="mt-1 text-gray-600">
                        info@craftmyplate.com
                      </p>
                      <p className="text-gray-600">catering@craftmyplate.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-sky-50 p-6 rounded-xl">
                <h3
                  className="text-xl font-bold mb-4"
                  style={{
                    color: "#3394BB",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  Business Hours
                </h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-700">Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Saturday</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-2xl font-bold mb-6 text-center"
            style={{ color: "#3394BB", fontFamily: "Poppins, sans-serif" }}
          >
            Find Us Here
          </h2>
          <div className="bg-white p-4 rounded-xl shadow-sm overflow-hidden">
            <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-lg overflow-hidden">
              {/* Google Maps Embed */}
              <iframe
                title="Craft My Plate Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.437441882435!2d78.48667137492855!3d17.3850443834901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb975d7d43a2a1%3A0x5a0a45a6b5bb3d4f!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1696060000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;