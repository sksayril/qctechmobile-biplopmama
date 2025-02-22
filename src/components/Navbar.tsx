import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import billingPandaLogo from '../assets/qr-techmobile-solution.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src={billingPandaLogo} alt="Qc Tech Mobile Service Logo" className="h-12 w-12 object-contain" />
              <span className="text-2xl font-bold text-green-600">Qc Tech Mobile Service</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`${isActive('/') ? 'text-green-600' : 'text-gray-700'} hover:text-green-600 transition-colors`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`${isActive('/about') ? 'text-green-600' : 'text-gray-700'} hover:text-green-600 transition-colors`}
            >
              About Us
            </Link>
            <Link 
              to="/services" 
              className={`${isActive('/services') ? 'text-green-600' : 'text-gray-700'} hover:text-green-600 transition-colors`}
            >
              Services
            </Link>
            <Link 
              to="/gallery" 
              className={`${isActive('/gallery') ? 'text-green-600' : 'text-gray-700'} hover:text-green-600 transition-colors`}
            >
              Gallery
            </Link>
            <Link 
              to="/branches" 
              className={`${isActive('/branches') ? 'text-green-600' : 'text-gray-700'} hover:text-green-600 transition-colors`}
            >
              Our Branches
            </Link>
            <Link 
              to="/contact" 
              className={`${isActive('/contact') ? 'text-green-600' : 'text-gray-700'} hover:text-green-600 transition-colors`}
            >
              Contact
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white"
      >
        <div className="px-4 pt-2 pb-3 space-y-1">
          <Link 
            to="/" 
            className={`block px-3 py-2 ${isActive('/') ? 'text-green-600' : 'text-gray-700'} hover:text-green-600 transition-colors`}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`block px-3 py-2 ${isActive('/about') ? 'text-green-600' : 'text-gray-700'} hover:text-green-600 transition-colors`}
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link 
            to="/services" 
            className={`block px-3 py-2 ${isActive('/services') ? 'text-green-600' : 'text-gray-700'} hover:text-green-600 transition-colors`}
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link 
            to="/gallery" 
            className={`block px-3 py-2 ${isActive('/gallery') ? 'text-green-600' : 'text-gray-700'} hover:text-green-600 transition-colors`}
            onClick={() => setIsOpen(false)}
          >
            Gallery
          </Link>
          <Link 
            to="/branches" 
            className={`block px-3 py-2 ${isActive('/branches') ? 'text-green-600' : 'text-gray-700'} hover:text-green-600 transition-colors`}
            onClick={() => setIsOpen(false)}
          >
            Our Branches
          </Link>
          <Link 
            to="/contact" 
            className={`block px-3 py-2 ${isActive('/contact') ? 'text-green-600' : 'text-gray-700'} hover:text-green-600 transition-colors`}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;