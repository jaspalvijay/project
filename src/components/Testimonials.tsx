import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Michael Thompson',
    content: 'The best haircut I\'ve ever had! The attention to detail and the hot towel finish made it an exceptional experience.',
    rating: 5,
    date: '2 weeks ago',
  },
  {
    id: 2,
    name: 'David Garcia',
    content: 'Great atmosphere and skilled barbers. They really take the time to understand what you want and deliver every time.',
    rating: 5,
    date: '1 month ago',
  },
  {
    id: 3,
    name: 'James Wilson',
    content: 'I\'ve been coming here for over a year and have never been disappointed. Professional service and amazing results.',
    rating: 5,
    date: '3 months ago',
  },
  {
    id: 4,
    name: 'Robert Johnson',
    content: 'Costly compared to other barbershops with better haircuts. The service was good but not worth the price.',
    rating: 3,
    date: '2 months ago',
  },
  {
    id: 5,
    name: 'Christopher Brown',
    content: 'Clean shop, friendly staff, and my beard has never looked better. I recommend their hot shave treatment.',
    rating: 5,
    date: '1 week ago',
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section bg-secondary-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-texture"></div>
      <div className="container relative">
        <div className="text-center mb-16">
          <h2 className="section-title text-white">Testimonials</h2>
          <p className="section-subtitle text-gray-300">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              initial={false}
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-secondary-800 rounded-lg p-8 shadow-lg">
                    <div className="flex items-center mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i}
                          className={`w-5 h-5 ${i < testimonial.rating ? 'text-accent-400 fill-accent-400' : 'text-gray-400'}`}
                        />
                      ))}
                    </div>
                    <p className="text-lg italic mb-4">{testimonial.content}</p>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-white">{testimonial.name}</span>
                      <span className="text-sm text-gray-400">{testimonial.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-accent-400' : 'bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={prev}
            className="absolute top-1/2 -left-4 -translate-y-1/2 bg-white text-secondary-800 rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 -right-4 -translate-y-1/2 bg-white text-secondary-800 rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl font-serif">Rated 4.6 stars based on 116+ reviews</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;