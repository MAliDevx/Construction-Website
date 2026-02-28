import { Navbar } from '../components/organisms/Navbar';
import { TestimonialsContactAndFooterTemplate } from '../components/templates/TestimonialsAndContact';
import { ServicesGrid } from '../components/organisms/ServicesGrid';
import { MessageCircle } from 'lucide-react';
import { PageHero } from '../components/organisms/PageHero';
import Hero from '../assets/Services/ConstructionServices.png';

export const ConstructionServices = () => {
  return (
    <div className="relative">
      <Navbar />
      <main>
          <PageHero
            heading={
              <> 
              Professional Construction <br /> Services Built on Quality <br /> and Trust
              </>
            }
            imageSrc={Hero}
            imageAlt="Construction Services Hero"
          />
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
