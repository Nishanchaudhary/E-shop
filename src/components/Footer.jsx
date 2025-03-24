import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-blue-200 text-red-400 py-12 mt-16 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">E-Shop</h3>
            <p className="text-gray-400">
              Your one-stop destination for the latest trends and products. Shop with us for a seamless experience.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className=" text-gray-400 hover:text-gray-500 transition duration-300">About Us</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-gray-500 transition duration-300">Contact Us</a></li>
              <li><a href="/privacy" className="text-gray-400 hover:text-gray-500 transition duration-300">Privacy Policy</a></li>
              <li><a href="/terms" className="text-gray-400 hover:text-gray-500 transition duration-300">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* App Download Badges */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold mb-4">Download Our App</h4>
            <div className="flex flex-col space-y-4">
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="w-40 mx-auto md:mx-0"
                />
              </a>
              <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="Download on the App Store"
                  className="w-40 mx-auto md:mx-0"
                />
              </a>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className=" text-gray-400 hover:text-gray-500 transition duration-300">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500 transition duration-300">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500 transition duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500 transition duration-300">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-400 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {year} E-Shop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;