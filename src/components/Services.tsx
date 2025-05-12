import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Rat as Razor, Brush, PenTool } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Classic Haircut',
    description: 'Precision cut with expert styling and hot towel finish.',
    price: '$25',
    icon: Scissors,
  },
  {
    id: 2,
    title: 'Beard Trim',
    description: 'Sculpted beard trimming with shape and line-up.',
    price: '$15',
    icon: Razor,
  },
  {
    id: 3,
    title: 'Hot Shave',
    description: 'Traditional straight razor shave with hot towel treatment.',
    price: '$30',
    icon: Brush,
  },
  {
    id: 4,
    title: 'Hair + Beard Combo',
    description: 'Complete grooming package with haircut and beard trim.',
    price: '$35',
    icon: PenTool,
  },
  {
    id: 5,
    title: 'Kids Haircut',
    description: 'Gentle haircuts for boys under 12 years.',
    price: '$20',
    icon: Scissors,
  },
  {
    id: 6,
    title: 'Hair Color',
    description: 'Professional hair coloring and gray coverage.',
    price: 'From $45',
    icon: Brush,
  },
];

const Services: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="services" className="section bg-white relative">
      <div className="absolute inset-0 opacity-5 bg-texture"></div>
      <div className="container relative">
        <div className="text-center mb-16">
          <h2 className="section-title text-primary-800">Our Services</h2>
          <p className="section-subtitle">
            Premium grooming services delivered by skilled professionals
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service) => (
            <motion.div 
              key={service.id}
              className="card group hover:shadow-strong transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-primary-100 rounded-md text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                  <service.icon size={24} />
                </div>
                <span className="text-xl font-bold text-primary-600">{service.price}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <a 
            href="tel:+19406129127" 
            className="btn btn-primary"
          >
            Book Your Appointment
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;