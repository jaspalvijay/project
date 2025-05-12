import React from 'react';
import { motion } from 'framer-motion';

const galleryImages = [
  {
    id: 1,
    src: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg',
    alt: 'Barber cutting client\'s hair',
    category: 'Haircut',
  },
  {
    id: 2,
    src: 'https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg',
    alt: 'Beard trimming service',
    category: 'Beard Trim',
  },
  {
    id: 3,
    src: 'https://images.pexels.com/photos/2834011/pexels-photo-2834011.jpeg',
    alt: 'Barber shop interior',
    category: 'Our Shop',
  },
  {
    id: 4,
    src: 'https://images.pexels.com/photos/897262/pexels-photo-897262.jpeg',
    alt: 'Classic haircut styling',
    category: 'Styling',
  },
  {
    id: 5,
    src: 'https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg',
    alt: 'Traditional hot towel shave',
    category: 'Hot Shave',
  },
  {
    id: 6,
    src: 'https://images.pexels.com/photos/1805600/pexels-photo-1805600.jpeg',
    alt: 'Barber tools arrangement',
    category: 'Equipment',
  },
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="section bg-primary-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title text-primary-800">Our Gallery</h2>
          <p className="section-subtitle">
            A showcase of our finest work and barbering craftsmanship
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div 
              key={image.id}
              className="relative overflow-hidden rounded-lg aspect-[4/3] group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-medium">{image.category}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            Follow Us on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;