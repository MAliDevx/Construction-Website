import { Navbar } from '../components/organisms/Navbar';
import { TestimonialsContactAndFooterTemplate } from '../components/templates/TestimonialsAndContact';
import { PricingSection } from '../components/organisms/PricingSection';
import { MessageCircle, PhoneCall } from 'lucide-react';
import { BookingModal } from '../components/organisms/BookingModal';
import { motion } from 'framer-motion';
import { Heading, Text } from '../components/atoms/Typography';

export const PackagesPage = () => {
  
  return (
    <div className="relative">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#F26522] to-orange-600 text-white py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h1 className="text-4xl md:text-5xl font-bold">Our Construction Packages</h1>
              <p className="text-white/90 text-lg max-w-2xl mx-auto">
                Discover our affordable, transparent pricing with premium quality construction services tailored to every budget.
              </p>
            </motion.div>
          </div>
        </section>

        <PricingSection />
      </main>
      
      <TestimonialsContactAndFooterTemplate />

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/919705779992" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-40 group"
        title="Chat with us on WhatsApp"
      >
        <MessageCircle size={32} fill="currentColor" />
        <span className="absolute bottom-20 right-0 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Quick Chat
        </span>
      </a>

      {/* Quick Call Button */}
      <a 
        href="tel:+919705779992" 
        className="fixed bottom-24 right-8 w-14 h-14 bg-[#F26522] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-40 group"
        title="Call us"
      >
        <PhoneCall size={24} />
        <span className="absolute bottom-16 right-0 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Call Now
        </span>
      </a>
    </div>
  );
};
