import { Navbar } from '../components/organisms/Navbar';
import { TestimonialsContactAndFooterTemplate } from '../components/templates/TestimonialsAndContact';
import { PageHero } from '../components/organisms/PageHero';
import { PastProjects } from '../components/organisms/PastProjects';
import { StatsSection } from '../components/organisms/StatsAndBranches';
import { Building2, ShieldCheck, Sparkles, Timer, SmilePlus, PhoneCall } from 'lucide-react';
import AboutUs from '../assets/About/about-hero.png';
import { motion } from 'motion/react';
import { TbBrandWhatsappFilled } from "react-icons/tb";

export const AboutPage = () => {
  const missions = [
    { label: 'Strong Structures', desc: 'High-grade materials & expert engineering for lifelong strength.', icon: ShieldCheck },
    { label: 'Elegant Interiors', desc: 'Thoughtfully designed spaces that reflect your personal style.', icon: Sparkles },
    { label: 'On-Time Completion', desc: 'We honour timelines and deliver without delays.', icon: Timer },
    { label: 'Customer Satisfaction', desc: 'Your happiness is the foundation of everything we do.', icon: SmilePlus },
  ];

  return (
    <div className="relative">
      <Navbar />
      <main>

        <PageHero
          heading={
            <>
              Building Trust<br />
              <span>Delivering Excellence</span>
            </>
          }
          subheading="We are a dedicated construction company committed to delivering high-quality, reliable, and innovative building solutions. With years of experience and a passion for excellence."
          imageSrc={AboutUs}
          imageAlt="About Us Hero"
        />

        <section className="bg-white py-20 md:py-28 px-4 md:px-8 overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

              {/* LEFT — image */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="flex-shrink-0 w-full lg:w-[460px] relative"
              >
                {/* Dot grid decoration top-right */}
                <div
                  className="absolute -top-4 -right-4 w-24 h-24 z-0 opacity-50"
                  style={{
                    backgroundImage: 'radial-gradient(circle, #F26522 1.5px, transparent 1.5px)',
                    backgroundSize: '10px 10px',
                  }}
                />

                {/* Main image */}
                <div
                  className="relative z-10 rounded-3xl overflow-hidden"
                  style={{
                    boxShadow: '0 20px 60px -12px rgba(242,101,34,0.20)',
                    aspectRatio: '4/3',
                  }}
                >
                  <img
                    src={AboutUs}
                    alt="Shaah Infra — premium residential construction"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.55, duration: 0.4 }}
                  className="absolute bottom-5 right-5 z-20 bg-white rounded-2xl px-5 py-3 flex items-center gap-3"
                  style={{
                    boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                    border: '1.5px solid #f5f0eb',
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#F2652215' }}
                  >
                    <Building2 size={18} style={{ color: '#F26522' }} />
                  </div>
                  <div>
                    <p className="text-gray-900 font-black text-sm leading-none">100+</p>
                    <p className="text-gray-400 text-[11px] mt-0.5 font-medium">Homes Delivered</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* RIGHT — text + mission boxes */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="flex-1 min-w-0"
              >
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-1">
                  Welcome to Shaah Infra
                </h2>
                <h2
                  className="text-3xl md:text-4xl font-black leading-tight mb-4"
                  style={{
                    background: 'linear-gradient(90deg, #F26522, #e8480a)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Builders & Developers
                </h2>

                {/* Orange underline */}
                <div className="w-10 h-1 rounded-full mb-6" style={{ backgroundColor: '#F26522' }} />

                {/* Body text */}
                <p className="text-gray-500 text-base leading-relaxed mb-3">
                  Shaah Infra is a trusted construction and interior development company based in{' '}
                  <strong className="text-gray-800">Anantapur</strong>. We specialize in delivering
                  high-quality residential and commercial projects with modern designs, structural
                  strength, and premium finishing.
                </p>
                <p className="text-gray-500 text-base leading-relaxed mb-8">
                  With a strong commitment to quality, transparency, and timely delivery, we transform
                  your ideas into beautifully constructed spaces.
                </p>

                {/* Mission boxes — 2×2 grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {missions.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.25 + i * 0.09 }}
                        className="flex items-start gap-4 rounded-2xl p-4 group transition-all duration-200"
                        style={{
                          backgroundColor: '#FAFAF8',
                          border: '1.5px solid #f0ede8',
                        }}
                        onMouseEnter={e => {
                          (e.currentTarget as HTMLElement).style.borderColor = '#F2652240';
                          (e.currentTarget as HTMLElement).style.backgroundColor = '#FFF8F4';
                        }}
                        onMouseLeave={e => {
                          (e.currentTarget as HTMLElement).style.borderColor = '#f0ede8';
                          (e.currentTarget as HTMLElement).style.backgroundColor = '#FAFAF8';
                        }}
                      >
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200"
                          style={{ backgroundColor: '#F2652215' }}
                        >
                          <Icon size={18} style={{ color: '#F26522' }} />
                        </div>
                        <div>
                          <p className="text-gray-800 font-bold text-sm mb-1">{item.label}</p>
                          <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        <StatsSection />
        <PastProjects />

      </main>
      <TestimonialsContactAndFooterTemplate />

      {/* WhatsApp Floating Button */}
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
      style={{ backgroundColor: "#fe6700" }}
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