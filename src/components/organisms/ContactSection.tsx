import { Heading, Text } from '../atoms/Typography';
import { Button } from '../atoms/Button';
import { useBooking } from '../../context/BookingContext';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ArrowRight, MessageCircle, PhoneCall } from 'lucide-react';
import { TbBrandWhatsappFilled } from 'react-icons/tb';

const ContactCard = ({ icon: Icon, title, value, delay }: { icon: any; title: string; value: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    viewport={{ once: true }}
    className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 hover:border-primary/20"
  >
    <div className="flex items-start gap-6">
      <div className="shrink-0 w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
        <Icon size={28} />
      </div>
      <div className="flex-1 pt-1">
        <Text className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-1">
          {title}
        </Text>
        <Heading level={4} className="text-xl md:text-2xl text-slate-900 font-bold">
          {value}
        </Heading>
      </div>
    </div>
  </motion.div>
);

export const ContactSection = () => {
  const { openBookingModal } = useBooking();
  
  const contactCards = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9705779992',
      delay: 0
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@shaahinfra.com',
      delay: 0.1
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Anantapur, AP',
      delay: 0.2
    }
  ];

  return (
       <section className="section-padding bg-linear-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <Text className="text-primary font-bold uppercase tracking-widest">Get In Touch</Text>
          <Heading level={2} className="text-4xl md:text-5xl font-bold text-slate-900">
            Let's Bring Your Vision to Life
          </Heading>
          <Text variant="lead" className="max-w-3xl mx-auto text-slate-600 text-lg">
            Ready to start your construction project? Connect with Mr. Ali Khan and our expert team at Shaah Infra. We're committed to understanding your needs and delivering exceptional results.
          </Text>
        </motion.div>



        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
           className="grid md:grid-cols-2 gap-12 items-center bg-linear-to-br from-primary/5 to-primary/10 rounded-3xl p-6 mb-12 border border-primary/10">
          <div className="space-y-6">
            <Heading level={3} className="text-3xl font-bold text-slate-900">
              Why Choose Shaah Infra?
            </Heading>


            <div className="space-y-4">
              {[
                  { 
    title: 'Experienced Engineering Team', 
    desc: 'Our certified engineers and architects ensure every project is structurally sound and aesthetically superior.' 
  },
  { 
    title: 'Quality Materials', 
    desc: 'We use premium-grade construction materials to guarantee durability, safety, and long-lasting beauty.' 
  },
  { 
    title: 'Transparent Budget Planning', 
    desc: 'Receive a clear, upfront cost estimate with no hidden charges, ensuring complete financial transparency.' 
  },
  { 
    title: 'Modern Designs', 
    desc: 'Our innovative architectural and interior designs blend style, functionality, and your personal taste.' 
  },
  { 
    title: 'Timely Project Delivery', 
    desc: 'We respect your timeline and consistently deliver projects on schedule, without compromising quality.' 
  },
  { 
    title: 'End-to-End Execution', 
    desc: 'From planning to handover, we manage every step of construction to provide a seamless experience.' 
  },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex gap-4 items-start"
                >
                  <div className="shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mt-1">
                      <span className="shrink-0 text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <Text className="font-bold text-slate-900">{item.title}</Text>
                    <Text className="text-slate-600 text-sm">{item.desc}</Text>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-10 shadow-xl space-y-6"
          >
            <div className="text-center space-y-2">
              <Text className="text-primary font-bold uppercase tracking-widest">Let's Connect</Text>
              <Heading level={3} className="text-2xl font-bold text-slate-900">
                Schedule Your Free Consultation
              </Heading>
              <Text className="text-slate-600">
                Mr. Ali Khan and the Shaah Infra team are ready to transform your project vision into reality.
              </Text>
            </div>

            <Button 
              variant="primary" 
              className="w-full py-4 text-lg group" 
              onClick={openBookingModal}
            >
              <span className="flex items-center gap-2">
                Book Free Consultation
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>

            <div className="text-center pt-4 border-t border-slate-200">
              <Text className="text-sm text-slate-600 mb-3">
                Or reach out directly:
              </Text>
              <div className="flex flex-col gap-2">
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
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-linear-to-r from-primary to-orange-600 rounded-3xl p-12 text-white shadow-xl"
        >
          <Heading level={2} className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </Heading>
          <Text className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Don't let your construction dreams wait. Contact us today and let's discuss how Shaah Infra can bring your vision to life with quality, transparency, and expertise.
          </Text>
          <Button 
            variant="secondary"
            className="py-4 px-8 text-lg"
            onClick={openBookingModal}
          >
            Start Your Project Today
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
