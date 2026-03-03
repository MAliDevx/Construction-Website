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
  <div className="flex flex-col items-center gap-4 group cursor-pointer transition-transform duration-300 hover:-translate-y-2">
    
    <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full overflow-hidden 
                    border-4 border-white shadow-md 
                    group-hover:shadow-xl 
                    group-hover:border-primary 
                    transition-all duration-300">
      <img
        src={image}
        alt={name}
        referrerPolicy="no-referrer"
        className="w-full h-full object-cover 
                   group-hover:scale-110 
                   transition-transform duration-500"
      />
    </div>

    <div className="text-center space-y-1">
      <Heading
        level={5}
        className="text-base md:text-lg font-semibold group-hover:text-primary transition-colors"
      >
        {name}
      </Heading>

      <Text variant="small" className="text-primary font-bold text-sm md:text-base">
        {count} Projects
      </Text>
    </div>
  </div>
);
