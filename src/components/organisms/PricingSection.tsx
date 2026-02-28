import { Check, Star, Zap, Plus } from 'lucide-react';
import { motion } from 'motion/react';
import { Heading, Text } from '../atoms/Typography';
import { Button } from '../atoms/Button';
import React from 'react';

interface PricingCardProps {
  title: string;
  price: string;
  originalPrice: string;
  features: string[];
  highlighted?: boolean;
  icon: React.ReactNode;
  index: number;
  key?: any;
}

const PricingCard = ({ title, price, originalPrice, features, highlighted, icon, index }: PricingCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className={`relative p-10 rounded-[40px] shadow-2xl flex flex-col h-full transition-transform hover:-translate-y-2 duration-500 ${
      highlighted ? 'bg-primary text-white' : 'bg-white text-secondary'
    }`}
  >
    <div className="mb-8">
      <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
        highlighted ? 'bg-white/20' : 'bg-primary/10 text-primary'
      }`}>
        {icon}
      </div>
      <Heading level={3} className={`text-3xl font-bold mb-4 ${highlighted ? 'text-white' : 'text-secondary'}`}>
        {title}
      </Heading>
      <div className="flex items-baseline gap-2">
        <span className="text-5xl font-bold">{price}</span>
        <div className="flex flex-col">
          <span className={`text-sm line-through opacity-60`}>{originalPrice}</span>
          <span className="text-xs opacity-80">/per month</span>
        </div>
      </div>
    </div>

    <ul className="space-y-5 mb-12 flex-grow">
      {features.map((feature, i) => (
        <li key={i} className="flex items-start gap-3">
          <div className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
            highlighted ? 'bg-white text-primary' : 'bg-primary/10 text-primary'
          }`}>
            <Check size={12} strokeWidth={4} />
          </div>
          <span className={`text-sm font-medium ${highlighted ? 'text-white/90' : 'text-slate-600'}`}>
            {feature}
          </span>
        </li>
      ))}
    </ul>

<Button
  className={`
    ${highlighted 
      ? 'bg-white text-orange-500 hover:bg-orange-50 shadow-lg' // ✅ text set to orange
      : 'bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/20'
    }
    inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 active:scale-95 gap-2
  `}
>
  Start 7-day free trial
</Button>
  </motion.div>
);

export const PricingSection = () => {
  const plans = [
    {
      title: 'Basic',
      price: '$19',
      originalPrice: '$29',
      icon: <Star fill="currentColor" size={32} />,
      features: [
        'Structure',
        '10 inventory locations',
        '24/7 chat support',
        'Localized global selling',
        'POS Lite'
      ]
    },
    {
      title: 'Advanced',
      price: '$299',
      originalPrice: '$399',
      icon: <Zap fill="currentColor" size={32} />,
      features: [
        'Structure',
        'Custom reports and analytics',
        '10 inventory locations',
        'Enhanced 24/7 chat support',
        'Localized global selling',
        '15 additional staff accounts',
        '10x checkout capacity',
        'POS Lite'
      ]
    },
    {
      title: 'Plus',
      price: '$2,299',
      originalPrice: '$129',
      highlighted: true,
      icon: <Plus strokeWidth={4} size={32} />,
      features: [
        'Competitive rates for high-volume merchants',
        'Custom reports and analytics',
        'Priority 24/7 phone support',
        'Localized global selling',
        'Unlimited staff accounts',
        'Fully customizable checkout with 40x capacity',
        '200 POS Pro',
        'Sell wholesale/B2B'
      ]
    }
  ];

  return (
    <section className="section-padding bg-slate-50 overflow-hidden relative">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 Q25,0 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <path d="M0,60 Q25,10 50,60 T100,60" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <path d="M0,40 Q25,-10 50,40 T100,40" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-20 space-y-4">
          <Heading level={2} className="text-5xl md:text-6xl font-bold">Explore Our Packages</Heading>
          <Text variant="muted" className="text-lg">Find the best home construction packages.</Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <PricingCard key={plan.title} {...plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
