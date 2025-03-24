import React from "react";
import { FaUsers, FaLightbulb, FaHandshake, FaRocket } from "react-icons/fa";

const About = () => {
  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      role: "CEO & Founder",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Chief Marketing Officer",
      image:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      name: "Alice Johnson",
      role: "Lead Developer",
      image:
        "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      name: "Bob Brown",
      role: "Product Manager",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  // Core values data
  const coreValues = [
    {
      id: 1,
      icon: <FaUsers className="w-12 h-12 mb-4 text-green-600" />,
      title: "Customer-Centric",
      description:
        "We prioritize our customers' needs and strive to deliver exceptional value.",
    },
    {
      id: 2,
      icon: <FaLightbulb className="w-12 h-12 mb-4 text-green-600" />,
      title: "Innovation",
      description:
        "We embrace creativity and innovation to stay ahead in the industry.",
    },
    {
      id: 3,
      icon: <FaHandshake className="w-12 h-12 mb-4 text-green-600" />,
      title: "Integrity",
      description:
        "We conduct our business with honesty, transparency, and fairness.",
    },
    {
      id: 4,
      icon: <FaRocket className="w-12 h-12 mb-4 text-green-600" />,
      title: "Excellence",
      description:
        "We are committed to delivering high-quality products and services.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="bg-gray-400 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-red-400 mb-4">About Us</h1>
          <p className="text-xl text-gray-100">
            We are a team of passionate individuals dedicated to delivering
            innovative solutions.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-red-400 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700">
            Our mission is to empower businesses and individuals with cutting-edge
            technology and exceptional service. We strive to create meaningful
            impact through innovation, collaboration, and a customer-first
            approach.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-red-400 text-center mb-8">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-gray-100 rounded-lg shadow-lg overflow-hidden text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-red-400 text-center mb-8">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValues.map((value) => (
            <div
              key={value.id}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              {value.icon}
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-gray-700">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-red-400 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Join us on our journey to innovation and excellence.
          </p>
          <a href="/contact" className="bg-red-400 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-600 transition-colors duration-300">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;