import React, { useState } from 'react';
import { 
  BookOpen, 
  Building, 
  Trophy, 
  Target, 
  Handshake, 
  Leaf, 
  Shield, 
  Users, 
  Dog,
  ChevronDown,
  Menu
} from 'lucide-react';

const OurStory = () => {
  const [activeSection, setActiveSection] = useState('our-story');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections = [
    { id: 'our-story', title: 'Our Story', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'our-brands', title: 'Our Brands', icon: <Building className="w-5 h-5" /> },
    { id: 'awards', title: 'Awards', icon: <Trophy className="w-5 h-5" /> },
    { id: 'vision-mission-values', title: 'Vision, Mission, Values', icon: <Target className="w-5 h-5" /> },
    { id: 'csr', title: 'Corporate Social Responsibility', icon: <Handshake className="w-5 h-5" /> },
    { id: 'eco-friendly-practices', title: 'Eco-Friendly Practices', icon: <Leaf className="w-5 h-5" /> },
    { id: 'safety-and-security', title: 'Safety and Security', icon: <Shield className="w-5 h-5" /> },
    { id: 'management', title: 'Management', icon: <Users className="w-5 h-5" /> },
    { id: 'pooch-policy', title: 'Pooch Policy', icon: <Dog className="w-5 h-5" /> }
  ];

  const brands = [
    { name: 'Aurika Hotels and Resorts', segment: 'Upscale' },
    { name: 'Lemon Tree Premier', segment: 'Upper Midscale' },
    { name: 'Lemon Tree Hotels', segment: 'Midscale' },
    { name: 'Red Fox by Lemon Tree Hotels', segment: 'Economy' },
    { name: 'Keys Prima by Lemon Tree Hotels', segment: 'Upper Midscale' },
    { name: 'Keys Select by Lemon Tree Hotels', segment: 'Midscale' },
    { name: 'Keys Lite by Lemon Tree Hotels', segment: 'Economy' }
  ];

  const sectionContent = {
    'our-story': {
      title: 'Our Story',
      content: [
        "In the early 2000s, 80% of the branded hotel supply in India was in the upscale/luxury segment. There was clearly enormous latent demand in the midscale and economy segments, which were then unmet needs. Lemon Tree Hotels was founded as the category creator for the branded mid-market hotel space in India.",
        "Today, Lemon Tree Hotels Limited (LTHL) is one of the largest hotel chains in India, and owns/leases/operates/franchises hotels across the upscale, upper-midscale, midscale, and economy segments. The group offers seven brands to meet guests' needs across all levels, viz. Aurika Hotels & Resorts, Lemon Tree Premier, Lemon Tree Hotels, Red Fox Hotels by Lemon Tree Hotels, Keys Prima by Lemon Tree Hotels, Keys Select by Lemon Tree Hotels, and Keys Lite by Lemon Tree Hotels."
      ]
    },
    'our-brands': {
      title: 'Our Brands',
      content: ["LTHL offers seven brands to meet guests' needs across all levels:"],
      brands: brands
    },
    'awards': {
      title: 'Awards',
      content: [
        "Over the years, Lemon Tree Hotels has received numerous awards for excellence in hospitality, customer service, and innovation. These accolades reflect the commitment to delivering high-quality experiences to all guests.",
        "Our awards include the 'Best Midscale Hotel Chain in India' by Travel + Leisure India, 'Innovative Hotel Chain of the Year' by Hospitality India, and 'Excellence in Customer Service' by the Indian Hospitality Excellence Awards. We have also been recognized for our sustainable practices and employee engagement programs.",
        "In 2023, Lemon Tree Hotels was honored with the 'Digital Transformation Award' for our innovative use of technology in enhancing guest experiences. Our properties have consistently received high ratings on various travel platforms, reflecting our commitment to excellence."
      ]
    },
    'vision-mission-values': {
      title: 'Vision, Mission, Values',
      content: [
        "Lemon Tree Hotels aims to create value for its guests, employees, and stakeholders through exceptional service and commitment to sustainable practices. The company's mission is to be a leader in the mid-market hotel segment, offering superior experiences at affordable prices.",
        "Our vision is to be the most admired hotel chain in India, known for our warm hospitality, innovative services, and commitment to guest satisfaction. We strive to create memorable experiences that exceed expectations and build lasting relationships with our guests.",
        "At Lemon Tree Hotels, our core values include integrity, excellence, innovation, and social responsibility. We believe in treating our guests, employees, and partners with respect and fairness. Our commitment to these values guides every decision we make and action we take."
      ]
    },
    'csr': {
      title: 'Corporate Social Responsibility (CSR)',
      content: [
        "Lemon Tree Hotels is committed to making a positive impact on society through various CSR initiatives that focus on education, environmental sustainability, and community welfare.",
        "Our 'Citizen Lemon Tree' program is at the heart of our CSR efforts, focusing on three key areas: education for underprivileged children, environmental conservation, and community development. We have established learning centers in several communities to provide quality education to children who lack access to proper schooling.",
        "We also support various healthcare initiatives, including medical camps and health awareness programs in the communities where we operate. Our environmental initiatives include tree plantation drives, waste management programs, and water conservation projects that benefit both local communities and the planet."
      ]
    },
    'eco-friendly-practices': {
      title: 'Eco-Friendly Practices',
      content: [
        "Lemon Tree Hotels adopts eco-friendly practices aimed at reducing our environmental footprint. These initiatives include energy conservation, water management, waste reduction, and promoting green building standards.",
        "All our properties follow strict energy conservation protocols, including the use of LED lighting, energy-efficient HVAC systems, and smart sensors to optimize energy consumption. We have implemented water-saving measures such as rainwater harvesting, water recycling systems, and low-flow fixtures across all our hotels.",
        "Our waste management program focuses on the principles of reduce, reuse, and recycle. We have eliminated single-use plastics in many areas of our operations and have implemented comprehensive waste segregation systems. Several of our properties have achieved green building certifications, reflecting our commitment to sustainable construction and operations."
      ]
    },
    'safety-and-security': {
      title: 'Safety and Security',
      content: [
        "The safety and security of guests and employees is a top priority at Lemon Tree Hotels. The company follows strict safety protocols and standards to ensure that all guests have a safe and comfortable stay.",
        "Our properties are equipped with advanced security systems including 24/7 surveillance, access control, and professional security personnel. We conduct regular safety audits and drills to ensure our team is prepared to handle any emergency situation effectively.",
        "In response to the COVID-19 pandemic, we have implemented enhanced health and safety protocols that include regular sanitization, social distancing measures, and contactless services. Our commitment to safety extends to food safety, with strict hygiene standards in all our restaurants and kitchens."
      ]
    },
    'management': {
      title: 'Management',
      content: [
        "Lemon Tree Hotels is led by a dynamic management team with decades of experience in the hospitality industry. The team's vision and leadership drive the company's success in meeting guest expectations and achieving business goals.",
        "Our leadership team comprises industry veterans who bring diverse expertise from various sectors of hospitality. Under the guidance of our Chairman and Managing Director, Mr. Patu Keswani, the company has grown from a single hotel to one of India's largest hotel chains.",
        "The management philosophy at Lemon Tree Hotels emphasizes empowerment, innovation, and continuous learning. We invest in regular training and development programs for our team members, ensuring they have the skills and knowledge to deliver exceptional service. Our open-door policy encourages feedback and ideas from all levels of the organization."
      ]
    },
    'pooch-policy': {
      title: 'Pooch Policy',
      content: [
        "Lemon Tree Hotels is pet-friendly, offering special amenities and services for guests traveling with pets. The company's pooch policy ensures that all pets have a comfortable and enjoyable stay.",
        "Our pet-friendly rooms are specially designed to accommodate pets, with easy-to-clean surfaces and designated areas for pet beds and food bowls. We provide welcome amenities for pets including treats, toys, and waste bags to make their stay as comfortable as possible.",
        "Several of our properties have dedicated pet walking areas and some even offer special pet menus in our restaurants. Our staff is trained to handle pets with care and can assist with information about nearby veterinary services, pet parks, and pet-friendly attractions. We believe that pets are part of the family and deserve the same level of comfort and care as our human guests."
      ]
    }
  };

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="bg-gray-50 py-5 md:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-12">About Lemon Tree Hotels</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Navigation Toggle */}
          <div className="lg:hidden mb-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex items-center justify-between w-full bg-white rounded-lg shadow-md p-4"
            >
              <span className="font-semibold text-gray-800">Navigate Sections</span>
              <ChevronDown className={`w-5 h-5 transition-transform ${isMobileMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
              <div className="mt-2 bg-white rounded-lg shadow-md p-4">
                <nav className="space-y-2">
                  {sections.map(section => (
                    <button
                      key={section.id}
                      onClick={() => handleSectionClick(section.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg flex items-center transition-colors ${
                        activeSection === section.id
                          ? 'bg-blue-600 text-white'
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      <span className="mr-3">{section.icon}</span>
                      <span>{section.title}</span>
                    </button>
                  ))}
                </nav>
              </div>
            )}
          </div>

          {/* Desktop Navigation Sidebar */}
          <div className="hidden lg:block lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-4 sticky top-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Navigation</h2>
              <nav className="space-y-2">
                {sections.map(section => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg flex items-center transition-colors ${
                      activeSection === section.id
                        ? 'bg-blue-600 text-white'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <span className="mr-3">{section.icon}</span>
                    <span>{section.title}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-lg shadow-lg p-8">
              {activeSection === 'our-brands' ? (
                <div>
                  <h2 className="text-3xl font-bold text-blue-600 mb-6">{sectionContent[activeSection].title}</h2>
                  <p className="text-gray-700 text-lg mb-6">{sectionContent[activeSection].content[0]}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {sectionContent[activeSection].brands.map((brand, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-600">
                        <h3 className="font-semibold text-lg text-gray-800">{brand.name}</h3>
                        <p className="text-gray-600">{brand.segment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <h2 className="text-3xl font-bold text-blue-600 mb-6">{sectionContent[activeSection].title}</h2>
                  <div className="space-y-4">
                    {sectionContent[activeSection].content.map((paragraph, index) => (
                      <p key={index} className="text-gray-700 text-lg leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* CTA Section */}
            <div className="mt-8 bg-blue-600 rounded-lg p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Experience Lemon Tree Hospitality</h3>
              <p className="mb-6">Book your stay with us and discover the perfect blend of comfort, convenience, and value.</p>
              <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;