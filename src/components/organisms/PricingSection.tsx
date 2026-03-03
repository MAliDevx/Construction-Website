import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Plus, Minus, Check, Star } from 'lucide-react';
import { useBooking } from '@/src/context/BookingContext';

// ─── Types ────────────────────────────────────────────────────────────────────

interface PackageFeature {
  label: string;
  detail: string;
}

interface PricingPackage {
  title: string;
  subtitle: string;
  price: string;
  unit?: string;
  badge?: string;
  emoji?: string;
  warranty?: string;
  support?: string;
  accentColor?: string;
  features: PackageFeature[];
}

interface PricingSectionProps {
  packages?: PricingPackage[];
  onTalkToExpert?: (packageTitle: string) => void;
}

// ─── Default data ─────────────────────────────────────────────────────────────

const DEFAULT_PACKAGES: PricingPackage[] = [
  {
    title: 'Basic',
    subtitle: 'Strong Foundation. Smart Budget.',
    price: '₹1,650 – ₹1,800',
    unit: 'Incl. GST',
    warranty: '10+ Years Structural Warranty',
    support: '2 Years Free Service Support*',
    accentColor: '#b08d57',
    features: [
      { label: '• Standard Foundation & Structure', detail: 'Engineered standard foundation designed after soil assessment to ensure long-term strength, crack resistance, and structural stability.' },
      { label: '• Good Quality Bricks & Cement', detail: 'Carefully sourced quality bricks and cement to ensure a solid, durable build that stands the test of time.' },
      { label: '• Basic Electrical & Plumbing', detail: 'Concealed ISI-certified electrical wiring and durable plumbing lines installed with safety-first practices.' },
      { label: '• Standard Flooring (Vitrified Tiles)', detail: 'Elegant 600×600 mm vitrified tiles carefully installed with level precision and clean joint finishing.' },
      { label: '• Basic Bathroom Fittings', detail: 'Durable ceramic sanitaryware and CP fittings selected for longevity, water efficiency, and low maintenance.' },
      { label: '• Standard Doors & Windows', detail: 'Strong and well-aligned door & window systems designed for safety, ventilation, and everyday durability.' },
      { label: '• Exterior & Interior Painting', detail: 'Smooth interior emulsion finish with weather-protected exterior coating to keep your home fresh.' },
    ],
  },
  {
    title: 'Standard',
    subtitle: 'Modern Living with Premium Finish.',
    emoji: '🥈',
    price: '₹1,900 – ₹2,200',
    unit: 'Incl. GST',
    badge: 'MOST POPULAR',
    warranty: '10+ Years Structural Warranty',
    support: '2 Years Free Service Support*',
    accentColor: '#8c8c8c',
    features: [
      { label: '• RCC Framed Structure', detail: 'High-strength RCC framed structure engineered for superior load-bearing capacity and earthquake resistance.' },
      { label: '• Premium Quality Materials', detail: 'Carefully selected premium-grade cement, steel, and bricks ensuring enhanced lifespan and refined finish.' },
      { label: '• Designer Elevation', detail: 'Attractive designer elevation crafted to give your home a premium street presence and increased property value.' },
      { label: '• Premium Vitrified Tiles', detail: 'High-quality premium vitrified flooring offering enhanced durability, stain resistance, and elegant aesthetics.' },
      { label: '• Branded Electricals & Plumbing', detail: 'Top branded modular switches, concealed copper wiring, and long-lasting plumbing systems.' },
      { label: '• Modular Kitchen (Basic Model)', detail: 'Well-designed modular kitchen layout with optimized storage and practical workflow.' },
      { label: '• False Ceiling in Living Area', detail: 'Stylish false ceiling with concealed lighting provision to elevate ambiance and create a luxury feel.' },
      { label: '• Premium Bathroom Fittings', detail: 'Branded sanitary fittings and elegant wall tiles designed for both sophistication and durability.' },
    ],
  },
  {
    title: 'Premium',
    subtitle: 'Luxury. Comfort. Elegance.',
    emoji: '🥇',
    price: '₹2,000 – ₹2,500',
    unit: 'Incl. GST',
    warranty: '10+ Years Structural Warranty',
    support: '2 Years Free Service Support*',
    accentColor: '#F26522',
    features: [
      { label: '• High-Grade Structural Materials', detail: 'Top-tier structural materials with expert engineering oversight for unmatched strength and premium build quality.' },
      { label: '• Custom Architectural Design', detail: 'Bespoke architectural planning tailored to your lifestyle, with creative space optimisation and aesthetic vision.' },
      { label: '• Premium Elevation Finish', detail: 'Architect-designed elevation with premium textures, lighting highlights, and modern façade detailing.' },
      { label: '• Granite / Premium Tile Flooring', detail: 'Luxury-grade granite or premium flooring options delivering timeless elegance and superior finish.' },
      { label: '• Fully Modular Kitchen', detail: 'Complete modular kitchen with soft-close cabinets, quartz countertops, and appliance-ready layout.' },
      { label: '• Complete False Ceiling', detail: 'Designer false ceiling across all rooms with cove lighting and layered illumination.' },
      { label: '• Wardrobes', detail: 'Built-in wardrobes with premium laminate or veneer finish, engineered for smooth functionality.' },
      { label: '• Premium Branded Fittings', detail: 'High-end branded electricals, designer lighting options, and smart-home readiness for future upgrades.' },
      { label: '• Smart Lighting Options', detail: 'Future-ready smart lighting provisions including dimmers, scene controls, and automation wiring.' },
    ],
  },
  {
    title: 'Commercial',
    subtitle: 'Built for Business. Engineered to Last.',
    emoji: '🏢',
    price: 'Custom Pricing',
    unit: 'By project scope',
    warranty: '10+ Years Structural Warranty',
    support: '2 Years Free Service Support*',
    accentColor: '#334155',
    features: [
      { label: 'Project Types', detail: 'End-to-end construction for offices, retail outlets, warehouses, and commercial complexes with fully customised planning.' },
      { label: 'Structure', detail: 'Commercial-grade RCC structure engineered for heavy load capacity, seismic safety, and long-term sustainability.' },
      { label: 'Interior Fit-Out', detail: 'Business-specific interior layouts designed for productivity, branding impact, and operational efficiency.' },
      { label: 'MEP Services', detail: 'Complete MEP integration including HVAC planning, three-phase power systems, and industrial-grade plumbing.' },
      { label: 'Compliance & Safety', detail: 'Fire safety compliance, sprinkler provisions, emergency exits, and regulatory approvals handled professionally.' },
      { label: 'Pricing Factors', detail: 'Transparent costing based on soil test, structural design, materials, and scope — no hidden surprises. Contact us for a detailed consultation.' },
    ],
  },
];

