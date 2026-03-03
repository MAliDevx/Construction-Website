import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Heading, Text } from '../atoms/Typography';
import { useState, useEffect } from 'react';
import TestimonialLogo from '../../assets/testimonials-logo.png';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Rahul Sharma',
      date: '18-02-2026',
      text: 'Shaah Infra delivered our dream home ahead of schedule. The quality, transparency, and professionalism were outstanding.',
      avatar: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=300'
    },
    {
      name: 'Priya Reddy',
      date: '12-12-2025',
      text: 'From design to execution, the entire journey was smooth. Their team handled everything with great care.',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300'
    },
    {
      name: 'Amit Verma',
      date: '02-10-2025',
      text: 'Highly professional and trustworthy developers. Communication was clear and the finishing quality was excellent.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300'
    }
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920"
          alt="Modern Home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-secondary/85 backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-white">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-12">
          <img
            src={TestimonialLogo}
            alt="Google Review"
            className="w-44 object-contain"
          />

          <div className="text-center md:text-left">
            <Heading level={2} className="text-4xl md:text-6xl mb-2">
              Testimonials
            </Heading>
            <Text variant="lead" className="text-white/80">
              from our happy homeowners
            </Text>
          </div>
        </div>

        <div className="text-center mb-12 font-medium">
          — Over 100 Positive <span className="underline decoration-primary underline-offset-4">Google Reviews</span> —
        </div>

        {/* Slider Container */}
        <div className="relative max-w-4xl mx-auto overflow-hidden">
          
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-white hover:text-secondary transition z-20"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-white hover:text-secondary transition z-20"
          >
            <ChevronRight size={20} />
          </button>

          {/* Sliding Wrapper */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="min-w-full px-4"
              >
                <div className="bg-white text-secondary p-8 rounded-2xl shadow-2xl space-y-6">
                  
                  <div className="flex items-center gap-4">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-slate-200"
                    />
                    <div>
                      <Heading level={5} className="text-lg">
                        {t.name}
                      </Heading>

                      <div className="flex gap-1 text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} fill="currentColor" />
                        ))}
                      </div>

                      <Text variant="small" className="text-muted text-xs">
                        {t.date}
                      </Text>
                    </div>
                  </div>

                  <Text className="text-slate-600 leading-relaxed text-sm md:text-base">
                    "{t.text}"
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};