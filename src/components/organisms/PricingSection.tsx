import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Plus, Minus } from 'lucide-react';
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
      className="w-full flex items-center justify-between py-3.5 px-1 text-left group"
    >
      <span className="text-gray-800 text-sm font-medium group-hover:text-[#F26522] transition-colors duration-200">
        {feature.label}
      </span>
      <span
        className="flex-shrink-0 w-6 h-6 flex items-center justify-center transition-colors duration-200"
        style={{ color: isOpen ? '#F26522' : '#888' }}
      >
        {isOpen ? <Minus size={16} strokeWidth={2.5} /> : <Plus size={16} strokeWidth={2.5} />}
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
          <p className="text-gray-500 text-xs leading-relaxed pb-4 px-1">
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
    <div className="flex flex-col border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm min-w-[320px] w-full">
      {/* Header */}
      <div className="bg-[#F26522] px-6 py-4">
        <h3 className="text-white font-bold text-base leading-tight">
          {pkg.title} –{' '}
          <span className="font-semibold">{pkg.price}</span>
          {pkg.unit && (
            <span className="font-normal text-white/80 text-sm"> (Incl. GST)</span>
          )}
        </h3>
      </div>

      {/* Accordion features */}
      <div className="flex-1 px-5 pt-1 pb-2 overflow-y-auto" style={{ maxHeight: '380px' }}>
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
      <div className="px-5 pb-5 pt-3 border-t border-gray-100">
        <p className="text-center text-[#F26522] text-sm mb-3 font-medium">
          Get in touch with us!
        </p>
        <button
          onClick={onTalkToExpert}
          className="w-full bg-[#F26522] hover:bg-[#d9561a] text-white font-bold py-3.5 rounded-lg transition-colors duration-200 text-sm tracking-wide"
        >
          Talk To Our Expert
        </button>
      </div>
    </div>
  );
};

// ─── Main Section ─────────────────────────────────────────────────────────────

export const PricingSection = ({
  packages = DEFAULT_PACKAGES,
  onTalkToExpert,
}: PricingSectionProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { openBookingModal } = useBooking(); // ← hook called here at top level ✅

  const scroll = (dir: 'left' | 'right') => {  };

  const handleExpert = (title: string) => {
    if (onTalkToExpert) onTalkToExpert(title);
    else openBookingModal(); // ← use the returned function here ✅
  };
  return (
    <section className="bg-white py-16 px-4 md:px-10 relative">
      {/* Arrow: left */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center shadow-md hover:border-[#F26522] hover:text-[#F26522] transition-colors duration-200 md:-left-1"
        aria-label="Scroll left"
      >
        <ChevronLeft size={18} />
      </button>

      {/* Cards scrollable row */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth pb-2 px-8 md:px-12"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {packages.map((pkg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex-shrink-0 w-[340px] md:w-[360px]"
          >
            <PackageCard pkg={pkg} onTalkToExpert={() => handleExpert(pkg.title)} />
          </motion.div>
        ))}
      </div>

      {/* Arrow: right */}
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center shadow-md hover:border-[#F26522] hover:text-[#F26522] transition-colors duration-200 md:-right-1"
        aria-label="Scroll right"
      >
        <ChevronRight size={18} />
      </button>

      {/* Hide scrollbar in webkit */}
      <style>{`.flex::-webkit-scrollbar { display: none; }`}</style>
    </section>
  );
};