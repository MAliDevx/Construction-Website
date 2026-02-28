import { Navbar } from '../components/organisms/Navbar';
import { TestimonialsContactAndFooterTemplate } from '../components/templates/TestimonialsAndContact';
import { PageHero } from '../components/organisms/PageHero';
import { AboutGrid } from '../components/organisms/AboutGrid';
import { PastProjects } from '../components/organisms/PastProjects';
import { MessageCircle } from 'lucide-react';
import AboutUs from '../assets/About/about-hero.png';
export const AboutPage = () => {
  return (
    <div className="relative">
      <Navbar />
      <main>
  <PageHero
    heading={
      <>
        Building Trust<br />
        <span >Delivering Excellence</span>
      </>
    }
    subheading="We are a dedicated construction company committed to delivering high-quality, reliable, and innovative building solutions. With years of experience and a passion for excellence."
    imageSrc={AboutUs}
    imageAlt="About Us Hero"
  />
        <AboutGrid />
        <PastProjects />
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
