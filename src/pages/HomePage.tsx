import { MessageCircle, Phone, PhoneCall } from 'lucide-react';
import { Navbar } from '../components/organisms/Navbar';
import { StatsSection, BranchesSection } from '../components/organisms/StatsAndBranches';
import { ProcessSection } from '../components/organisms/ConstructionProcess';
import { ServicesSection } from '../components/organisms/ProcessAndServices';
import { TestimonialsContactAndFooterTemplate } from '../components/templates/TestimonialsAndContact';
import { PageHero } from '../components/organisms/PageHero';
import AboutUs from '../assets/Home//HomeBanner.png';
import { TbBrandWhatsappFilled } from "react-icons/tb";

export const HomePage = () => {
  return (
    <div className="relative">
      <Navbar />
      <main>
         <PageHero
           heading={
             <>
               Complete Construction & <br />
               <span >Interior Solutions in Anantapur</span>
             </>
           }
           subheading="Residential | Commercial | Turnkey Projects | Interior Designing
From Foundation to Finishing — We Build It All"
           imageSrc={AboutUs}
           imageAlt="About Us Hero"
           align='center'
           overlayOpacity={.49}
           imageFit="cover"  
         />
        <StatsSection />
        <BranchesSection />
        <ProcessSection />
        <ServicesSection />
        <TestimonialsContactAndFooterTemplate />
      
      </main>

      <a
      href="https://wa.me/919705779992"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-40 group"
      title="Chat with us on WhatsApp"
    >
      <TbBrandWhatsappFilled size={32} fill="currentColor" />
      <span className="absolute bottom-20 right-0 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        Quick Chat
      </span>
    </a>

    {/* Call */}
    <a
      href="tel:+919705779991"
      className="fixed bottom-28 right-8 w-14 h-14 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-40 group"
      style={{ backgroundColor: "#fe6700" }}
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
