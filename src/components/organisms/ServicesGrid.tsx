import { Heading, Text } from '../atoms/Typography';
import { ServiceCard } from '../molecules/Cards';
import ConstructionService from '../../assets/Services/ServiceMissionPic.png';
import InteriorDesigning from '../../assets/Services/InteriorDesigningServicesAbout.png';
import ProjectPlanning from '../../assets/Services/ProjectPlaningAbout.png';
import ProjectAnalysis from '../../assets/Services/ProjectAnalysisAbout.png';

export const ServicesGrid = () => {
  const services = [
    {
      title: 'Residential Construction',
      description: `• Individual Houses
• Duplex & Villas
• Apartment Construction
• Structural & Civil Works`,
      image: ConstructionService,
      link: '/construction'
    },
    {
      title: 'Commercial Construction',
      description: `• Office Buildings
• Shops & Complexes
• Warehouses
• Institutional Buildings`,
      image: ProjectPlanning,
      link: '/project-planning'
    },
    {
      title: 'Interior Designing',
      description: `• Modular Kitchens
• False Ceiling
• Wardrobes
• TV Units
• Office Interiors
• Complete Turnkey Interiors`,
      image: InteriorDesigning,
      link: '/interior-designing'
    },
    {
      title: 'Renovation & Remodeling',
      description: `• House Renovation
• Interior Upgrades
• Structural Modifications`,
      image: ProjectAnalysis,
      link: '/project-analysis'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="text-center mb-16 space-y-4">
        <Heading level={2} className="text-4xl md:text-5xl">Our Services</Heading>
        <Text variant="muted" className="max-w-2xl mx-auto">
          We provide expert construction and design solutions across residential, commercial, and renovation projects.
        </Text>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            index={index}
            title={service.title}
            description={service.description}
            image={service.image}
            link={service.link}
          />
        ))}
      </div>
    </section>
  );
};