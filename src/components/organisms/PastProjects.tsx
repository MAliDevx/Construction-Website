import { Heading, Text } from '../atoms/Typography';
import { motion } from 'motion/react';
import Project1 from '../../assets/PastProject/Project1.png';
import Project2 from '../../assets/PastProject/Project2.png';
import Project3 from '../../assets/PastProject/Project3.png';
import Project4 from '../../assets/PastProject/Project4.png';
import Project5 from '../../assets/PastProject/Project5.png';
import Project6 from '../../assets/PastProject/Project6.png';
import Project7 from '../../assets/PastProject/Project7.png';
import Project8 from '../../assets/PastProject/Project8.png';
import Project9 from '../../assets/PastProject/Project9.png';
export const PastProjects = () => {
  const projects = [
    { id: 1, image: Project1 },
    { id: 2, image: Project2 },
    { id: 3, image: Project3 },
    { id: 4, image: Project4 },
    { id: 5, image: Project5 },
    { id: 6, image: Project6 },
    { id: 7, image: Project7 },
    { id: 8, image: Project8 },
    { id: 9, image: Project9 },
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
