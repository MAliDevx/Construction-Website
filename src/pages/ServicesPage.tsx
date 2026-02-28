import { Navbar } from '../components/organisms/Navbar';
import { TestimonialsContactAndFooterTemplate } from '../components/templates/TestimonialsAndContact';
import { ServicesHero } from '../components/organisms/ServicesHero';
import { ServicesGrid } from '../components/organisms/ServicesGrid';
import { MessageCircle } from 'lucide-react';

export const ServicesPage = () => {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <ServicesHero />
        <ServicesGrid />
      </main>
      <TestimonialsContactAndFooterTemplate />

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/910000000000" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-50"
      >
        <MessageCircle size={32} fill="currentColor" />
      </a>
    </div>
  );
};
