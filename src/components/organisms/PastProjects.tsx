import { Heading, Text } from '../atoms/Typography';
import { motion } from 'motion/react';

export const PastProjects = () => {
  const projects = [
    { id: 1, image: 'https://picsum.photos/seed/proj1/600/450' },
    { id: 2, image: 'https://picsum.photos/seed/proj2/600/450' },
    { id: 3, image: 'https://picsum.photos/seed/proj3/600/450' },
    { id: 4, image: 'https://picsum.photos/seed/proj4/600/450' },
    { id: 5, image: 'https://picsum.photos/seed/proj5/600/450' },
    { id: 6, image: 'https://picsum.photos/seed/proj6/600/450' },
    { id: 7, image: 'https://picsum.photos/seed/proj7/600/450' },
    { id: 8, image: 'https://picsum.photos/seed/proj8/600/450' },
    { id: 9, image: 'https://picsum.photos/seed/proj9/600/450' },
  ];

  return (
    <section className="bg-[#F8F8F8] pt-0">
          <div className="section-padding">

      <div className="text-center mb-16 space-y-4">
        <Heading level={2} className="text-4xl md:text-5xl">Our Past Projects</Heading>
        <Text variant="muted" className="max-w-2xl mx-auto">
          We offer a full range of construction services designed to deliver quality, efficiency, and reliability.
        </Text>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
          >
            <img 
              src={project.image} 
              alt={`Project ${project.id}`} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        ))}
      </div>
    </div>
    </section>
  );
};
