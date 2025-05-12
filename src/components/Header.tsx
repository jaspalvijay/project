import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Scissors } from 'lucide-react';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Home', to: 'hero' },
  { name: 'Services', to: 'services' },
  { name: 'Gallery', to: 'gallery' },
  { name: 'Testimonials', to: 'testimonials' },
  { name: 'About', to: 'about' },
  { name: 'Contact', to: 'contact' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex items-center justify-between">
        <Link
          to="hero"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="flex items-center gap-2 cursor-pointer"
        >
          <Scissors className="w-8 h-8 text-primary-600" />
          <span className="text-xl font-bold tracking-tight font-serif text-primary-800">Fama Barber</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass="nav-link-active"
              className="nav-link cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="tel:+19406129127" 
            className="ml-4 btn btn-primary"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div 
          className="fixed inset-0 z-50 bg-white pt-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          <div className="container flex flex-col items-center space-y-4 py-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-lg font-medium py-3 w-full text-center"
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="tel:+19406129127" 
              className="btn btn-primary w-full text-center mt-6"
            >
              Book Now
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;