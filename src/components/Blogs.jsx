import React from "react";
import { FaCalendarAlt, FaUser, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Blogs = () => {
  // Sample blog data
  const blogs = [
    {
      id: 1,
      title: "Top 10 Tech Trends in 2024",
      author: "John Doe",
      date: "October 10, 2024",
      excerpt:
        "Discover the top 10 technology trends that will dominate 2024, from AI to quantum computing.",
      image:
        "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      content:
        "In 2024, technology will continue to evolve at a rapid pace. Artificial Intelligence (AI) will become even more integrated into our daily lives, while quantum computing will start to show its potential. Other trends include the rise of 5G, advancements in biotechnology, and the increasing importance of cybersecurity.",
    },
    {
      id: 2,
      title: "The Future of Remote Work",
      author: "Jane Smith",
      date: "September 25, 2024",
      excerpt:
        "Explore how remote work is shaping the future of businesses and what it means for employees.",
      image:
        "https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      content:
        "Remote work is no longer a temporary solution but a permanent shift in how businesses operate. Companies are investing in tools and technologies to support remote teams, while employees are enjoying greater flexibility and work-life balance.",
    },
    {
      id: 3,
      title: "Sustainable Living in the Modern World",
      author: "Alice Johnson",
      date: "August 15, 2024",
      excerpt:
        "Learn how to adopt sustainable practices in your daily life and reduce your carbon footprint.",
      image:
        "https://images.pexels.com/photos/325944/pexels-photo-325944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      content:
        "Sustainable living is essential for preserving our planet. From reducing waste to using renewable energy, there are many ways to make a positive impact. This blog explores practical tips for living sustainably in the modern world.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-orange-600 text-center mt-4 mb-8">
          Blogs
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">{blog.title}</h2>
                <div className="flex items-center text-gray-600 mb-4">
                  <FaUser className="mr-2" />
                  <span className="mr-4">{blog.author}</span>
                  <FaCalendarAlt className="mr-2" />
                  <span>{blog.date}</span>
                </div>
                <p className="text-gray-700 mb-4">{blog.excerpt}</p>
                <Link
                  to={`/blogs/${blog.id}`}
                  className="flex items-center text-orange-600 hover:text-orange-700 transition-colors duration-300"
                >
                  <span className="mr-2">Read More</span>
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;