import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronRight } from 'lucide-react';

const AboutUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="about" className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About Our Agency
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We're a team of digital experts passionate about helping businesses
              grow in the digital landscape. With years of experience and a
              track record of success, we deliver results that matter.
            </p>
            <ul className="space-y-4 mb-8">
              {['Strategic Approach', 'Creative Solutions', 'Data-Driven Results'].map((item, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <ChevronRight className="text-green-600 mr-2" size={20} />
                  {item}
                </li>
              ))}
            </ul>
            <button className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors">
              Learn More
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
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
  );
};

export default AboutUs;