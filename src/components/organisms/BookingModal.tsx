import { X, Mail, Phone, MapPin, Send, CheckCircle, Clock, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Heading, Text } from '../atoms/Typography';
import { useState } from 'react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[95%] md:max-w-5xl max-h-[95vh] md:max-h-[90vh] bg-white rounded-2xl md:rounded-3xl shadow-2xl z-[101] overflow-hidden"
          >
            {/* Success State */}
            {submitted && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 flex flex-col items-center justify-center gap-6 z-50 rounded-2xl md:rounded-3xl"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', delay: 0.2 }}
                >
                  <CheckCircle size={80} className="text-green-500" strokeWidth={1.5} />
                </motion.div>
                <div className="text-center space-y-2">
                  <Heading level={2} className="text-2xl md:text-3xl text-green-700">Request Submitted!</Heading>
                  <Text className="text-green-600">We'll contact you within 24 hours to discuss your project.</Text>
                </div>
              </motion.div>
            )}

            <button
              onClick={onClose}
              className="absolute top-4 right-4 md:top-6 md:right-6 z-20 bg-gray-100 hover:bg-gray-200 text-gray-700 p-2.5 rounded-full transition-colors"
            >
              <X size={24} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 h-full overflow-hidden">
              {/* Left Side: Info Panel */}
              <div className="hidden md:flex bg-gradient-to-br from-[#F26522] to-orange-600 p-12 text-white flex-col justify-between">
                <div className="space-y-8">
                  <div>
                    <Heading level={2} className="text-4xl font-bold text-white leading-tight">
                      Get Your Free Consultation
                    </Heading>
                    <p className="text-white/80 mt-3 text-base leading-relaxed">
                      Share your project details and connect with our expert team at Shaah Infra.
                    </p>
                  </div>

                  <div className="space-y-4 bg-white/15 p-6 rounded-2xl backdrop-blur-sm border border-white/20">
                    <div className="flex items-start gap-3">
                      <CheckCircle size={20} className="shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-white">Free Consultation</p>
                        <p className="text-white/70 text-sm">No hidden charges, completely free.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock size={20} className="shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-white">Quick Response</p>
                        <p className="text-white/70 text-sm">We'll contact you within 24 hours.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users size={20} className="shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-white">Expert Team</p>
                        <p className="text-white/70 text-sm">Experienced professionals at your service.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-3 pt-8 border-t border-white/20">
                  <div className="flex items-center gap-3">
                    <Phone size={18} />
                    <span>+91 9705779992</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={18} />
                    <span className="truncate">info@shaahinfra.com</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">Kalyandurgam Road, Anantapur, AP 515001</span>
                  </div>
                </div>
              </div>

              {/* Right Side: Form */}
              <div className="p-6 md:p-10 overflow-y-auto">
                {/* Mobile Header */}
                <div className="md:hidden mb-6 space-y-2">
                  <Heading level={3} className="text-2xl text-secondary">Free Consultation</Heading>
                  <Text className="text-gray-600 text-sm">Tell us about your project and get expert guidance.</Text>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="block text-secondary text-sm font-bold uppercase tracking-wide">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter your name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F26522] focus:border-transparent transition-all text-sm"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="block text-secondary text-sm font-bold uppercase tracking-wide">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="your@email.com"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F26522] focus:border-transparent transition-all text-sm"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="block text-secondary text-sm font-bold uppercase tracking-wide">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="+91 XXXXXXXXXX"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F26522] focus:border-transparent transition-all text-sm"
                    />
                  </div>

                  {/* City */}
                  <div className="space-y-2">
                    <label className="block text-secondary text-sm font-bold uppercase tracking-wide">City / Location</label>
                    <input 
                      type="text" 
                      placeholder="Your city"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F26522] focus:border-transparent transition-all text-sm"
                    />
                  </div>

                  {/* Project Type */}
                  <div className="space-y-2">
                    <label className="block text-secondary text-sm font-bold uppercase tracking-wide">Project Type</label>
                    <select 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F26522] focus:border-transparent transition-all text-sm appearance-none cursor-pointer bg-white"
                    >
                      <option value="">Select project type</option>
                      <option>Residential Construction</option>
                      <option>Commercial Construction</option>
                      <option>Interior Designing</option>
                      <option>Renovation</option>
                      <option>Other</option>
                    </select>
                  </div>

                  {/* Project Timeline */}
                  <div className="space-y-2">
                    <label className="block text-secondary text-sm font-bold uppercase tracking-wide">When do you want to start?</label>
                    <select 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F26522] focus:border-transparent transition-all text-sm appearance-none cursor-pointer bg-white"
                    >
                      <option>Immediately</option>
                      <option>In 1 Month</option>
                      <option>In 3 Months</option>
                      <option>In 6 Months</option>
                      <option>Not decided yet</option>
                    </select>
                  </div>

                  {/* Budget */}
                  <div className="space-y-2">
                    <label className="block text-secondary text-sm font-bold uppercase tracking-wide">Estimated Budget Range</label>
                    <select 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F26522] focus:border-transparent transition-all text-sm appearance-none cursor-pointer bg-white"
                    >
                      <option>Select budget range</option>
                      <option>Below 20 Lakhs</option>
                      <option>20-50 Lakhs</option>
                      <option>50-1 Crore</option>
                      <option>Above 1 Crore</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="block text-secondary text-sm font-bold uppercase tracking-wide">Project Details (Optional)</label>
                    <textarea 
                      placeholder="Tell us more about your project..."
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F26522] focus:border-transparent transition-all text-sm resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#F26522] to-orange-600 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 text-base"
                  >
                    <Send size={18} className="rotate-45" />
                    Get Free Consultation
                  </button>

                  {/* Disclaimer */}
                  <p className="text-xs text-gray-500 text-center">
                    We'll never spam you. Your information is secure and confidential.
                  </p>
                </form>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
