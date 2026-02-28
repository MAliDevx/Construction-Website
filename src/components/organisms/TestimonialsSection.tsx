import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Heading, Text } from '../atoms/Typography';
import  TestimonialLogo  from '../../assets/testimonials-logo.png';
export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sophie Moore',
      date: '18-02-2026',
      text: 'They gave me a very competitive bid, and were able to start quickly. The installation was fast and professional and they cleaned up after themselves so there was little evidence they were even there.',
      avatar: 'https://i.pravatar.cc/150?u=sophie'
    },
    {
      name: 'Sophie Moore',
      date: '12-Dec-2025',
      text: 'They gave me a very competitive bid, and were able to start quickly. The installation was fast and professional and they cleaned up after themselves so there was little evidence they were even there.',
      avatar: 'https://i.pravatar.cc/150?u=sophie2'
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/house-model/1920/1080" 
          alt="background" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-secondary/80 backdrop-blur-[2px]"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {/* Header Layout */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-18 md:gap-20 mb-8 text-white">
          {/* Google Review Badge */}
          <div className="flex flex-col items-center text-center">
             <img src={TestimonialLogo} alt="Google Review Badge" className="w-48 h-32 object-contain" />
          </div>

          {/* Title and Subtitle */}
          <div className="text-center md:text-left">
            <Heading level={2} className="text-5xl md:text-6xl mb-2">Testimonials</Heading>
            <Text variant="lead" className="text-white/80">from our local clients</Text>
          </div>
        </div>

        {/* Center Sub-text */}
        <div className="text-center text-white font-medium mb-8 opacity-90">
          — Over 100 Positive <span className="underline decoration-primary underline-offset-4">Google Reviews</span> —
        </div>

        <div className="relative max-w-5xl mx-auto">
          <button className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white hover:text-secondary transition-all z-20">
            <ChevronLeft size={20} />
          </button>
          <button className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white hover:text-secondary transition-all z-20">
            <ChevronRight size={20} />
          </button>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-[18px] shadow-2xl space-y-6">
                <div className="flex items-start gap-4">
                  <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full border-2 border-slate-100" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <Heading level={5} className="text-secondary text-lg">{t.name}</Heading>
                    </div>
                    <div className="flex gap-1 text-yellow-400 mb-1">
                      {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                    </div>
                    <Text variant="small" className="text-muted text-[10px]">{t.date}</Text>
                  </div>
                </div>
                <Text className="text-slate-600 text-sm leading-relaxed">
                  "{t.text}"
                </Text>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};