import { ReactNode } from 'react';

interface HeadingProps {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

export const Heading = ({ children, level = 2, className = '' }: HeadingProps) => {
  const Tag = `h${level}` as any;
  
  const styles = {
    1: 'text-4xl md:text-6xl font-bold tracking-tight leading-tight',
    2: 'text-3xl md:text-4xl font-bold tracking-tight',
    3: 'text-2xl md:text-3xl font-semibold',
    4: 'text-xl md:text-2xl font-semibold',
    5: 'text-lg md:text-xl font-medium',
    6: 'text-base md:text-lg font-medium',
  };

  return (
    <Tag className={`${styles[level]} ${className}`}>
      {children}
    </Tag>
  );
};

interface TextProps {
  children: ReactNode;
  variant?: 'body' | 'small' | 'muted' | 'lead';
  className?: string;
}

export const Text = ({ children, variant = 'body', className = '' }: TextProps) => {
  const styles = {
    body: 'text-base leading-relaxed',
    small: 'text-sm leading-normal',
    muted: 'text-muted text-sm leading-normal',
    lead: 'text-lg md:text-xl text-muted leading-relaxed',
  };

  return (
    <p className={`${styles[variant]} ${className}`}>
      {children}
    </p>
  );
};
