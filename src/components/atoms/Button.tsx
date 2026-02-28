import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  icon?: ReactNode;
}

export const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '', 
  type = 'button',
  icon
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 active:scale-95 gap-2';
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/20',
    secondary: 'bg-secondary text-white hover:bg-secondary/90',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    ghost: 'text-secondary hover:bg-secondary/5',
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </motion.button>
  );
};