// ─── Accordion Item ───────────────────────────────────────────────────────────

const AccordionItem = ({
  feature,
  isOpen,
  onToggle,
  accent,
}: {
  feature: PackageFeature;
  isOpen: boolean;
  onToggle: () => void;
  accent: string;
}) => (
  <div className="border-b border-gray-100 last:border-0">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between py-3 px-0 text-left group transition-colors duration-150"
    >
      <span
        className="text-gray-700 text-[13px] font-semibold transition-colors duration-200 pr-2"
        style={{ color: isOpen ? accent : undefined }}
      >
        {feature.label}
      </span>
      <span
        className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center transition-all duration-200 border"
        style={{
          borderColor: isOpen ? accent : '#e5e7eb',
          backgroundColor: isOpen ? accent : 'transparent',
          color: isOpen ? 'white' : '#9ca3af',
        }}
      >
        {isOpen ? <Minus size={10} strokeWidth={3} /> : <Plus size={10} strokeWidth={3} />}
      </span>
    </button>
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          key="content"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <p className="text-gray-500 text-xs leading-relaxed pb-3">
            {feature.detail}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

// ─── Package Card ─────────────────────────────────────────────────────────────

const PackageCard = ({
  pkg,
  onTalkToExpert,
}: {
  pkg: PricingPackage;
  onTalkToExpert: () => void;
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);
  const accent = pkg.accentColor || '#F26522';
  const isCommercial = pkg.title === 'Commercial';
  const isPopular = !!pkg.badge;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="relative flex flex-col rounded-3xl overflow-hidden bg-white h-full"
      style={{
        boxShadow: isPopular
          ? `0 8px 40px -8px ${accent}55, 0 2px 8px rgba(0,0,0,0.06)`
          : '0 4px 24px -4px rgba(0,0,0,0.10)',
        border: isPopular ? `2px solid ${accent}` : '1.5px solid #f0f0f0',
        transition: 'box-shadow 0.3s, transform 0.3s',
      }}
      whileHover={{
        y: -6,
        boxShadow: `0 16px 48px -8px ${accent}44, 0 4px 16px rgba(0,0,0,0.08)`,
      }}
    >
      {/* Popular ribbon */}
      {isPopular && (
        <div
          className="absolute top-4 right-4 z-10 flex items-center gap-1 text-white text-[10px] font-bold px-3 py-1 rounded-full"
          style={{ backgroundColor: accent }}
        >
          <Star size={9} fill="white" /> {pkg.badge}
        </div>
      )}

      {/* Coloured top stripe */}
      <div
        className="h-1.5 w-full flex-shrink-0"
        style={{ background: `linear-gradient(90deg, ${accent}, ${accent}99)` }}
      />

      {/* Header */}
      <div className="px-6 pt-6 pb-5 flex-shrink-0">
        {/* Emoji + Title */}
        <div className="flex items-center gap-2 mb-1">
          <span className="text-2xl leading-none">{pkg.emoji}</span>
          <h3 className="text-gray-900 font-black text-xl tracking-tight">{pkg.title}</h3>
        </div>

        {/* Subtitle */}
        <p className="text-xs font-semibold mb-4" style={{ color: accent }}>
          {pkg.subtitle}
        </p>

        {/* Price row */}
        <div className="flex items-end gap-2">
          <span className="text-gray-900 font-black text-2xl leading-none">{pkg.price}</span>
          {!isCommercial && (
            <span className="text-[11px] font-semibold text-gray-400 mb-0.5">/ Sq.ft*</span>
          )}
        </div>
        {pkg.unit && (
          <span
            className="inline-block mt-1.5 text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full"
            style={{ backgroundColor: `${accent}18`, color: accent }}
          >
            {pkg.unit}
          </span>
        )}

        {/* Divider */}
        <div className="mt-4 h-px bg-gray-100" />

        {/* Warranty & support */}
        {(pkg.warranty || pkg.support) && (
          <div className="mt-3 flex flex-col gap-1.5">
            {pkg.warranty && (
              <div className="flex items-center gap-1.5 text-[11px] font-semibold text-green-700">
                <Check size={11} strokeWidth={3} className="text-green-500 flex-shrink-0" />
                {pkg.warranty}
              </div>
            )}
            {pkg.support && (
              <div className="flex items-center gap-1.5 text-[11px] font-semibold text-blue-600">
                <Check size={11} strokeWidth={3} className="text-blue-400 flex-shrink-0" />
                {pkg.support}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Accordion */}
      <div
        className="flex-1 px-6 overflow-y-auto"
        style={{ maxHeight: '320px', scrollbarWidth: 'none' }}
      >
        {pkg.features.map((f, i) => (
          <AccordionItem
            key={i}
            feature={f}
            isOpen={openIndex === i}
            onToggle={() => toggle(i)}
            accent={accent}
          />
        ))}
      </div>

      {/* CTA */}
      <div className="px-6 pb-6 pt-4 flex-shrink-0">
        <button
          onClick={onTalkToExpert}
          className="w-full py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all duration-200 active:scale-95"
          style={{
            background: isCommercial
              ? 'linear-gradient(135deg, #334155, #1e293b)'
              : `linear-gradient(135deg, ${accent}, ${accent}cc)`,
            color: 'white',
            boxShadow: `0 4px 16px -4px ${accent}88`,
          }}
        >
          {isCommercial ? 'Contact Us for Quote' : 'Book Free Consultation'}
        </button>
      </div>
    </motion.div>
  );
};

// ─── Main Section ─────────────────────────────────────────────────────────────

export const PricingSection = ({
  packages = DEFAULT_PACKAGES,
  onTalkToExpert,
}: PricingSectionProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { openBookingModal } = useBooking();

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    // track active dot
    const card = el.querySelector<HTMLElement>('[data-card]');
    if (card) {
      const idx = Math.round(el.scrollLeft / (card.offsetWidth + 24));
      setActiveIndex(idx);
    }
  };

  useEffect(() => {
    const t = setTimeout(updateState, 150);
    const el = scrollRef.current;
    el?.addEventListener('scroll', updateState, { passive: true });
    window.addEventListener('resize', updateState);
    return () => {
      clearTimeout(t);
      el?.removeEventListener('scroll', updateState);
      window.removeEventListener('resize', updateState);
    };
  }, [packages]);

  const scrollTo = (index: number) => {
    const el = scrollRef.current;
    const card = el?.querySelector<HTMLElement>('[data-card]');
    if (!el || !card) return;
    el.scrollTo({ left: index * (card.offsetWidth + 24), behavior: 'smooth' });
  };

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>('[data-card]');
    const cardWidth = card ? card.offsetWidth + 24 : 360;
    el.scrollBy({ left: dir === 'left' ? -cardWidth : cardWidth, behavior: 'smooth' });
  };

  const handleExpert = (title: string) => {
    if (onTalkToExpert) onTalkToExpert(title);
    else openBookingModal();
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 relative overflow-hidden">

      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, #F26522, transparent)' }}
        />
        <div
          className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, #F26522, transparent)' }}
        />
      </div>

      {/* Section Header */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 mb-14 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >

          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            Transparent Pricing for Every Budget
          </h2>
          <p className="text-base text-gray-500 max-w-xl mx-auto leading-relaxed">
            All-inclusive packages with zero hidden charges. Choose what fits your vision and budget.
          </p>
          <div className="flex flex-wrap justify-center gap-5 pt-2">
            {['Transparent Pricing', 'Free Consultation', 'Flexible Packages'].map((item) => (
              <div key={item} className="flex items-center gap-1.5 text-gray-600">
                <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <Check size={11} strokeWidth={3.5} className="text-[#F26522]" />
                </div>
                <span className="text-sm font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Cards wrapper */}
      <div className="relative max-w-[1200px] mx-auto px-10 md:px-14">

        {/* Left arrow */}
        <AnimatePresence>
          {canScrollLeft && (
            <motion.button
              key="arrow-left"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.15 }}
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              className="absolute left-1 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-lg hover:border-[#F26522] hover:text-[#F26522] transition-all duration-200 hover:shadow-xl"
            >
              <ChevronLeft size={18} />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Scrollable row — 3 cards visible at once */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-3"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {packages.map((pkg, i) => (
            <div
              key={i}
              data-card
              className="flex-shrink-0"
              style={{
                // On desktop show 3 cards; on mobile full width
                width: 'min(calc(100vw - 3rem), calc((100%) / 3 - 14px))',
                minWidth: '280px',
                scrollSnapAlign: 'start',
              }}
            >
              <PackageCard
                pkg={pkg}
                onTalkToExpert={() => handleExpert(pkg.title)}
              />
            </div>
          ))}
        </div>

        {/* Right arrow */}
        <AnimatePresence>
          {canScrollRight && (
            <motion.button
              key="arrow-right"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.15 }}
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              className="absolute right-1 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-lg hover:border-[#F26522] hover:text-[#F26522] transition-all duration-200 hover:shadow-xl"
            >
              <ChevronRight size={18} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {packages.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className="transition-all duration-300 rounded-full"
            style={{
              width: activeIndex === i ? '24px' : '8px',
              height: '8px',
              backgroundColor: activeIndex === i ? '#F26522' : '#d1d5db',
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Note */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 mt-10">
        <div className="bg-orange-50 border border-orange-100 rounded-2xl px-5 py-4 text-sm text-gray-500 leading-relaxed flex items-start gap-2">
          <span className="text-base flex-shrink-0">📌</span>
          <span>
            <strong className="text-gray-700">Note:</strong> Final cost depends on soil condition, design, location, and material selection. Terms &amp; Conditions Apply.
          </span>
        </div>
      </div>

      <style>{`div::-webkit-scrollbar{display:none}`}</style>
    </section>
  );
};