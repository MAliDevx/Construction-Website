import { Heading } from '../atoms/Typography';

export const ConstructionServiceHero = () => {
  return (
    <section className="relative h-[50vh] flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/const-hero/1920/1080" 
          alt="Construction Hero" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-secondary/70 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full text-center text-white">
        <Heading level={1} className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto">
          Professional Construction Services Built on Quality and Trust
        </Heading>
      </div>
    </section>
  );
};
