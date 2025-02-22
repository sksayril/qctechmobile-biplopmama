import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronRight, Users, Target, Award, TrendingUp, CheckCircle, Star } from 'lucide-react';

const companyInfo = {
  founded: 2015,
  description: `DigiAgency is a leading digital marketing agency that has been transforming businesses through innovative digital solutions since 2015. Our team of experts combines creativity with data-driven strategies to deliver exceptional results for our clients.`,
  mission: `Our mission is to empower businesses with cutting-edge digital marketing solutions that drive growth and create lasting impact in the digital landscape.`,
  values: [
    'Innovation & Creativity',
    'Data-Driven Approach',
    'Client Success',
    'Continuous Learning'
  ]
};

const partners = [
  {
    name: 'TechMarketing Pro',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3',
    description: 'Leading B2B marketing solutions'
  },
  {
    name: 'Digital Growth Hub',
    logo: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3',
    description: 'Specialized in growth marketing'
  },
  {
    name: 'Social Media Masters',
    logo: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3',
    description: 'Expert social media management'
  }
];

const stats = [
  { number: '500+', label: 'Clients Served', icon: Users },
  { number: '95%', label: 'Success Rate', icon: Target },
  { number: '150+', label: 'Awards Won', icon: Award },
  { number: '10+', label: 'Years Experience', icon: TrendingUp }
];

const values = [
  {
    title: 'Innovation',
    description: 'We stay ahead of digital trends to deliver cutting-edge solutions',
    icon: Star,
    color: 'bg-blue-100 text-blue-600'
  },
  {
    title: 'Excellence',
    description: 'We strive for excellence in every project we undertake',
    icon: Award,
    color: 'bg-green-100 text-green-600'
  },
  {
    title: 'Integrity',
    description: 'We maintain the highest standards of honesty and transparency',
    icon: CheckCircle,
    color: 'bg-green-100 text-green-600'
  }
];

const team = [
  {
    name: 'John Smith',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3',
    description: 'Digital marketing veteran with 15+ years of experience'
  },
  {
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3',
    description: 'Expert in social media strategy and content creation'
  },
  {
    name: 'Michael Chen',
    role: 'Technical Lead',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3',
    description: 'Specialized in SEO and technical optimization'
  }
];

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-16">
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 bg-gradient-to-r from-green-600/90 to-green-400/90 z-10"
        />
        
        {/* Preload background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
            filter: 'blur(0px)',
            transform: 'scale(1.1)'
          }}
        />

        <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6,
              delay: 0.2,
              ease: [0.215, 0.61, 0.355, 1]
            }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transforming Digital Presence
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              We're a team of passionate digital marketers dedicated to helping businesses grow and succeed in the digital world.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Company Info Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                About DigiAgency
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {companyInfo.description}
              </p>
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                <p className="text-gray-600">{companyInfo.mission}</p>
              </div>
              <div className="space-y-4">
                {companyInfo.values.map((value, index) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <ChevronRight className="text-green-600 mr-2" size={20} />
                    {value}
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3"
                alt="Our Team"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 transform transition-transform duration-300 hover:scale-110">
                  <stat.icon className="w-8 h-8 text-green-600" />
                </div>
                <motion.h3 
                  className="text-4xl font-bold text-gray-900 mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  {stat.number}
                </motion.h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <section className="py-20 bg-white" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Digital Marketing Partners
            </h2>
            <p className="text-xl text-gray-600">
              We collaborate with the best in the industry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {partner.name}
                  </h3>
                  <p className="text-gray-600">{partner.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6,
                ease: "easeOut"
              }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2015, we started with a simple mission: to help businesses thrive in the digital age. What began as a small team of passionate marketers has grown into a full-service digital marketing agency.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Over the years, we've helped hundreds of businesses transform their digital presence, achieve their marketing goals, and build lasting relationships with their customers.
              </p>
              <div className="space-y-4">
                {['Industry-leading expertise', 'Data-driven strategies', 'Proven track record', 'Innovative solutions'].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.3,
                      delay: index * 0.1,
                      ease: "easeOut"
                    }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative"
            >
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                  alt="Our team at work"
                  className="object-cover w-full h-full transform transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide our work and relationships
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="bg-white rounded-xl p-8 shadow-lg transform-gpu"
              >
                <div 
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${value.color} mb-6 transform transition-transform duration-300 hover:scale-110`}
                >
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The experts behind our success
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="bg-white rounded-xl overflow-hidden shadow-lg transform-gpu"
              >
                <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full transform transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;