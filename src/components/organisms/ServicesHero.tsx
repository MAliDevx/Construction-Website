import { Heading, Text } from '../atoms/Typography';

export const ServicesHero = () => {
  return (
    <section className="relative h-[60vh] flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/services-hero/1920/1080" 
          alt="Services Hero" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-secondary/70 backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full text-center text-white space-y-6">
        <Heading level={1} className="text-5xl md:text-7xl">
          Complete Construction<br />Solutions You Can Trust
        </Heading>
        <Text variant="lead" className="text-white/80 max-w-3xl mx-auto">
          We offer a full range of construction services designed to deliver quality, efficiency, and reliability. From planning and design to execution and finishing, our expert team ensures every project meets the highest standards.
        </Text>
      </div>
    </section>
  );
};
