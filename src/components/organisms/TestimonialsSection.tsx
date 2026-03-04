import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Heading, Text } from '../atoms/Typography';
import { useState, useEffect, useRef, useCallback } from 'react';
import TestimonialLogo from '../../assets/testimonials-logo.png';

const testimonials = [
  {
    name: 'Rahul Sharma',
    location: 'Anantapur',
    date: '18 Feb 2026',
    text: 'Shaah Infra delivered our dream home ahead of schedule. The quality of materials, transparency in billing, and the professionalism of the entire team was truly outstanding. Would recommend to anyone looking to build in Anantapur.',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Rahul%20Sharma&backgroundColor=f97316',
    rating: 5,
  },
  {
    name: 'Priya Reddy',
    location: 'Bangalore',
    date: '12 Dec 2025',
    text: 'From the very first consultation to handing over the keys, the entire journey with Shaah Infra was smooth and stress-free. Their team handled everything with great care and kept us updated at every step.',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Priya%20Reddy&backgroundColor=2563eb',
    rating: 5,
  },
  {
    name: 'Amit Verma',
    location: 'Hyderabad',
    date: '02 Oct 2025',
    text: 'Highly professional and trustworthy builders. Communication was always clear, timelines were respected, and the finishing quality exceeded our expectations.',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Amit%20Verma&backgroundColor=16a34a',
    rating: 5,
  },
  {
    name: 'Meena Krishnamurthy',
    location: 'Anantapur',
    date: '15 Aug 2025',
    text: 'We were nervous about building our first home, but Shaah Infra made it a joyful experience. They were patient with our questions and completed the work within budget.',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Meena%20Krishnamurthy&backgroundColor=db2777',
    rating: 5,
  },
  {
    name: 'Suresh Babu',
    location: 'Kurnool',
    date: '29 Jun 2025',
    text: 'No hidden costs, no delays, and the structural quality is solid. My family is living comfortably in our new home thanks to them.',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Suresh%20Babu&backgroundColor=7c3aed',
    rating: 5,
  },
  {
    name: 'Lakshmi Narayanan',
    location: 'Tirupati',
    date: '10 Apr 2025',
    text: 'Exceptional service from start to finish. The Premium package we chose was worth every rupee.',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Lakshmi%20Narayanan&backgroundColor=ea580c',
    rating: 5,
  },
];
export const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const visibleCount = isMobile ? 1 : 2;
  const total = testimonials.length;
  const maxIndex = total - visibleCount;

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const goTo = useCallback((idx: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(Math.max(0, Math.min(idx, maxIndex)));
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating, maxIndex]);

  const next = useCallback(() => {
    goTo(current >= maxIndex ? 0 : current + 1);
  }, [current, maxIndex, goTo]);

  const prev = useCallback(() => {
    goTo(current <= 0 ? maxIndex : current - 1);
  }, [current, maxIndex, goTo]);

  // Auto-slide
  useEffect(() => {
    intervalRef.current = setInterval(next, 5000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [next]);

  const pauseAuto = () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  const resumeAuto = () => { intervalRef.current = setInterval(next, 5000); };

  const translateX = -(current * (100 / visibleCount));

  return (
    <section className="relative py-24 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920"
          alt="Modern Home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-secondary/88 backdrop-blur-sm" />
        {/* Subtle grain overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-white">

        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-4">
          <img src={TestimonialLogo} alt="Google Review" className="w-40 object-contain" />
          <div className="text-center md:text-left">
            <Heading level={2} className="text-4xl md:text-6xl mb-1">
              Testimonials
            </Heading>
            <Text variant="lead" className="text-white/70">
              from our happy homeowners
            </Text>
          </div>
        </div>

        <div className="text-center mb-12 text-sm font-medium text-white/60 tracking-widest uppercase">
          — Over 100 Positive{' '}
          <span className="text-white underline decoration-primary underline-offset-4">Google Reviews</span>{' '}
          —
        </div>

        {/* ── Slider ── */}
        <div
          className="relative max-w-5xl mx-auto"
          onMouseEnter={pauseAuto}
          onMouseLeave={resumeAuto}
        >
          {/* Prev */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Next */}
          <button
            onClick={next}
            aria-label="Next"
            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all duration-200 hover:scale-110"
          >
            <ChevronRight size={18} />
          </button>

          {/* Track */}
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex"
              style={{
                transform: `translateX(${translateX}%)`,
                transition: 'transform 0.65s cubic-bezier(0.25, 1, 0.5, 1)',
              }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="px-3 flex-shrink-0"
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  <div
                    className="bg-white rounded-2xl p-6 md:p-8 h-full flex flex-col gap-5 relative overflow-hidden"
                    style={{ boxShadow: '0 16px 48px rgba(0,0,0,0.18)' }}
                  >
                    {/* Quote icon */}
                    <Quote
                      size={40}
                      className="absolute top-4 right-5 opacity-[0.07] text-gray-900"
                      fill="currentColor"
                    />

                    {/* Stars */}
                    <div className="flex gap-1">
                      {[...Array(t.rating)].map((_, si) => (
                        <Star key={si} size={14} className="text-yellow-400" fill="currentColor" />
                      ))}
                    </div>

                    {/* Review text */}
                    <p className="text-slate-600 leading-relaxed text-sm md:text-[15px] flex-1">
                      "{t.text}"
                    </p>

                    {/* Divider */}
                    <div className="h-px bg-gray-100" />

                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-12 h-12 rounded-full object-cover border-2"
                        style={{ borderColor: '#F2652230' }}
                      />
                      <div>
                        <p className="text-gray-900 font-bold text-sm leading-none mb-1">{t.name}</p>
                        <p className="text-gray-400 text-xs">{t.location} · {t.date}</p>
                      </div>
                      {/* Orange accent */}
                      <div
                        className="ml-auto w-1.5 h-8 rounded-full flex-shrink-0"
                        style={{ backgroundColor: '#F26522' }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Dot indicators ── */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="rounded-full transition-all duration-300"
              style={{
                width: current === i ? '24px' : '8px',
                height: '8px',
                backgroundColor: current === i ? '#F26522' : 'rgba(255,255,255,0.35)',
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
};