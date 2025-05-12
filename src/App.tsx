import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingBanner from './components/BookingBanner';

const App: React.FC = () => {
  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Testimonials />
        <About />
        <BookingBanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;