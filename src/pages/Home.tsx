import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useAnimation, useInView } from 'framer-motion';
import { Play, CheckCircle, TrendingUp, Users, Target, Globe, Mail } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import TrustedCompanies from '../components/TrustedCompanies';
import 'swiper/css';

const tools = [
  { 
    name: 'Google Analytics', 
    logo: 'https://logos-world.net/wp-content/uploads/2021/02/Google-Analytics-Logo.png'
  },
  { 
    name: 'SEMrush', 
    logo: 'https://companieslogo.com/img/orig/SEMR-4f4c3210.png?t=1720244493'
  },
  { 
    name: 'Mailchimp', 
    logo: 'https://logos-world.net/wp-content/uploads/2021/02/Mailchimp-Logo.png'
  },
  { 
    name: 'Hootsuite', 
    logo: 'https://images.seeklogo.com/logo-png/44/1/hootsuite-logo-png_seeklogo-446074.png'
  },
  { 
    name: 'HubSpot', 
    logo: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/168_Hubspot_logo_logos-512.png'
  },
  { 
    name: 'Ahrefs', 
    logo: 'https://companieslogo.com/img/orig/ahrefs-76c3093c.png?t=1720244494'
  },
  { 
    name: 'Buffer', 
    logo: 'https://cdnlogo.com/logos/b/15/buffer.svg'
  },
  
];

const stats = [
  { label: 'Total Clients', value: 0, target: 500 },
  { label: 'Projects Completed', value: 0, target: 1000 },
  { label: 'Success Rate', value: 0, target: 98 },
  { label: 'Team Members', value: 0, target: 50 },
];

const services = [
  {
    title: 'SEO Optimization',
    description: 'Improve your search engine rankings and drive organic traffic with our expert SEO services',
    icon: '🎯',
    features: ['Keyword Research', 'On-Page SEO', 'Link Building', 'Technical SEO']
  },
  {
    title: 'Social Media Marketing',
    description: 'Engage with your audience and build brand awareness across all social platforms',
    icon: '📱',
    features: ['Content Strategy', 'Community Management', 'Paid Advertising', 'Analytics & Reporting']
  },
  {
    title: 'Content Marketing',
    description: 'Create compelling content that converts visitors into loyal customers',
    icon: '✍️',
    features: ['Blog Writing', 'Email Marketing', 'Video Content', 'Infographics']
  },
  {
    title: 'PPC Advertising',
    description: 'Drive targeted traffic and maximize ROI with strategic paid advertising',
    icon: '💰',
    features: ['Google Ads', 'Social Media Ads', 'Display Advertising', 'Retargeting']
  },
  {
    title: 'Email Marketing',
    description: 'Build lasting relationships with your customers through personalized email campaigns',
    icon: '📧',
    features: ['Campaign Strategy', 'List Management', 'A/B Testing', 'Automation']
  },
  {
    title: 'Analytics & Reporting',
    description: 'Make data-driven decisions with comprehensive analytics and insights',
    icon: '📊',
    features: ['Performance Tracking', 'Custom Reports', 'ROI Analysis', 'Competitor Analysis']
  }
];

const process = [
  {
    step: '01',
    title: 'Analysis',
    description: 'We analyze your business, market, and competitors'
  },
  {
    step: '02',
    title: 'Strategy',
    description: 'Develop a customized digital marketing strategy'
  },
  {
    step: '03',
    title: 'Implementation',
    description: 'Execute the strategy across all channels'
  },
  {
    step: '04',
    title: 'Optimization',
    description: 'Monitor, measure, and optimize for best results'
  }
];

