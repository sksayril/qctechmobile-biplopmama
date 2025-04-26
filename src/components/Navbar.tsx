import React, { useState } from 'react';
import { Menu, X, LogIn } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import billingPandaLogo from '../assets/qr-techmobile-solution.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  // Function to handle serviceman login click
  const handleServicemanLogin = (e) => {
    e.preventDefault();
    window.open('https://serviceman.qc-tech.co.in', '_blank');
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo on left */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src={billingPandaLogo} alt="Qc Tech Service Logo" className="h-12 w-12 object-contain" />
              <span className="text-2xl font-bold text-green-600">Qc Tech Service</span>
            </Link>
          </div>
          
          {/* Main navigation */}
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
            
            {/* Serviceman Login Button on right */}
            <a 
              href="https://serviceman.qc-tech.co.in"
              onClick={handleServicemanLogin}
              className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg relative group overflow-hidden"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Glow effect */}
              <span className="absolute top-0 left-0 w-12 h-12 rounded-full bg-white/30 blur-lg transform -translate-x-8 -translate-y-4 group-hover:translate-x-2 transition-transform duration-700"></span>
              
              <LogIn size={18} className="mr-2" />
              <span className="font-medium">Serviceman Login</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Login button for mobile (right side) */}
            <a 
              href="https://serviceman.qc-tech.co.in"
              onClick={handleServicemanLogin}
              className="flex items-center px-3 py-1 bg-green-600 text-white rounded-lg relative group overflow-hidden"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Glow effect */}
              <span className="absolute top-0 left-0 w-8 h-8 rounded-full bg-white/30 blur-lg transform -translate-x-6 -translate-y-3 group-hover:translate-x-1 transition-transform duration-700"></span>
              
              <LogIn size={16} className="mr-1" />
              <span className="text-sm font-medium">Login</span>
            </a>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden bg-white transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
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
          
          {/* Full-width login button in mobile dropdown */}
          <a 
            href="https://serviceman.qc-tech.co.in"
            onClick={(e) => {
              handleServicemanLogin(e);
              setIsOpen(false);
            }}
            className="flex items-center justify-center px-3 py-2 mt-2 bg-green-600 text-white rounded-lg relative overflow-hidden group"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Glow effect */}
            <span className="absolute top-0 left-0 w-12 h-12 rounded-full bg-white/30 blur-lg transform -translate-x-8 -translate-y-4 group-hover:translate-x-2 transition-transform duration-700"></span>
            
            <LogIn size={18} className="mr-2" />
            <span className="font-medium">Serviceman Login</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;