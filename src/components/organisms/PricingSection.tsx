import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Plus, Minus, Check } from 'lucide-react';
import { useBooking } from '@/src/context/BookingContext';

// ─── Types ────────────────────────────────────────────────────────────────────

interface PackageFeature {
  label: string;
  detail: string;
}

interface PricingPackage {
  title: string;
  price: string;
  unit?: string;
  features: PackageFeature[];
}

interface PricingSectionProps {
  packages?: PricingPackage[];
  onTalkToExpert?: (packageTitle: string) => void;
}

// ─── Default data ─────────────────────────────────────────────────────────────

const DEFAULT_PACKAGES: PricingPackage[] = [
  {
    title: 'Classic',
    price: '₹ 2155/sqft',
    unit: 'Incl. GST',
    features: [
      { label: 'Structure', detail: 'RCC framed structure with M20 grade concrete and Fe500 TMT steel bars. Includes footing, columns, beams, and slabs.' },
      { label: 'Kitchen', detail: 'Granite countertop with stainless steel sink. Wall tiles up to 2 feet above platform. Standard modular cabinets.' },
      { label: 'Bathroom', detail: 'Branded CP fittings, wall tiles up to 7 feet, anti-skid floor tiles, and concealed plumbing with ISI pipes.' },
      { label: 'Doors & Windows', detail: 'Main door: solid teak wood frame with laminate shutter. Internal doors: hollow core with paint finish. UPVC windows.' },
      { label: 'Painting', detail: 'Interior: 2 coats of premium emulsion. Exterior: 2 coats of weather-proof paint with primer.' },
      { label: 'Flooring', detail: 'Vitrified tiles (600×600 mm) for living and bedrooms. Anti-skid ceramic for bathrooms and utility.' },
      { label: 'Electrical', detail: 'Concealed copper wiring with MCB protection. 3-pin modular switches. TV, AC, and geyser provisions in all rooms.' },
      { label: 'Miscellaneous', detail: 'Staircase with MS railing, compound wall with gate, overhead water tank (1000L), and basic landscaping.' },
    ],
  },
  {
    title: 'Premium',
    price: '₹ 2555/sqft',
    unit: 'Incl. GST',
    features: [
      { label: 'Structure', detail: 'RCC framed structure with M25 grade concrete, earthquake-resistant design, and Fe550 TMT steel bars.' },
      { label: 'Kitchen', detail: 'Quartz countertop with SS under-mount sink. Full-height wall tiles with designer border. Semi-modular cabinets with soft-close fittings.' },
      { label: 'Bathroom', detail: 'Premium CP fittings (Jaquar/Kohler), designer wall tiles up to ceiling, rain shower provision, and jacuzzi rough-in.' },
      { label: 'Doors & Windows', detail: 'Main door: Burma teak with digital lock provision. Internal: solid core flush with veneer. Double-glazed UPVC windows.' },
      { label: 'Painting', detail: 'Interior: Royale or equivalent luxury emulsion. Exterior: elastomeric waterproof coating. Feature wall with texture finish.' },
      { label: 'Flooring', detail: 'Italian marble or large-format vitrified (800×800 mm) for living. Engineered wood for bedrooms.' },
      { label: 'Electrical', detail: 'Home automation-ready wiring with smart switch provisions. Dedicated circuits for all appliances. LED cove lighting provisions.' },
      { label: 'Miscellaneous', detail: 'Decorative staircase with glass railing, landscaped garden, 2000L water tank, video door phone, and CCTV provisions.' },
    ],
  },
  {
    title: 'Royale',
    price: '₹ 2780/sqft',
    unit: 'Incl. GST',
    features: [
      { label: 'Structure', detail: 'Luxury RCC structure with M30 grade concrete, seismic zone V compliant design, and premium waterproofing throughout.' },
      { label: 'Kitchen', detail: 'Imported granite/quartz countertop. Full modular kitchen with soft-close drawers, built-in appliance space, and island provision.' },
      { label: 'Bathroom', detail: 'Imported tiles, Grohe/TOTO fittings, built-in bathtub, steam room provision, and backlit mirrors with anti-fog.' },
      { label: 'Doors & Windows', detail: 'Customised solid wood main door with smart lock. Internal: solid core with veneer. Aluminium double-glazed large windows.' },
      { label: 'Painting', detail: 'Full luxury finish: Nerolac Impressions or equivalent. False ceiling with cove lighting. 3D wallpaper or panel feature walls.' },
      { label: 'Flooring', detail: 'Premium Italian marble throughout living areas. Hardwood flooring for bedrooms. Heated bathroom floor provision.' },
      { label: 'Electrical', detail: 'Full home automation system. Solar panel provision. EV charging point in garage. 10 KVA generator backup provision.' },
      { label: 'Miscellaneous', detail: 'Infinity or lap pool provision, lift provision, landscape with auto-irrigation, intercom, full CCTV system, and panic room wiring.' },
    ],
  },
];

// ─── Accordion Item ───────────────────────────────────────────────────────────

