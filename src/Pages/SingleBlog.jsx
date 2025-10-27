import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogsData } from '../Components/BlogsData';

const SingleBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSharing, setIsSharing] = useState(false);

  useEffect(() => {
    // Find the blog with matching ID
    const foundBlog = blogsData.find(b => b.id === parseInt(id));
    
    if (foundBlog) {
      setBlog(foundBlog);
      // Find related blogs (same category or similar tags)
      const related = blogsData
        .filter(b => b.id !== foundBlog.id && 
          (b.category === foundBlog.category || 
           b.tags.some(tag => foundBlog.tags.includes(tag))))
        .slice(0, 3);
      setRelatedBlogs(related);
    }
    
    setLoading(false);
  }, [id]);

  const handleShare = (platform) => {
    setIsSharing(true);
    const url = window.location.href;
    const text = blog.title;
    
    let shareUrl = '';
    
    switch(platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
        break;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${text} ${url}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
      default:
        return;
    }
    
    window.open(shareUrl, '_blank');
    setTimeout(() => setIsSharing(false), 1000);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#3394BB]"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Blog Not Found</h1>
          <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
          <Link to="/blogs" className="inline-block bg-[#3394BB] text-white px-6 py-2 rounded-lg hover:bg-[#2a7da8] transition-colors">
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Image */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-10">
          <div className="max-w-4xl mx-auto">
            <span className="bg-[#3394BB] text-white text-sm font-semibold px-3 py-1 rounded-full mb-4 inline-block">
              {blog.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">{blog.title}</h1>
            <div className="flex items-center text-sm text-white">
              <img
                src={blog.authorAvatar}
                alt={blog.author}
                className="w-10 h-10 rounded-full mr-3 border-2 border-white"
              />
              <span>{blog.author}</span>
              <span className="mx-2">•</span>
              <span>{blog.date}</span>
              <span className="mx-2">•</span>
              <span>{blog.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
            
            {/* Tags */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Share Buttons */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold mb-3">Share this article</h3>
              <div className="flex gap-3 flex-wrap">
                <button 
                  onClick={() => handleShare('facebook')}
                  disabled={isSharing}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                  Facebook
                </button>
                <button 
                  onClick={() => handleShare('twitter')}
                  disabled={isSharing}
                  className="bg-sky-500 text-white px-4 py-2 rounded hover:bg-sky-600 transition-colors disabled:opacity-50 flex items-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                  Twitter
                </button>
                <button 
                  onClick={() => handleShare('whatsapp')}
                  disabled={isSharing}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors disabled:opacity-50 flex items-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.117 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z" clipRule="evenodd" />
                  </svg>
                  WhatsApp
                </button>
                <button 
                  onClick={() => handleShare('linkedin')}
                  disabled={isSharing}
                  className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors disabled:opacity-50 flex items-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                  LinkedIn
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Blogs */}
      {relatedBlogs.length > 0 && (
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedBlogs.map(relatedBlog => (
                <article key={relatedBlog.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="h-40 overflow-hidden">
                    <img
                      src={relatedBlog.image}
                      alt={relatedBlog.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-xs text-[#3394BB] font-semibold uppercase">
                      {relatedBlog.category}
                    </span>
                    <h3 className="font-bold mt-2 mb-2 text-gray-800">
                      <Link to={`/blog/${relatedBlog.id}`} className="hover:text-[#3394BB] transition-colors">
                        {relatedBlog.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{relatedBlog.excerpt}</p>
                    <div className="mt-3">
                      <Link 
                        to={`/blog/${relatedBlog.id}`} 
                        className="text-[#3394BB] hover:text-[#2a7da8] font-medium text-sm flex items-center group"
                      >
                        Read More
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-[#3394BB] text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="mb-6">Book your stay with us and experience exceptional hospitality</p>
          <Link 
            to="/book" 
            className="inline-block bg-white text-[#3394BB] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors transform hover:-translate-y-1"
          >
            Book Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SingleBlog;