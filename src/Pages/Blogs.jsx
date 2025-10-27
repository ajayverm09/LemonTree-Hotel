import React, { useState, useEffect } from 'react';
import { blogsData } from '../Components/BlogsData';

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [visibleBlogs, setVisibleBlogs] = useState(6);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [showMobileCategories, setShowMobileCategories] = useState(false);

  const categories = [
    { id: 'all', name: 'All Blogs' },
    { id: 'travel', name: 'Travel' },
    { id: 'luxury', name: 'Luxury' },
    { id: 'food', name: 'Food' },
    { id: 'wellness', name: 'Wellness' }
  ];

  useEffect(() => {
    setLoading(true);
    // Simulate loading delay
    const timer = setTimeout(() => {
      const filtered = blogsData.filter(blog => {
        const matchesCategory = selectedCategory === 'all' || blog.category.toLowerCase() === selectedCategory;
        const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
        return matchesCategory && matchesSearch;
      });
      setFilteredBlogs(filtered);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [selectedCategory, searchTerm]);

  const loadMoreBlogs = () => {
    setVisibleBlogs(prev => prev + 3);
  };

  const resetFilters = () => {
    setSelectedCategory('all');
    setSearchTerm('');
    setVisibleBlogs(6);
  };

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    setShowMobileCategories(false);
  };

  return (
    <div className="min-h-screen overflow-hidden bg-gray-50">
      {/* Hero Section with Background Image */}
      <section className="relative bg-cover bg-center md:h-[70vh] bg-no-repeat text-white py-20 md:py-32 overflow-hidden" 
               style={{ backgroundImage: "url('https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')" }}>
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#3394BB]/80 to-[#12a8e3]/80"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl pt-20 font-bold mb-4 animate-fade-in">Our Blogs</h1>
          <p className="text-xl max-w-3xl mx-auto animate-fade-in-delay">
            Discover travel tips, destination guides, and the latest news from Lemon Tree Hotels
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col gap-4">
            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search blogs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3394BB]"
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute left-3 top-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Category Filter - Desktop */}
            <div className="hidden md:flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => handleCategorySelect(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-[#3394BB] text-white shadow-md transform scale-105'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category.name}
                </button>
              ))}
              {(selectedCategory !== 'all' || searchTerm) && (
                <button
                  onClick={resetFilters}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-red-100 text-red-600 hover:bg-red-200 transition-colors"
                >
                  Reset
                </button>
              )}
            </div>

            {/* Category Filter - Mobile */}
            <div className="md:hidden">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-sm font-medium text-gray-700 mr-2">Filter by:</span>
                  <span className="text-sm font-medium text-[#3394BB]">
                    {categories.find(cat => cat.id === selectedCategory)?.name}
                  </span>
                </div>
                <button
                  onClick={() => setShowMobileCategories(!showMobileCategories)}
                  className="p-2 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                </button>
              </div>

              {/* Mobile Category Dropdown */}
              {showMobileCategories && (
                <div className="mt-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="grid grid-cols-2 gap-2">
                    {categories.map(category => (
                      <button
                        key={category.id}
                        onClick={() => handleCategorySelect(category.id)}
                        className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                          selectedCategory === category.id
                            ? 'bg-[#3394BB] text-white'
                            : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                        }`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                  {(selectedCategory !== 'all' || searchTerm) && (
                    <button
                      onClick={resetFilters}
                      className="mt-2 w-full px-3 py-2 rounded-md text-sm font-medium bg-red-100 text-red-600 hover:bg-red-200 transition-colors"
                    >
                      Reset Filters
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
          {loading && (
            <div className="mt-4 flex justify-center">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#3394BB]"></div>
            </div>
          )}
        </div>
      </section>

      {/* Results Count */}
      <section className="container hidden md:block mx-auto px-4 py-2">
        <div className="text-sm text-gray-600">
          {filteredBlogs.length > 0 ? (
            <p>Showing {Math.min(visibleBlogs, filteredBlogs.length)} of {filteredBlogs.length} blogs</p>
          ) : (
            <p>No blogs found matching your criteria.</p>
          )}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.slice(0, visibleBlogs).map((blog, index) => (
            <article 
              key={blog.id} 
              className="bg-white group rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#3394BB] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {blog.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3 text-sm text-gray-500">
                  <span>{blog.date}</span>
                  <span className="mx-2">•</span>
                  <span>{blog.readTime}</span>
                </div>
                <h2 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-[#3394BB] transition-colors">
                  <a href={`/blog/${blog.id}`}>{blog.title}</a>
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={blog.authorAvatar}
                      alt={blog.author}
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <span className="text-sm text-gray-700">{blog.author}</span>
                  </div>
                  <a
                    href={`/blog/${blog.id}`}
                    className="text-[#3394BB] hover:text-[#12a8e3] font-medium text-sm flex items-center group"
                  >
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredBlogs.length === 0 && !loading && (
          <div className="text-center py-12">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-gray-500 text-lg">No blogs found matching your criteria.</p>
            <button 
              onClick={resetFilters}
              className="mt-4 px-4 py-2 bg-[#3394BB] text-white rounded-lg hover:bg-[#12a8e3] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Load More Button */}
        {filteredBlogs.length > visibleBlogs && (
          <div className="text-center mt-8">
            <button
              onClick={loadMoreBlogs}
              className="px-6 py-3 bg-[#3394BB] text-white rounded-lg border border-[#3394BB] hover:bg-white hover:text-[#3394BB] transition-colors inline-flex items-center"
            >
              Load More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </section>

      {/* Newsletter Section */}
      <section className="bg-sky-100 py-12 mt-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-6">Get the latest travel tips and exclusive offers delivered to your inbox</p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3394BB]"
            />
            <button className="bg-[#3394BB] text-white px-6 py-2 rounded-lg border border-[#3394BB] hover:text-[#3394BB] hover:bg-white transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;