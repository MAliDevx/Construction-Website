import { Navbar } from '../components/organisms/Navbar';
import { TestimonialsContactAndFooterTemplate } from '../components/templates/TestimonialsAndContact';
import { ServicesGrid } from '../components/organisms/ServicesGrid';
import { MessageCircle } from 'lucide-react';
import { PageHero } from '../components/organisms/PageHero';
import Hero from '../assets/Services/ProjectAnalysis.png';
import { ProcessSection } from '../components/organisms/ConstructionProcess';
import { PastProjects } from '../components/organisms/PastProjects';
import { AboutServiceSection } from '../components/organisms/AboutServiceSection';
import AboutService from '../assets/Services/ProjectAnalysisAbout.png';

export const  ProjectAnalysisServices = () => {
  return (
    <div className="relative">
      <Navbar />
      <main>
          <PageHero
            heading={
              <> 
                Insightful Analysis for  <br />
                <span >Smarter Project Decisions</span>
              </>
            }
            imageSrc={Hero}
            imageAlt="Project Analysis Services Hero"
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
