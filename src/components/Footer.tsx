import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import billingPandaLogo from '../assets/qr-techmobile-solution.svg';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={billingPandaLogo} alt="Qc Tech Mobile Service Logo" className="h-12 w-12 object-contain" />
              <h3 className="text-2xl font-bold text-white">Qc Tech Mobile Service</h3>
            </div>
            <p className="text-sm">
              Transforming businesses through innovative billing solutions since 2015.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-500 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-500 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-500 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-500 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-green-500 transition-colors flex items-center">
                  <ArrowUpRight size={16} className="mr-1" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-green-500 transition-colors flex items-center">
                  <ArrowUpRight size={16} className="mr-1" /> About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-green-500 transition-colors flex items-center">
                  <ArrowUpRight size={16} className="mr-1" /> Services
                </Link>
              </li>
              <li>
                <Link to="/branches" className="hover:text-green-500 transition-colors flex items-center">
                  <ArrowUpRight size={16} className="mr-1" /> Our Branches
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-green-500 transition-colors flex items-center">
                  <ArrowUpRight size={16} className="mr-1" /> Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li className="hover:text-green-500 transition-colors">Digital Marketing</li>
              <li className="hover:text-green-500 transition-colors">SEO Optimization</li>
              <li className="hover:text-green-500 transition-colors">Content Strategy</li>
              <li className="hover:text-green-500 transition-colors">Social Media Management</li>
              <li className="hover:text-green-500 transition-colors">Brand Development</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin size={16} className="mr-2 text-green-500" />
                <span>123 Digital Street, Tech City, 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-green-500" />
                <a href="tel:+1234567890" className="hover:text-green-500 transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-green-500" />
                <a href="mailto:info@digiagency.com" className="hover:text-green-500 transition-colors">
                  info@digiagency.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Qc Tech Mobile Service. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <button
              onClick={scrollToTop}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
