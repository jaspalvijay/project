import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
    // Reset submission status after 5 seconds
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const contactItems = [
    {
      icon: MapPin,
      title: 'Our Location',
      content: '500 N Bell Ave #109, Denton, TX 76209, United States',
      link: 'https://maps.google.com/?q=500+N+Bell+Ave+%23109,+Denton,+TX+76209,+United+States',
      linkText: 'Get Directions',
    },
    {
      icon: Clock,
      title: 'Opening Hours',
      content: 'Mon-Sat: 9am - 7pm\nSunday: Closed',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 940-612-9127',
      link: 'tel:+19406129127',
      linkText: 'Call Now',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@famabarber.com',
      link: 'mailto:info@famabarber.com',
      linkText: 'Send Email',
    },
  ];

  return (
    <section id="contact" className="section bg-primary-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title text-primary-800">Contact Us</h2>
          <p className="section-subtitle">
            Reach out to schedule an appointment or ask any questions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              {contactItems.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="p-3 bg-primary-100 rounded-md text-primary-600 h-fit">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-gray-600 whitespace-pre-line mb-1">{item.content}</p>
                    {item.link && (
                      <a
                        href={item.link}
                        target={item.link.startsWith('http') ? '_blank' : undefined}
                        rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-primary-600 hover:text-primary-700 font-medium"
                      >
                        {item.linkText}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="font-semibold text-lg mb-4">Find Us On Map</h3>
              <div className="rounded-lg overflow-hidden shadow-md h-[300px]">
                <iframe
                  title="Fama Barber Shop Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3342.9698506988947!2d-97.13300722364547!3d33.0881685767122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c4b0a057fe3fd%3A0x9c24ea5c9e0a9c38!2s500%20N%20Bell%20Ave%20%23109%2C%20Denton%2C%20TX%2076209%2C%20USA!5e0!3m2!1sen!2s!4v1694034568972!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white p-6 rounded-lg shadow-soft">
              <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>

              {formSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-md p-4 flex items-center gap-3">
                  <CheckCircle className="text-green-500" />
                  <p className="text-green-800">Your message has been sent successfully! We'll be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full btn btn-primary"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;