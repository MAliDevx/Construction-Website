import { MessageCircle } from 'lucide-react';
import { Navbar } from '../components/organisms/Navbar';
import { Hero } from '../components/organisms/Hero';
import { StatsSection, BranchesSection } from '../components/organisms/StatsAndBranches';
import { ProcessSection } from '../components/organisms/ConstructionProcess';
import { ServicesSection } from '../components/organisms/ProcessAndServices';
import { TestimonialsContactAndFooterTemplate } from '../components/templates/TestimonialsAndContact';

export const HomePage = () => {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <StatsSection />
        <BranchesSection />
        <ProcessSection />
        <ServicesSection />
        <TestimonialsContactAndFooterTemplate />
      
      </main>

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
