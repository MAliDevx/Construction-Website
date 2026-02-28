import { Heading, Text } from '../atoms/Typography';
import { Button } from '../atoms/Button';
import { useBooking } from '../../context/BookingContext';
import ContactPage from '../../assets/ContactPage.png';
import { Phone } from 'lucide-react';


export const ContactSection = () => {
  const { openBookingModal } = useBooking();
  return (
    <section className="section-padding bg-slate-50">
      <div className="text-center mb-16 space-y-4">
        <Heading level={2} className="text-4xl md:text-5xl">Contact Our Team</Heading>
        <Text variant="lead" className="max-w-2xl mx-auto">
Get in touch with our experts today to discuss your project and receive professional guidance tailored to your needs.        </Text>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-stretch">
        <div className="rounded-3xl overflow-hidden shadow-lg min-h-[400px]">
          <iframe 
            src={ContactPage}
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100 flex-col justify-center space-y-8">
          <div className="space-y-2 text-center">
            <Text className="text-primary font-bold uppercase tracking-widest">Don't miss out!</Text>
            <Heading level={3} className="text-3xl md:text-4xl">Call Us Today for Free Estimate</Heading>
          </div>
          
          <Text variant="lead" className='text-center'>
              Let’s start the conversation. Reach out to us today with any questions, comments, or concerns. We’re here to assist you every step of the way and we look forward to working with you.
          </Text>

          <div className="flex items-center gap-4 text-2xl font-bold text-secondary w-[75%]">
            <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
              <Phone fill="currentColor" />
            </div>
            +91 303-520-2667
          </div>

          <Button 
            variant="primary" 
            className="w-full py-5 text-lg" 
            icon={<Phone size={24} />}
            onClick={openBookingModal}
          >
            Book a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};