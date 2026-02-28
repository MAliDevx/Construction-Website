import { motion } from 'motion/react';
import { Heading, Text } from '../atoms/Typography';

interface FormFieldProps {
  placeholder: string;
  type?: string;
  className?: string;
}

export const FormField = ({ placeholder, type = 'text', className = '' }: FormFieldProps) => (
  <input
    type={type}
    placeholder={placeholder}
    className={`w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all ${className}`}
  />
);

interface BranchCardProps {
  image: string;
  name: string;
  count: string;
  key?: any;
}

export const BranchCard = ({ image, name, count }: BranchCardProps) => (
  <div className="flex flex-col items-center gap-4 group cursor-pointer">
    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-primary transition-all duration-300">
      <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
    </div>
    <div className="text-center">
      <Heading level={5} className="group-hover:text-primary transition-colors">{name}</Heading>
      <Text variant="small" className="text-primary font-bold">{count}</Text>
    </div>
  </div>
);
