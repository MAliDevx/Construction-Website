import { Navbar } from '../components/organisms/Navbar';
import { TestimonialsContactAndFooterTemplate } from '../components/templates/TestimonialsAndContact';
import { PricingSection } from '../components/organisms/PricingSection';
import {
  MessageCircle, PhoneCall,  CheckCircle2, ShieldCheck, Wrench, BadgeCheck,
} from 'lucide-react';
import AboutUs from '../assets/About/about-hero.png';
import { PageHero } from '../components/organisms/PageHero';
import { motion } from 'framer-motion';
import { useBooking } from '../context/BookingContext';
import { TbBrandWhatsappFilled } from "react-icons/tb";

const BRAND = '#FE6700';
const BRAND_LIGHT = '#FE670012';
const BRAND_BORDER = '#FE670030';

// ─── Define Requirements Section ─────────────────────────────────────────────

const requirements = [
  { emoji: '📐', label: 'Plot Size & Dimensions',      desc: 'Share your plot measurements and site layout for accurate planning.' },
  { emoji: '🏠', label: 'House Plan',                  desc: '2BHK / 3BHK / Duplex / Villa / Commercial — your choice.' },
  { emoji: '💰', label: 'Construction Budget',         desc: 'Set a budget range and we\'ll match the right package for you.' },
  { emoji: '📅', label: 'Project Timeline',            desc: 'Tell us your preferred start date and expected handover.' },
  { emoji: '🎨', label: 'Interior & Elevation',        desc: 'Share style preferences — modern, classic, or fully custom.' },
];

