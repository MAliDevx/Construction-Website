import { X, Mail, Phone, MapPin, Send, Facebook, Instagram, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Heading, Text } from '../atoms/Typography';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-4xl max-h-[90vh] bg-gradient-to-br from-[#FF8C00] to-[#FF4500] rounded-3xl md:rounded-[40px] shadow-2xl z-[101] overflow-y-auto scrollbar-hide"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 md:top-6 md:right-6 text-white/80 hover:text-white transition-colors z-20 bg-black/20 md:bg-transparent p-2 rounded-full"
            >
              <X size={24} className="md:w-7 md:h-7" />
            </button>

            <div className="grid md:grid-cols-2 gap-0 h-full">
              {/* Left Side: Info */}
              <div className="p-8 md:p-14 text-white space-y-6 md:space-y-8">
                <div className="space-y-3 md:space-y-4">
                  <Heading level={2} className="text-3xl md:text-4xl font-bold leading-tight">
                    Request Project Estimation
                  </Heading>
                  <Text className="text-white/80 text-xs md:text-sm">
                    Fill in your details below to get a project estimation
                  </Text>
                </div>

                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center gap-3 md:gap-4 bg-white/20 p-3 md:p-4 rounded-xl md:rounded-2xl">
                    <Mail size={18} className="shrink-0 md:w-5 md:h-5" />
                    <span className="text-xs md:text-sm font-medium truncate">SaulDesign@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 md:gap-4 bg-white/20 p-3 md:p-4 rounded-xl md:rounded-2xl">
                    <Phone size={18} className="shrink-0 md:w-5 md:h-5" />
                    <span className="text-xs md:text-sm font-medium">+123 456 789</span>
                  </div>
                  <div className="flex items-center gap-3 md:gap-4 bg-white/20 p-3 md:p-4 rounded-xl md:rounded-2xl">
                    <MapPin size={18} className="shrink-0 md:w-5 md:h-5" />
                    <span className="text-xs md:text-sm font-medium">123 Street 456 House</span>
                  </div>
                </div>

                <div className="flex gap-5 md:gap-6 pt-2 md:pt-4">
                  <a href="#" className="hover:scale-110 transition-transform"><Facebook size={18} className="md:w-5 md:h-5" /></a>
                  <a href="#" className="hover:scale-110 transition-transform"><Instagram size={18} className="md:w-5 md:h-5" /></a>
                  <a href="#" className="hover:scale-110 transition-transform"><Twitter size={18} className="md:w-5 md:h-5" /></a>
                </div>
              </div>

              {/* Right Side: Form */}
              <div className="p-8 md:p-14 bg-white/10 backdrop-blur-md">
                <form className="space-y-4 md:space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-1.5 md:space-y-2">
                    <label className="text-white text-[10px] md:text-xs font-bold uppercase tracking-wider">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="James Albert"
                      className="w-full bg-white text-secondary px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl outline-none focus:ring-2 focus:ring-white/50 transition-all text-sm md:text-base"
                    />
                  </div>

                  <div className="space-y-1.5 md:space-y-2">
                    <label className="text-white text-[10px] md:text-xs font-bold uppercase tracking-wider">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="+91234567890"
                      className="w-full bg-white text-secondary px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl outline-none focus:ring-2 focus:ring-white/50 transition-all text-sm md:text-base"
                    />
                  </div>

                  <div className="space-y-1.5 md:space-y-2">
                    <label className="text-white text-[10px] md:text-xs font-bold uppercase tracking-wider">City</label>
                    <input 
                      type="text" 
                      placeholder="Delhi"
                      className="w-full bg-white text-secondary px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl outline-none focus:ring-2 focus:ring-white/50 transition-all text-sm md:text-base"
                    />
                  </div>

                  <div className="space-y-1.5 md:space-y-2">
                    <label className="text-white text-[10px] md:text-xs font-bold uppercase tracking-wider">Project Start</label>
                    <div className="relative">
                      <select className="w-full bg-white text-secondary px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl outline-none focus:ring-2 focus:ring-white/50 transition-all appearance-none cursor-pointer text-sm md:text-base">
                        <option>Immediately</option>
                        <option>In 1 Month</option>
                        <option>In 3 Months</option>
                        <option>In 6 Months</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-secondary">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>

                  <button className="w-full bg-white text-primary px-8 md:px-10 py-3.5 md:py-4 rounded-xl md:rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-slate-50 transition-colors shadow-xl text-sm md:text-base">
                    <Send size={16} className="rotate-45 -translate-y-0.5 md:w-[18px] md:h-[18px]" />
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
