import React from 'react';
import { motion } from 'framer-motion';
import { Award, ThumbsUp, Users } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Award,
      title: 'Expert Barbers',
      description: 'Our team of skilled barbers brings years of experience and craftsmanship to every cut.',
    },
    {
      icon: ThumbsUp,
      title: 'Quality Products',
      description: 'We use only premium products to ensure the best results for your hair and skin.',
    },
    {
      icon: Users,
      title: 'Friendly Service',
      description: 'Enjoy a welcoming atmosphere where every client is treated with respect and attention.',
    },
  ];

  return (
    <section id="about" className="section bg-white relative">
      <div className="absolute inset-0 opacity-5 bg-texture"></div>
      <div className="container relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-primary-800 mb-4">About Fama Barber Shop</h2>
            <p className="text-gray-600 mb-6">
              Founded with a passion for traditional barbering techniques combined with modern styles,
              Fama Barber Shop and Beauty Salon has been serving the Denton community since 2015.
            </p>
            <p className="text-gray-600 mb-8">
              Our shop offers a relaxing environment where clients can enjoy exceptional grooming services
              delivered by skilled professionals who take pride in their craft. We believe that a great
              haircut is more than just a service—it's an experience that boosts confidence and style.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-2 bg-primary-100 rounded-md text-primary-600 mt-1">
                    <feature.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="rounded-lg overflow-hidden shadow-strong"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img 
              src="https://images.pexels.com/photos/3998468/pexels-photo-3998468.jpeg" 
              alt="Inside Fama Barber Shop" 
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;