const DefineRequirementsSection = () => {
const {openBookingModal} = useBooking()

  return(
  <section className="py-20 md:py-24 px-4 md:px-8">
    <div className="max-w-6xl mx-auto">

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-shrink-0 lg:w-[340px]"
        >
  

          <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-1">
            Define Your
          </h2>
          <h2
            className="text-3xl md:text-4xl font-black leading-tight mb-4"
            style={{ color: BRAND }}
          >
            Construction<br />Requirement
          </h2>

          <div className="w-10 h-1 rounded-full mb-5" style={{ backgroundColor: BRAND }} />

          <p className="text-gray-500 text-base leading-relaxed mb-8">
            Our experts will provide a <strong className="text-gray-700">detailed estimate</strong> and
            planning guidance tailored to your exact needs — no guesswork, no surprises.
          </p>

          <motion.a
            href="tel:+919705779992"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-white transition-all duration-200"
            style={{
              backgroundColor: BRAND,
              boxShadow: `0 6px 24px ${BRAND}44`,
            }}
            onClick={openBookingModal}
          >
            <PhoneCall size={16} />
            Get Free Estimate
          </motion.a>
        </motion.div>

        {/* RIGHT — cards */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {requirements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-start gap-4 bg-white rounded-2xl p-5 group transition-all duration-200 cursor-default"
              style={{ border: '1.5px solid #f0ede8', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = `${BRAND}50`;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 24px ${BRAND}14`;
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = '#f0ede8';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 text-xl group-hover:scale-110 transition-transform duration-200"
                style={{ backgroundColor: BRAND_LIGHT }}
              >
                {item.emoji}
              </div>
              <div>
                <p className="text-gray-800 font-bold text-sm mb-1">{item.label}</p>
                <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
}

// ─── Commitment & Warranty Section ───────────────────────────────────────────

const trustPoints = [
  'Strong Foundation',
  'Quality Construction',
  'Warranty Assurance',
  'Reliable After-Service',
];

const serviceItems = [
  'Minor repair works',
  'Crack inspections',
  'Basic finishing corrections',
  'Post-handover service assistance',
];

const CommitmentSection = () => (
  <section className="py-20 md:py-24 px-4 md:px-8">
    <div className="max-w-6xl mx-auto">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >

        <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-3">
          Our Commitment &{' '}
          <span>Warranty</span>
        </h2>
        <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
          At Shaah Infra, quality is not just a promise — <em>it is our foundation.</em>
        </p>
      </motion.div>

      {/* Two cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

        {/* Structural Warranty */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-3xl p-8 group transition-all duration-200"
          style={{
            border: '1.5px solid #f0ede8',
            boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.borderColor = `${BRAND}45`;
            (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 36px ${BRAND}14`;
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.borderColor = '#f0ede8';
            (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 12px rgba(0,0,0,0.05)';
          }}
        >
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-200"
            style={{ backgroundColor: BRAND_LIGHT }}
          >
            <ShieldCheck size={22} style={{ color: BRAND }} />
          </div>

          <h3 className="text-gray-900 font-black text-xl mb-3">🏢 Structural Warranty</h3>

          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-4"
            style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0' }}
          >
            <CheckCircle2 size={14} className="text-green-500" />
            <span className="text-green-700 font-bold text-sm">10+ Years Structural Warranty*</span>
          </div>

          <p className="text-gray-500 text-sm leading-relaxed">
            Our buildings are constructed using high-quality materials, proper engineering standards,
            and strict quality checks to ensure long-lasting structural strength and durability.
          </p>
        </motion.div>

        {/* Free Service Support */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="bg-white rounded-3xl p-8 group transition-all duration-200"
          style={{
            border: '1.5px solid #f0ede8',
            boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.borderColor = `${BRAND}45`;
            (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 36px ${BRAND}14`;
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.borderColor = '#f0ede8';
            (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 12px rgba(0,0,0,0.05)';
          }}
        >
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-200"
            style={{ backgroundColor: BRAND_LIGHT }}
          >
            <Wrench size={22} style={{ color: BRAND }} />
          </div>

          <h3 className="text-gray-900 font-black text-xl mb-3">🛠️ Free Service Support</h3>

          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-4"
            style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0' }}
          >
            <CheckCircle2 size={14} className="text-green-500" />
            <span className="text-green-700 font-bold text-sm">2 Years Free Service Support*</span>
          </div>

          <ul className="space-y-2 mb-4">
            {serviceItems.map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-500 text-sm">
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: BRAND }}
                />
                {item}
              </li>
            ))}
          </ul>

          <p className="text-gray-400 text-xs italic leading-relaxed">
            Because our relationship with clients does not end at handover — it begins there.
          </p>
        </motion.div>
      </div>

      {/* Trust strip */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.28 }}
        className="bg-white rounded-2xl px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6"
        style={{
          border: `1.5px solid ${BRAND}30`,
          boxShadow: `0 4px 24px ${BRAND}10`,
        }}
      >
        <div>
          <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: BRAND }}>
            🔷 Trust. Strength. Assurance.
          </p>
          <p className="text-gray-900 font-black text-lg">When you build with Shaah Infra, you get:</p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center md:justify-end">
          {trustPoints.map((point, i) => (
            <div
              key={i}
              className="flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold"
              style={{
                backgroundColor: BRAND_LIGHT,
                border: `1px solid ${BRAND}30`,
                color: BRAND,
              }}
            >
              <BadgeCheck size={13} />
              {point}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Fine print */}
      <p className="text-center text-gray-400 text-xs mt-6 leading-relaxed">
        *Terms & Conditions Apply. Structural warranty applicable as per agreement and standard construction guidelines.
        Service support covers non-structural minor maintenance.
      </p>
    </div>
  </section>
);

// ─── Page ─────────────────────────────────────────────────────────────────────

export const PackagesPage = () => {

  return (
    <div className="relative">
    <Navbar />
    <main className="pt-20">
      <PageHero
        heading={<>Our Construction Packages<br /></>}
        subheading="Discover our affordable, transparent pricing with premium quality construction services tailored to every budget."
        imageSrc={AboutUs}
        imageAlt="Packages Hero"
      />

      <PricingSection />
      <DefineRequirementsSection />
      <CommitmentSection />
    </main>

    <TestimonialsContactAndFooterTemplate />

    {/* WhatsApp */}
    <a
      href="https://wa.me/919705779992"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-40 group"
      title="Chat with us on WhatsApp"
    >
      <TbBrandWhatsappFilled size={32} fill="currentColor" />
      <span className="absolute bottom-20 right-0 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        Quick Chat
      </span>
    </a>

    {/* Call */}
    <a
      href="tel:+919705779991"
      className="fixed bottom-28 right-8 w-14 h-14 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-40 group"
      style={{ backgroundColor: BRAND }}
      title="Call us"
    >
      <PhoneCall size={24} />
      <span className="absolute bottom-16 right-0 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        Call Now
      </span>
    </a>
  </div>
  );
};