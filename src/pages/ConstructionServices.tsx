import { Navbar } from '../components/organisms/Navbar';
import { TestimonialsContactAndFooterTemplate } from '../components/templates/TestimonialsAndContact';
import { ServicesGrid } from '../components/organisms/ServicesGrid';
import { MessageCircle, PhoneCall } from 'lucide-react';
import { PageHero } from '../components/organisms/PageHero';
import Hero from '../assets/Services/ConstructionServices.png';
import AboutService from '../assets/Services/ConstructionServicesAbout.png';
import { PastProjects } from '../components/organisms/PastProjects';
import { ProcessSection } from '../components/organisms/ConstructionProcess';
import { AboutServiceSection } from '../components/organisms/AboutServiceSection';
import { TbBrandWhatsappFilled } from "react-icons/tb";

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


 <AboutServiceSection
  heading="Complete Construction Solutions For Residential & Commercial Projects"
  description="We Provide End-To-End Construction Services From Planning And Design To Execution And Final Delivery. Our Team Ensures Every Project Meets High Quality, Safety, And Durability Standards. Because We Don't Just Construct , We Provide:"
  features={[
    { number: '01', label: 'Experienced Engineers' },
    { number: '02', label: 'High Quality Materials' },
    { number: '03', label: 'On-Time Project Delivery' },
    { number: '04', label: '24/7 Support' },
  ]}
  imageSrc={AboutService}
  imageAlt="Construction site"
/>

        <ProcessSection />
        <PastProjects />
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
      <TbBrandWhatsappFilled size={32} fill="currentColor" />
      <span className="absolute bottom-20 right-0 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        Quick Chat
      </span>
    </a>

    {/* Call */}
    <a
      href="tel:+919705779992"
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
