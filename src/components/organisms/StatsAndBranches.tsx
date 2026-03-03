import { useState } from 'react';
import { BranchCard } from '../molecules/Inputs';
import { Heading, Text } from '../atoms/Typography';
import { motion,AnimatePresence } from 'framer-motion';
import { Check, Building2, Award, Clock, Users,MapPin, ChevronDown, ChevronUp } from 'lucide-react';


export const StatsSection = () => {
  const stats = [
    { number: '10,142+', label: 'Homes Built and Handed Over', icon: Building2 },
    { number: '10+ Cities', label: 'Operational Presence', icon: Award },
    { number: '8 Months', label: 'Express Execution', icon: Clock },
    { number: '10,142+', label: 'Design Plans', icon: Users },
  ];

  const missions = [
    'Strong Structures',
    'Elegant Interiors',
    'On-Time Completion',
    'Customer Satisfaction',
  ];

  return (
    <section className="relative overflow-hidden  py-20 md:py-28 px-4 md:px-8">

      {/* ── Background texture & glow ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Warm glow top-right */}
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #F26522 0%, transparent 70%)' }}
        />
        {/* Subtle glow bottom-left */}
        <div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #F26522 0%, transparent 70%)' }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(242,101,34,0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(242,101,34,0.4) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto">

        {/* ══════════════════════════════════════════
            STATS HEADING
        ══════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 space-y-4"
        >
       

          <h2 className="text-3xl md:text-5xl font-black text-gray leading-tight">
            Trusted by Thousands of Homeowners
          </h2>

          <p className="max-w-2xl mx-auto text-gray-400 text-base md:text-lg leading-relaxed">
            Shaah Infra has built quality homes and delivered dreams across multiple cities.
            Our track record speaks to our commitment to excellence, transparency, and timely delivery.
          </p>
        </motion.div>

        {/* ══════════════════════════════════════════
            STAT CARDS — custom rendered for dark theme
        ══════════════════════════════════════════ */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="relative rounded-2xl p-6 md:p-8 overflow-hidden group cursor-default"
                style={{
                  border: '1.5px solid #e9601f',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = '#F2652266';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(242,101,34,0.2)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = '#2a2a2a';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 24px rgba(0,0,0,0.4)';
                }}
              >
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                  style={{ background: 'radial-gradient(circle at top left, rgba(242,101,34,0.08), transparent 70%)' }}
                />

                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: '#F2652215' }}
                >
                  <Icon size={18} style={{ color: '#F26522' }} />
                </div>

                {/* Number */}
                <div
                  className="text-2xl md:text-3xl font-black mb-1.5 leading-none"
                  style={{
                    background: 'linear-gradient(90deg, #F26522, #ff9a5c)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {stat.number}
                </div>

                {/* Label */}
                <p className="text-gray-400 text-xs md:text-sm font-medium leading-snug">
                  {stat.label}
                </p>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl"
                  style={{ backgroundColor: '#F26522' }}
                />
              </motion.div>
            );
          })}
        </div>

      </div>

      <style>{`section *::-webkit-scrollbar{display:none}`}</style>
    </section>
  );
};

export const BranchesSection = () => {
  const [showAll, setShowAll] = useState(false);

const branches = [
  {
    name: 'Anantapur',
    count: '25+',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80'
  },
  {
    name: 'Hindupur',
    count: '18+',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80'
  },
  {
    name: 'Puttaparthi',
    count: '14+',
    image: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=600&q=80'
  },
  {
    name: 'Penukonda',
    count: '22+',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80'
  },
  {
    name: 'Kadiri',
    count: '10+',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80' 
  },
  {
    name: 'Guntakal',
    count: '16+',
    image:  'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=600&q=80'
  },
  {
    name: 'Kalyandurgam',
    count: '9+',
    image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=600&q=80'
  },
  {
    name: 'Rayadurgam',
    count: '11+',
    image: 'https://images.unsplash.com/photo-1502005097973-6a7082348e28?w=600&q=80'
  },
  {
    name: 'Uravakonda',
    count: '8+',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=600&q=80'
  },
  {
    name: 'Tadipatri',
    count: '13+',
    image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=600&q=80'
  },
  {
    name: 'Kurnool',
    count: '65+',
    image: 'https://images.unsplash.com/photo-1597047084897-51e81819a499?w=600&q=80'
  },
  {
    name: 'Nandyal',
    count: '19+',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80'
  },
  {
    name: 'Tirupati',
    count: '30+',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80'
  },
  {
    name: 'Bangalore',
    count: '42+',
    image: 'https://images.unsplash.com/photo-1560185007-5f0bb1866cab?w=600&q=80'
  },
  {
    name: 'Hyderabad',
    count: '55+',
    image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=600&q=80'
  },
];
  const INITIAL_SHOW = 6;
  const visible = showAll ? branches : branches.slice(0, INITIAL_SHOW);
  const hiddenCount = branches.length - INITIAL_SHOW;

  return (
    <section className="bg-slate-50 section-padding overflow-hidden">

      <div className="text-center mb-14 space-y-4">


        <Heading level={2} className="text-4xl md:text-5xl font-black text-gray-900">
           We Are Available Across{' '}
          <span style={{
            background: 'linear-gradient(90deg, #F26522, #e8480a)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            15+ Cities
          </span>
        </Heading>

        <Text variant="lead" className="max-w-2xl mx-auto text-slate-500">
          Shaah Infra proudly serves clients across multiple towns & major cities across Andhra Pradesh, Karnataka, and Telangana.
        </Text>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 md:gap-6">
          <AnimatePresence initial={false}>
            {visible.map((branch, index) => (
              <motion.div
                key={branch.name}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index < INITIAL_SHOW ? 0 : (index - INITIAL_SHOW) * 0.06 }}
              >
                <BranchCard
                  name={branch.name}
                  count={branch.count}
                  image={branch.image}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show More / Show Less button */}
        <div className="flex justify-center mt-10">
          <motion.button
            onClick={() => setShowAll(prev => !prev)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-sm tracking-wide transition-all duration-200"
            style={{
              backgroundColor: showAll ? 'transparent' : '#F26522',
              color: showAll ? '#F26522' : 'white',
              border: '2px solid #F26522',
              boxShadow: showAll ? 'none' : '0 6px 24px rgba(242,101,34,0.25)',
            }}
          >
            {showAll ? (
              <>
                <ChevronUp size={16} strokeWidth={2.5} />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown size={16} strokeWidth={2.5} />
                Show {hiddenCount} More Cities
              </>
            )}
          </motion.button>
        </div>
      </div>

    </section>
  );
};