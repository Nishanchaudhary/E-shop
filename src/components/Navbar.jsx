import { useState } from 'react';
import { FaStore, FaHome, FaInfoCircle, FaEnvelope, FaBlog, FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-200 p-4 text-red-400 text-xl font-semibold fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold flex items-center">
          <FaStore className="mr-2" /> E-shop
        </a>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-red-400 focus:outline-none">
            {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4 items-center animate-fade-up animate-ease-linear">
          <li>
            <a href="/" className="hover:text-red-800 flex items-center">
              <FaHome className="mr-1" /> Home
            </a>
          </li>
          <li>
            <a href="/shop" className="hover:text-red-800 flex items-center">
              <FaStore className="mr-1" /> Shop
            </a>
          </li>

          <li>
            <a href="/blogs" className="hover:text-red-800 flex items-center">
              <FaBlog className="mr-1" /> Blogs
            </a>
          </li>

          <li>
            <a href="/about" className="hover:text-red-800 flex items-center">
              <FaInfoCircle className="mr-1" /> About
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-red-800 flex items-center">
              <FaEnvelope className="mr-1" /> Contact
            </a>
          </li>
          
          <li>
            <a href="/cart" className="hover:text-red-800 flex items-center">
              <FaShoppingCart className="mr-1" /> Cart
            </a>
          </li>
          <li>
            <a href="/login" className="hover:text-red-800 flex items-center">
              <FaUser className="mr-1" /> Login
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-transparent mt-4">
          <ul className="flex flex-col space-y-4 items-center animate-fade-up animate-ease-linear">
            <li>
              <a href="/" className="hover:text-red-800 flex items-center">
                <FaHome className="mr-1" /> Home
              </a>
            </li>
            <li>
              <a href="/shop" className="hover:text-red-800 flex items-center">
                <FaStore className="mr-1" /> Shop
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-red-800 flex items-center">
                <FaInfoCircle className="mr-1" /> About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-red-800 flex items-center">
                <FaEnvelope className="mr-1" /> Contact
              </a>
            </li>
            <li>
              <a href="/blogs" className="hover:text-red-800 flex items-center">
                <FaBlog className="mr-1" /> Blogs
              </a>
            </li>
            <li>
              <a href="/cart" className="hover:text-red-800 flex items-center">
                <FaShoppingCart className="mr-1" /> Cart
              </a>
            </li>
            <li>
              <a href="/login" className="hover:text-red-800 flex items-center">
                <FaUser className="mr-1" /> Login
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;