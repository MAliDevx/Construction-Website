import { useNavigate } from 'react-router-dom';
import { Heading, Text } from '../atoms/Typography';
import { ServiceCard } from '../molecules/Cards';

export const ServicesGrid = () => {
  const services = [
    {
      title: 'Construction',
      description: 'We provide reliable and high-quality construction services for residential, commercial, and industrial projects. Our experienced team manages every stage of the construction process, from planning and foundation to final completion. We focus on using quality materials, modern techniques, and strict safety standards to deliver strong structures.',
      image: 'https://picsum.photos/seed/const1/800/600',
      link: '/construction'
    },
    {
      title: 'Interior Designing',
      description: 'Our interior designing services are focused on creating modern, stylish, and functional spaces for residential and commercial projects. We carefully plan every detail, from layout and the materials to lighting and décor, ensuring a perfect balance of beauty, comfort, and usability.',
      image: 'https://picsum.photos/seed/interior1/800/600',
      link: '/interior-designing'
    },
    {
      title: 'Project Planning',
      description: 'We provide detailed and strategic project planning to ensure smooth and successful construction. Our team carefully plans timelines, resources, budgets, and workflows to minimize risks and maximize efficiency. We ensure every phase is organized and aligned to deliver projects on time and within budget.',
      image: 'https://picsum.photos/seed/plan1/800/600',
      link: '/project-planning'
    },
    {
      title: 'Project Analysis',
      description: 'We conduct detailed project analysis to evaluate feasibility, requirements, costs, and potential risks before construction begins. Our team ensures proper planning and informed decision-making, helping to improve efficiency, reduce risks, and ensure successful project execution.',
      image: 'https://picsum.photos/seed/analysis1/800/600',
      link: '/project-analysis'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="text-center mb-16 space-y-4">
        <Heading level={2} className="text-4xl md:text-5xl">Our Expert Solutions</Heading>
        <Text variant="muted" className="max-w-2xl mx-auto">
          We offer a full range of construction services designed to deliver quality, efficiency, and reliability.
        </Text>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            index={index}
            title={service.title}
            description={service.description}
            image={service.image}
            link={service.link}   // ← pass link down
          />
        ))}
      </div>
    </section>
  );
};