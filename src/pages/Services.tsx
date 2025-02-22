import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, CheckCircle, Star, Zap, Target, Users, BarChart } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

const services = [
  {
    title: 'Digital Marketing',
    description: 'Transform your online presence with our comprehensive digital marketing strategies. We create data-driven campaigns that engage your audience and drive measurable results.',
    icon: <Zap className="w-12 h-12 text-green-500" />,
    features: [
      { title: 'Social Media Marketing', desc: 'Build brand awareness and engagement across platforms' },
      { title: 'Content Marketing', desc: 'Create valuable content that converts' },
      { title: 'Email Marketing', desc: 'Personalized campaigns with high ROI' },
      { title: 'PPC Advertising', desc: 'Targeted ads that drive qualified traffic' }
    ],
    color: 'from-orange-400 to-red-500',
    stats: { clients: '200+', satisfaction: '98%', growth: '150%' }
  },
  {
    title: 'SEO Optimization',
    description: 'Dominate search rankings with our proven SEO strategies. We use cutting-edge techniques to improve your visibility and drive organic traffic to your website.',
    icon: <Target className="w-12 h-12 text-blue-500" />,
    features: [
      { title: 'Keyword Research', desc: 'Target high-value search terms' },
      { title: 'On-Page SEO', desc: 'Optimize content and structure' },
      { title: 'Technical SEO', desc: 'Improve site performance' },
      { title: 'Link Building', desc: 'Build authority with quality backlinks' }
    ],
    color: 'from-blue-400 to-indigo-500',
    stats: { ranking: 'Top 10', traffic: '+200%', keywords: '500+' }
  },
  {
    title: 'Content Creation',
    description: 'Tell your brand story with compelling content that resonates with your audience. Our creative team crafts engaging content across all digital channels.',
    icon: <Star className="w-12 h-12 text-purple-500" />,
    features: [
      { title: 'Blog Writing', desc: 'SEO-optimized articles that inform' },
      { title: 'Video Production', desc: 'Engaging visual storytelling' },
      { title: 'Infographics', desc: 'Visual data representation' },
      { title: 'Social Media Content', desc: 'Platform-specific content strategy' }
    ],
    color: 'from-purple-400 to-pink-500',
    stats: { content: '1000+', engagement: '+180%', reach: '1M+' }
  },
  {
    title: 'Analytics & Reporting',
    description: 'Make informed decisions with our comprehensive analytics and reporting. Track your success with real-time data and actionable insights.',
    icon: <BarChart className="w-12 h-12 text-green-500" />,
    features: [
      { title: 'Performance Tracking', desc: 'Real-time metrics monitoring' },
      { title: 'ROI Analysis', desc: 'Measure campaign effectiveness' },
      { title: 'Competitor Analysis', desc: 'Stay ahead of the competition' },
      { title: 'Monthly Reports', desc: 'Detailed performance insights' }
    ],
    color: 'from-green-400 to-teal-500',
    stats: { accuracy: '99.9%', metrics: '50+', insights: 'Daily' }
  }
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your Digital Presence
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We offer comprehensive digital solutions that help businesses grow, engage their audience, 
              and achieve measurable results in the digital landscape.
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="flex justify-center gap-4"
            >
              <button className="px-8 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">
                Get Started
              </button>
              <button className="px-8 py-3 border-2 border-green-600 text-green-600 rounded-full hover:bg-green-50 transition-colors">
                Learn More
              </button>
            </motion.div>
          </motion.div>

          {/* Services Carousel */}
          <Swiper
            modules={[Autoplay, Navigation, EffectCoverflow]}
            effect="coverflow"
            spaceBetween={30}
            slidesPerView={1}
            navigation
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-12"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                  className="bg-white rounded-xl overflow-hidden shadow-xl h-full group"
                >
                  <div className={`p-6 bg-gradient-to-r ${service.color} transform group-hover:scale-105 transition-transform duration-300`}>
                    <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-white/90">{service.description}</p>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h4>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <motion.li
                            key={idx}
                            whileHover={{ x: 5 }}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                            <div>
                              <p className="font-medium text-gray-900">{feature.title}</p>
                              <p className="text-sm text-gray-600">{feature.desc}</p>
                            </div>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="border-t pt-4">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Performance Stats</h4>
                      <div className="grid grid-cols-3 gap-4">
                        {Object.entries(service.stats).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-xl font-bold text-green-600">{value}</div>
                            <div className="text-sm text-gray-600 capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-6 w-full py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg flex items-center justify-center gap-2 group"
                    >
                      Learn More
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Services;