const VideoPopup = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 z-[9999] flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-green-500 z-[10000] p-2"
        >
          Close
        </button>
        <div className="relative pt-[56.25%] w-full">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/M1E2NqahP2I?autoplay=1"
            title="YouTube Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const controls = useAnimation();
  const { scrollY } = useScroll();

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const scaleOnHover = {
    hover: { scale: 1.05, transition: { duration: 0.2 } }
  };

  const [counts, setCounts] = React.useState(stats.map(() => 0));

  React.useEffect(() => {
    const intervals = stats.map((stat, index) => {
      return setInterval(() => {
        setCounts(prev => {
          const newCounts = [...prev];
          if (newCounts[index] < stat.target) {
            newCounts[index] = Math.min(newCounts[index] + stat.target / 100, stat.target);
          }
          return newCounts;
        });
      }, 50);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="pt-16">
      <VideoPopup isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
      {/* Hero Section */}
      <motion.section 
        className="min-h-[80vh] bg-gradient-to-br from-green-50 to-green-100 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)"
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h1 
                className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Transform Your Digital Presence
              </motion.h1>
              <p className="text-xl text-gray-600 mb-8">
                We help businesses grow through innovative digital marketing strategies
                and cutting-edge solutions. Boost your online visibility and drive real results.
              </p>
              <div className="flex gap-4 items-center">
                <button className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors">
                  Get Started
                </button>
                <button 
                  onClick={() => setIsVideoOpen(true)}
                  className="inline-flex items-center px-6 py-3 bg-white text-green-600 rounded-full hover:bg-green-50 border-2 border-green-600 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md z-10"
                >
                  <Play className="w-5 h-5 mr-2" /> Watch Demo
                </button>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" />
                  <span>ROI Focused</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" />
                  <span>Data-Driven</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" />
                  <span>Expert Team</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3"
                alt="Digital Marketing"
                className="rounded-lg shadow-xl"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-transparent rounded-lg"
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Trusted Companies Section */}
      <TrustedCompanies />

      {/* Why Choose Us Section */}
      <motion.section 
        className="py-12 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-8"
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Why Choose Us</h2>
            <p className="text-lg text-gray-600">Experience the difference with our comprehensive digital marketing approach</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Data-Driven Strategy',
                description: 'We make decisions based on real data and analytics to ensure maximum ROI',
                icon: <TrendingUp className="w-8 h-8 text-green-600" />
              },
              {
                title: 'Target Audience Focus',
                description: 'Reach the right people with precise audience targeting and segmentation',
                icon: <Target className="w-8 h-8 text-green-600" />
              },
              {
                title: 'Multi-Channel Presence',
                description: 'Establish your brand across all relevant digital platforms',
                icon: <Globe className="w-8 h-8 text-green-600" />
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  visible: { opacity: 1, y: 0 },
                  hover: { scale: 1.05, transition: { duration: 0.2 } }
                }}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              >
                <motion.div 
                  className="mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        className="py-12 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                custom={index}
                className="text-center"
              >
                <motion.div 
                  className="text-4xl font-bold text-green-600 mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {Math.round(counts[index])}+
                </motion.div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section 
        className="py-12 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Digital Marketing Services</h2>
            <p className="text-lg text-gray-600">Comprehensive solutions to boost your online presence</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <motion.div 
                  className="text-4xl mb-4"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="text-green-500 w-4 h-4" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section 
        className="py-12 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Process</h2>
            <p className="text-lg text-gray-600">How we deliver results for your business</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <motion.div 
                  className="bg-green-50 p-8 rounded-xl"
                  whileHover={{
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                >
                  <div className="text-4xl font-bold text-green-600 mb-4">{step.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <div className="w-8 h-8 border-t-2 border-r-2 border-green-300 transform rotate-45"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Tools Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Tools We Use</h2>
            <p className="text-lg text-gray-600">Industry-leading tools for maximum impact</p>
          </div>
          <div className="relative overflow-hidden">
            <div className="flex gap-8 tools-scroll">
              {[...tools, ...tools].map((tool, index) => (
                <div
                  key={`${tool.name}-${index}`}
                  className="flex-shrink-0 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <img 
                    src={tool.logo} 
                    alt={`${tool.name} logo`} 
                    className="h-12 w-auto object-contain mx-auto transition-all duration-300"
                  />
                  <p className="text-center text-gray-700 mt-4 font-medium">{tool.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Add CSS for continuous scroll animation */}
      <style jsx>{`
        .tools-scroll {
          animation: scroll 30s linear infinite;
          min-width: max-content;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .tools-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* CTA Section */}
      <motion.section 
        className="py-12 bg-green-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <motion.h2 
              className="text-3xl font-bold mb-3"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Ready to Transform Your Digital Presence?
            </motion.h2>
            <motion.p 
              className="text-lg mb-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Get started with our digital marketing services today
            </motion.p>
            <motion.button 
              className="bg-white text-green-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Free Consultation
            </motion.button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home; 