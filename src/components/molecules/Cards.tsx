import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { Heading, Text } from '../atoms/Typography';
import { Button } from '../atoms/Button';
import { Link } from 'react-router-dom';
interface StatCardProps {
  number: string;
  label: string;
  index: number;
  key?: any;
}

export const StatCard = ({ number, label, index }: StatCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center flex flex-col items-center justify-center"
  >
    <Heading level={2} className="text-primary mb-2">{number}</Heading>
    <Text variant="muted" className="font-medium uppercase tracking-wider text-xs">{label}</Text>
  </motion.div>
);

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
  active?: boolean;
  key?: any;
}

export const ProcessStep = ({ number, title, description, icon, active }: ProcessStepProps) => (
  <div className={`p-8 rounded-2xl transition-all duration-300 ${active ? 'bg-primary text-white shadow-xl shadow-primary/30' : 'bg-white border border-slate-100 shadow-sm'}`}>
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${active ? 'bg-white/20' : 'bg-primary/10 text-primary'}`}>
      {icon}
    </div>
    <Heading level={4} className="mb-4">{title}</Heading>
    <Text className={active ? 'text-white/80' : 'text-muted'}>{description}</Text>
  </div>
);

interface ServiceItemProps {
  number: string;
  title: string;
  key?: any;
}

export const ServiceItem = ({ number, title }: ServiceItemProps) => (
  <div className="flex items-center gap-6 p-5 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all group">
    <span className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center font-bold text-lg shrink-0">
      {number}
    </span>
    <span className="font-bold text-xl text-secondary group-hover:text-primary transition-colors">{title}</span>
  </div>
);

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  index: number;
  link: string;
}

export const ServiceCard = ({ image, title, description, index, link }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-[32px] overflow-hidden shadow-lg border border-slate-100 flex flex-col h-full hover:shadow-2xl transition-all duration-500 group"
    >
      <div className="h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="p-8 flex flex-col items-center text-center flex-grow space-y-4">
        <Heading level={3} className="text-2xl font-bold text-secondary">{title}</Heading>
        <Text className="text-muted leading-relaxed text-sm">
          {description}
        </Text>
        <div className="mt-auto pt-4">
          <Button 
            variant="primary" 
            className="px-10 py-3 rounded-xl shadow-lg shadow-primary/20"
            
          >
            <Link to={link}>Inquiry Now</Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