const AccordionItem = ({
  feature,
  isOpen,
  onToggle,
}: {
  feature: PackageFeature;
  isOpen: boolean;
  onToggle: () => void;
}) => (
  <div className="border-b border-gray-100 last:border-0">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between py-4 px-0 text-left group hover:bg-gray-50/50 transition-colors duration-150 rounded"
    >
      <span className="text-gray-800 text-sm font-semibold group-hover:text-[#F26522] transition-colors duration-200">
        {feature.label}
      </span>
      <span
        className="flex-shrink-0 w-6 h-6 flex items-center justify-center transition-all duration-200"
        style={{ color: isOpen ? '#F26522' : '#999' }}
      >
        {isOpen ? <Minus size={18} strokeWidth={2.5} /> : <Plus size={18} strokeWidth={2.5} />}
      </span>
    </button>

    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          key="content"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <p className="text-gray-600 text-xs leading-relaxed pb-4 px-0">
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 h-full hover:-translate-y-2"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-[#F26522] to-orange-600 px-6 py-6 flex-shrink-0">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-white font-bold text-xl">{pkg.title}</h3>
          {pkg.title === 'Premium' && (
            <span className="bg-white/30 text-white text-xs font-bold px-3 py-1 rounded-full">
              POPULAR
            </span>
          )}
        </div>
        <div className="space-y-1">
          <p className="text-white text-2xl font-bold">{pkg.price}</p>
          {pkg.unit && (
            <p className="text-white/80 text-xs font-medium">{pkg.unit}</p>
          )}
        </div>
      </div>

      {/* Accordion features */}
      <div
        className="flex-1 px-6 pt-4 pb-2 overflow-y-auto"
        style={{ maxHeight: '380px' }}
      >
        {pkg.features.map((f, i) => (
          <AccordionItem
            key={i}
            feature={f}
            isOpen={openIndex === i}
            onToggle={() => toggle(i)}
          />
        ))}
      </div>

      {/* Footer CTA */}
      <div className="px-6 pb-6 pt-4 border-t border-gray-100 flex-shrink-0 space-y-3">
        <p className="text-center text-[#F26522] text-sm font-semibold uppercase tracking-wide">
          Get Started Today
        </p>
        <button
          onClick={onTalkToExpert}
          className="w-full bg-[#F26522] hover:bg-[#d9561a] active:scale-95 text-white font-bold py-4 rounded-lg transition-all duration-200 text-sm tracking-wide shadow-md hover:shadow-lg"
        >
          Book Free Consultation
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

  // Arrow visibility — driven by actual scroll position
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateArrows = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    // Delay so DOM has rendered card widths
    const t = setTimeout(updateArrows, 150);
    const el = scrollRef.current;
    el?.addEventListener('scroll', updateArrows, { passive: true });
    window.addEventListener('resize', updateArrows);
    return () => {
      clearTimeout(t);
      el?.removeEventListener('scroll', updateArrows);
      window.removeEventListener('resize', updateArrows);
    };
  }, [packages]);

  // Scroll by one card width + gap
  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>('[data-card]');
    const cardWidth = card ? card.offsetWidth + 24 : 360; // 24 = gap-6
    el.scrollBy({ left: dir === 'left' ? -cardWidth : cardWidth, behavior: 'smooth' });
  };

  const handleExpert = (title: string) => {
    if (onTalkToExpert) onTalkToExpert(title);
    else openBookingModal();
  };

  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-20 relative overflow-hidden">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <p className="text-[#F26522] font-bold uppercase tracking-widest text-sm">Our Pricing Plans</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Transparent Pricing for Every Budget
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Choose from our premium construction packages tailored to your needs. All prices are all-inclusive with no hidden charges. Get the best quality at competitive rates.
          </p>
          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <div className="flex items-center gap-2 text-gray-700">
              <Check size={20} className="text-[#F26522]" />
              <span className="text-sm font-medium">Transparent Pricing</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Check size={20} className="text-[#F26522]" />
              <span className="text-sm font-medium">Free Consultation</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Check size={20} className="text-[#F26522]" />
              <span className="text-sm font-medium">Flexible Packages</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Outer wrapper adds side padding and positions arrows outside */}
      <div className="relative mx-auto max-w-[calc(100%-2rem)] md:max-w-[calc(100%-5rem)]">

        {/* ── Left arrow — fades in/out based on scroll position ── */}
        <AnimatePresence>
          {canScrollLeft && (
            <motion.button
              key="arrow-left"
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 8 }}
              transition={{ duration: 0.2 }}
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              className="absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center shadow-md hover:border-[#F26522] hover:text-[#F26522] transition-colors duration-200"
            >
              <ChevronLeft size={18} />
            </motion.button>
          )}
        </AnimatePresence>

        {/* ── Scrollable cards row ── */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-2"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            scrollSnapType: 'x mandatory',        // snap-to-card on mobile
            WebkitOverflowScrolling: 'touch',      // momentum scrolling iOS
          }}
        >
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              data-card                             // used by scroll() to measure width
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex-shrink-0"
              style={{
                // Mobile: full viewport width minus padding
                // Desktop: fixed 360px
                width: 'min(calc(100vw - 3rem), 360px)',
                scrollSnapAlign: 'start',
              }}
            >
              <PackageCard
                pkg={pkg}
                onTalkToExpert={() => handleExpert(pkg.title)}
              />
            </motion.div>
          ))}
        </div>

        {/* ── Right arrow ── */}
        <AnimatePresence>
          {canScrollRight && (
            <motion.button
              key="arrow-right"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.2 }}
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              className="absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center shadow-md hover:border-[#F26522] hover:text-[#F26522] transition-colors duration-200"
            >
              <ChevronRight size={18} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* ── Dot indicators on mobile ── */}
      <div className="flex justify-center gap-2 mt-5 md:hidden">
        {packages.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              const el = scrollRef.current;
              const card = el?.querySelector<HTMLElement>('[data-card]');
              if (!el || !card) return;
              el.scrollTo({ left: i * (card.offsetWidth + 24), behavior: 'smooth' });
            }}
            className="w-2 h-2 rounded-full bg-gray-300 hover:bg-[#F26522] transition-colors duration-200"
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Hide webkit scrollbar */}
      <style>{`
        .pricing-scroll::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
};