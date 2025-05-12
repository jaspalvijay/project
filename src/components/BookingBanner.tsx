import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays } from 'lucide-react';

const BookingBanner: React.FC = () => {
  return (
    <section className="py-12 bg-primary-700 text-white">
      <div className="container">
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4">
            <CalendarDays className="w-12 h-12 text-accent-300" />
            <div>
              <h3 className="text-2xl font-bold">Ready for a fresh look?</h3>
              <p className="text-primary-100">Book your appointment today</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="tel:+19406129127" 
              className="btn btn-accent whitespace-nowrap"
            >
              Call Now
            </a>
            <a 
              href="https://maps.google.com/?q=500+N+Bell+Ave+%23109,+Denton,+TX+76209,+United+States" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary whitespace-nowrap"
            >
              Get Directions
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingBanner;