import {  Phone } from 'lucide-react';
import { motion } from "framer-motion";
import {  Construction, Palette, ClipboardList, FileCheck } from "lucide-react";
import whychooseus from '../../assets/Home/Why-Chose-US.png';
import whychooseus2 from '../../assets/Home/Why-Chose-US2.png';
import {  useNavigate } from 'react-router-dom';
import { useBooking } from '@/src/context/BookingContext';

export const ServicesSection = () => {
   
  const navigate = useNavigate();
const services = [
  { number: "01", title: "Construction", icon: Construction, link: "/construction" },
  { number: "02", title: "Interior Designing", icon: Palette, link: "/interior-designing" },
  { number: "03", title: "Project Planning", icon: ClipboardList, link: "/project-planning" },
  { number: "04", title: "Approvals", icon: FileCheck, link: "/project-analysis" },
];
  const { openBookingModal } = useBooking();

  return (
<section
      className="relative overflow-hidden px-6 md:px-12 py-16 md:py-24"
      style={{ backgroundColor: "#F26522" }}
    >
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px",
        }}
      />


      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        <div>
          <p className="uppercase tracking-[0.3em] text-white/70 text-xs font-semibold mb-5">
            Why Choose Us
          </p>

          <h2 className="text-white font-extrabold mb-12 leading-tight text-4xl md:text-5xl">
            We Offer Best Services
          </h2>

          {/* Service List */}
          <div className="space-y-4 mb-12">
            {services.map((service, i) => (
              <motion.div
                key={service.number}
                onClick={() => navigate(service.link)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ x: 8 }}
                
                className="flex items-center gap-5 bg-[#EDEDED] rounded-2xl px-6 py-5 cursor-pointer transition-all duration-300 hover:shadow-lg"
              >
                {/* Number Box */}
                <div className="w-12 h-12 bg-[#F26522] rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-md">
                  {service.number}
                </div>

                {/* Title */}
                <span className="text-gray-800 font-semibold text-lg">
                  {service.title}
                </span>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.button
            onClick={openBookingModal}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-white text-[#F26522] font-bold px-8 py-4 rounded-xl shadow-lg transition-all duration-200"
          >
            <Phone size={18} fill="currentColor" />
            Book a Free Consultation
          </motion.button>
        </div>
        <div className="relative flex justify-center lg:justify-end">

      <div className="relative w-full max-w-md flex justify-center">

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10"
          style={{
            width: "350px",
            height: "500px",
            borderRadius: "30%",
            overflow: "hidden",
          }}
        >
          <img
            src={whychooseus}
            alt="Construction"
            className="w-full h-full object-contain"
          />

          <div className="absolute top-6 right-9 bg-white text-[#333] font-semibold text-sm px-5 py-2 rounded-full shadow-md">
            Construct
          </div>
        </motion.div>

        <div className="absolute -top-6 right-0 w-40 h-40 pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeDasharray="3 8"
            />
          </svg>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="absolute top-[45%] -right-4 w-[75%] aspect-[3/4] z-20" >
          <img
            src={whychooseus2}
            alt="Engineers discussing plans"
            className="w-full h-full object-contain"
          />
        </motion.div>

      </div>
        </div>
      </div>
    </section>
  );
};
