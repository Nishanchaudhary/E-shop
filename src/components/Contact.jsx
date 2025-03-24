import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-red-400 text-center mt-4 mb-8">
          Contact Us
        </h1>

        {/* Contact Information and Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-red-400 mb-6">
              Get in Touch
            </h2>
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-center">
                <FaPhone className="w-6 h-6 text-red-400 mr-4" />
                <div>
                  <p className="text-lg font-semibold">Phone</p>
                  <p className="text-gray-600">+977 9825678990</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center">
                <FaEnvelope className="w-6 h-6 text-red-400 mr-4" />
                <div>
                  <p className="text-lg font-semibold">Email</p>
                  <p className="text-gray-600">info@example.com</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center">
                <FaMapMarkerAlt className="w-6 h-6 text-red-400 mr-4" />
                <div>
                  <p className="text-lg font-semibold">Address</p>
                  <p className="text-gray-600">
                    Dhangadhi, kailali, Nepal
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-red-400 mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-semibold text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-semibold text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-lg font-semibold text-gray-700 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-semibold text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-red-400 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors duration-300 flex items-center justify-center"
              >
                <FaPaperPlane className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Integration */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-red-400 text-center mb-6">
            Our Location
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
          
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d85307.68753964835!2d80.52364285539973!3d28.69555203073906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a1ed0ffb42cc37%3A0x7fe89470a724b11c!2z4KSn4KSo4KSX4KSi4KWA!5e1!3m2!1sne!2snp!4v1742796718168!5m2!1sne!2snp"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;