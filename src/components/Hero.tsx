import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { Clock, Navigation, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-hero-pattern bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>
      
      <div className="container relative z-10 pt-24">
        <motion.div 
          className="max-w-3xl text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Classic Cuts, <br /> Modern Style
          </h1>
          <p className="text-xl mb-8 text-gray-200">
            Premium haircuts and grooming services for the modern gentleman at Fama Barber Shop and Beauty Salon.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4">
            <a 
              href="tel:+19406129127" 
              className="btn btn-accent"
            >
              Book Appointment
            </a>
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="btn btn-secondary cursor-pointer"
            >
              View Services
            </Link>
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="flex items-center gap-3">
            <Clock className="w-6 h-6 text-primary-300" />
            <div>
              <p className="text-white font-medium">Open Today</p>
              <p className="text-gray-300">9am - 7pm</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Phone className="w-6 h-6 text-primary-300" />
            <div>
              <p className="text-white font-medium">Call Us</p>
              <a href="tel:+19406129127" className="text-gray-300 hover:text-white">
                +1 940-612-9127
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Navigation className="w-6 h-6 text-primary-300" />
            <div>
              <p className="text-white font-medium">Find Us</p>
              <a 
                href="https://maps.google.com/?q=500+N+Bell+Ave+%23109,+Denton,+TX+76209,+United+States" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                Google Maps
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;