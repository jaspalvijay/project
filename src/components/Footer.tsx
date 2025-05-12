import React from 'react';
import { Link } from 'react-scroll';
import { Scissors, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Scissors className="w-6 h-6 text-primary-400" />
              <span className="text-xl font-bold tracking-tight font-serif">Fama Barber</span>
            </div>
            <p className="text-gray-400 mb-4">
              Premium barbering services for the modern gentleman since 2015.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-secondary-800 hover:bg-primary-600 rounded-full transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-secondary-800 hover:bg-primary-600 rounded-full transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-secondary-800 hover:bg-primary-600 rounded-full transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'Gallery', 'Testimonials', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase()}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {['Classic Haircut', 'Beard Trim', 'Hot Shave', 'Hair + Beard Combo', 'Kids Haircut', 'Hair Color'].map((service) => (
                <li key={service}>
                  <Link
                    to="services"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <address className="not-italic text-gray-400 space-y-2">
              <p>500 N Bell Ave #109</p>
              <p>Denton, TX 76209</p>
              <p>United States</p>
              <p className="pt-2">
                <a href="tel:+19406129127" className="hover:text-white transition-colors duration-200">
                  +1 940-612-9127
                </a>
              </p>
              <p>
                <a href="mailto:info@famabarber.com" className="hover:text-white transition-colors duration-200">
                  info@famabarber.com
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="pt-8 border-t border-secondary-800 text-center text-gray-500">
          <p>© {currentYear} Fama Barber Shop and Beauty Salon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;