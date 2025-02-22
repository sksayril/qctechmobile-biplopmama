import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Digital Marketing',
    description: 'Strategic marketing campaigns that drive results',
    icon: '🚀'
  },
  {
    title: 'Social Media Management',
    description: 'Engaging content that connects with your audience',
    icon: '💬'
  },
  {
    title: 'SEO Optimization',
    description: 'Improve your search engine rankings',
    icon: '📈'
  },
  {
    title: 'Content Creation',
    description: 'Compelling content that tells your story',
    icon: '✍️'
  }
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">
            Comprehensive digital solutions for your business growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-lg p-6 hover:shadow-lg transition-shadow bg-gradient-to-r from-green-400 to-grey-600 text-white"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">
                {service.title}
              </h3>
              <p className="mb-4">{service.description}</p>
              <button className="flex items-center text-white hover:text-gray-200 transition-colors">
                Learn More <ArrowRight size={16} className="ml-2" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
