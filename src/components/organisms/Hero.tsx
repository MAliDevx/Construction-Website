import { Phone, ArrowRight } from 'lucide-react';
import { Button } from '../atoms/Button';
import { Heading, Text } from '../atoms/Typography';
import { FormField } from '../molecules/Inputs';
import { useBooking } from '../../context/BookingContext';

export const Hero = () => {
  const { openBookingModal } = useBooking();
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/construction-hero/1920/1080" 
          alt="Construction background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-secondary/60 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-white space-y-8">
          <Heading level={1} className="max-w-xl">
            Construct Your Dream Home With Our Expert Services
          </Heading>
          <Text variant="lead" className="text-white/80 max-w-lg">
            We turn your vision into reality with professional design, planning, and construction services tailored to your needs. From concept to completion, our expert team ensures quality, reliability, and excellence in every detail.
          </Text>
          <Button 
            variant="primary" 
            icon={<Phone size={20} />} 
            className="px-8 py-4 text-lg"
            onClick={openBookingModal}
          >
            Book a Free Consultation
          </Button>
        </div>

        <div className="lg:justify-self-end w-full max-w-md">
          <div className="bg-white p-8 rounded-3xl shadow-2xl space-y-6">
            <Heading level={3} className="text-secondary">Book a Free Consultation</Heading>
            <div className="space-y-4">
              <FormField placeholder="Full Name" />
              <FormField placeholder="Phone Number" type="tel" />
              <FormField placeholder="Location" />
              <Button variant="primary" className="w-full py-4" icon={<ArrowRight size={20} />}>
                Get a Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
