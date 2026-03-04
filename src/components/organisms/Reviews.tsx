import { useState, useRef, useEffect } from "react";
import video from '../../assets/Real_Estate.mp4';

type Plan = "Basic" | "Standard" | "Premium" | "Custom";

interface Testimonial {
  id: number;
  name: string;
  crn: string;
  year: number;
  rating: number;
  quote: string;
  plan: Plan;
  videoUrl: string;
  thumbnail: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Neelam & Ratan Okhandiar",
    crn: "CRN211861",
    year: 2024,
    rating: 4,
    quote: "After a lifetime of service, we needed someone we could rely on—and we found exactly that.",
    plan: "Basic",
    videoUrl: video, // your local imported video
    thumbnail: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80",
  },
  {
    id: 2,
    name: "Rajasri Suresh",
    crn: "CRN299808",
    year: 2025,
    rating: 5,
    quote: "Ajay and Rajasri's Dream Home — every detail was exactly as we imagined.",
    plan: "Premium",
    videoUrl: "https://www.youtube.com/embed/hdtF9da8dO8",
    thumbnail: "https://img.youtube.com/vi/hdtF9da8dO8/hqdefault.jpg",
  },
  {
    id: 3,
    name: "Gajanan K Hegde",
    crn: "CRN162781",
    year: 2024,
    rating: 5,
    quote: "We looked at so many apartments, but nothing felt like home until this.",
    plan: "Standard",
    videoUrl: "https://www.w3schools.com/embed/Jj5IbJX9jN4",
    thumbnail: "https://img.youtube.com/vi/Jj5IbJX9jN4/hqdefault.jpg",
  },
  {
    id: 4,
    name: "Priya & Arjun Mehta",
    crn: "CRN334512",
    year: 2025,
    rating: 5,
    quote: "The custom plan gave us complete freedom to design our dream space from scratch.",
    plan: "Custom",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=400&q=80",
  },
  {
    id: 5,
    name: "Sunita & Vivek Sharma",
    crn: "CRN445678",
    year: 2024,
    rating: 4,
    quote: "The basic plan covered everything we needed—no frills, just a perfect home.",
    plan: "Basic",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&q=80",
  },
  {
    id: 6,
    name: "Kiran & Deepa Nair",
    crn: "CRN556789",
    year: 2025,
    rating: 5,
    quote: "Standard plan, extraordinary results. We couldn't be happier with our new home.",
    plan: "Standard",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
  },
  {
    id: 7,
    name: "Rohit & Ananya Gupta",
    crn: "CRN667890",
    year: 2024,
    rating: 5,
    quote: "Premium all the way — the finishing, the fixtures, every single detail was world-class.",
    plan: "Premium",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&q=80",
  },
  {
    id: 8,
    name: "Meera & Suresh Iyer",
    crn: "CRN778901",
    year: 2025,
    rating: 5,
    quote: "Our custom home is truly one of a kind. They brought every vision to life.",
    plan: "Custom",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80",
  },
  {
    id: 9,
    name: "Vikram & Aishwarya Reddy",
    crn: "CRN889012",
    year: 2025,
    rating: 5,
    quote: "From foundation to finishing, the entire journey was smooth and professionally handled.",
    plan: "Premium",
    videoUrl: "https://www.youtube.com/embed/1O4hA3B1X6k",
    thumbnail: "https://img.youtube.com/vi/1O4hA3B1X6k/hqdefault.jpg",
  },
];
const PLANS: Plan[] = ["Basic", "Standard", "Premium", "Custom"];

const planColors: Record<Plan, { bg: string; text: string; border: string; badge: string }> = {
  Basic: {
    bg: "bg-sky-50",
    text: "text-sky-700",
    border: "border-sky-200",
    badge: "bg-sky-100 text-sky-700",
  },
  Standard: {
    bg: "bg-emerald-50",
    text: "text-emerald-700",
    border: "border-emerald-200",
    badge: "bg-emerald-100 text-emerald-700",
  },
  Premium: {
    bg: "bg-amber-50",
    text: "text-amber-700",
    border: "border-amber-200",
    badge: "bg-amber-100 text-amber-700",
  },
  Custom: {
    bg: "bg-violet-50",
    text: "text-violet-700",
    border: "border-violet-200",
    badge: "bg-violet-100 text-violet-700",
  },
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-amber-400" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function VideoModal({
  testimonial,
  onClose,
}: {
  testimonial: Testimonial;
  onClose: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };
function getYoutubeEmbedUrl(url: string) {
  if (url.includes("embed")) return url;

  const videoId =
    url.split("v=")[1]?.split("&")[0] ||
    url.split("youtu.be/")[1]?.split("?")[0];

  return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
}
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={handleBackdropClick}
      style={{ animation: "fadeIn 0.2s ease" }}
    >
      <div
        className="relative w-full max-w-3xl mx-4 rounded-2xl overflow-hidden shadow-2xl"
        style={{ animation: "scaleIn 0.25s cubic-bezier(0.34,1.56,0.64,1)" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 bg-gray-900">
          <div>
            <p className="text-white font-semibold text-sm">{testimonial.name}</p>
            <p className="text-gray-400 text-xs">{testimonial.crn} · {testimonial.year}</p>
          </div>
          <button
            onClick={onClose}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
            aria-label="Close video"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Video */}
{/* Video */}
<div className="bg-black aspect-video">
  {testimonial.videoUrl.includes("youtube.com") ||
  testimonial.videoUrl.includes("youtu.be") ? (
    
    <iframe
      src={getYoutubeEmbedUrl(testimonial.videoUrl)}
      title="Client Testimonial"
      className="w-full h-full"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />

  ) : testimonial.videoUrl.includes("vimeo.com") ? (

    <iframe
      src={testimonial.videoUrl}
      className="w-full h-full"
      frameBorder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
    />

  ) : (
    <video
      ref={videoRef}
      src={testimonial.videoUrl}
      controls
      autoPlay
      className="w-full h-full object-contain"
    />
  )}
</div>

        {/* Footer quote */}
        <div className="bg-gray-900 px-5 py-3 border-t border-white/10">
          <p className="text-gray-300 text-sm italic">"{testimonial.quote}"</p>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes scaleIn { from { transform: scale(0.9); opacity: 0 } to { transform: scale(1); opacity: 1 } }
      `}</style>
    </div>
  );
}

function TestimonialCard({
  testimonial,
  onPlay,
}: {
  testimonial: Testimonial;
  onPlay: () => void;
}) {
  const colors = planColors[testimonial.plan];

  return (
    <div className="flex flex-col rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 bg-white group h-full">
      {/* Thumbnail */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
        <img
          src={testimonial.thumbnail}
          alt={testimonial.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* Plan badge */}
        <span className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${colors.badge} backdrop-blur-sm`}>
          {testimonial.plan}
        </span>

        {/* Play button */}
        <button
          onClick={onPlay}
          className="absolute inset-0 flex items-center justify-center group/btn"
          aria-label={`Play ${testimonial.name}'s testimonial`}
        >
          <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-xl group-hover/btn:scale-110 group-hover/btn:bg-white transition-all duration-200">
            <svg className="w-6 h-6 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </button>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-1">
          <p className="font-bold text-gray-900 text-sm leading-tight">{testimonial.name}</p>
          <span className="text-xs text-gray-400 shrink-0 mt-0.5">{testimonial.year}</span>
        </div>
        <p className="text-xs text-gray-400 mb-2">{testimonial.crn}</p>
        <StarRating rating={testimonial.rating} />
        <p className="mt-3 text-sm text-gray-600 leading-relaxed flex-1 line-clamp-3">
          "{testimonial.quote}"
        </p>
        <button
          onClick={onPlay}
          className={`mt-4 text-xs font-medium ${colors.text} hover:underline text-left transition-colors`}
        >
          Watch story →
        </button>
      </div>
    </div>
  );
}

const CARDS_PER_VIEW = 3;
interface ReviewsSectionProps {
  Button: boolean;
}
export default function ReviewsSection({Button = false}:ReviewsSectionProps) {
  const [activePlan, setActivePlan] = useState<Plan | "All">("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState<Testimonial | null>(null);

  const filtered =
    activePlan === "All"
      ? testimonials
      : testimonials.filter((t) => t.plan === activePlan);

  const maxIndex = Math.max(0, filtered.length - CARDS_PER_VIEW);

  const handlePlanChange = (plan: Plan | "All") => {
    setActivePlan(plan);
    setCurrentIndex(0);
  };

  const prev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const next = () => setCurrentIndex((i) => Math.min(maxIndex, i + 1));

  const visible = filtered.slice(currentIndex, currentIndex + CARDS_PER_VIEW);

  // Pad with empty slots if fewer than 3
  const paddedVisible = [
    ...visible,
    ...Array(Math.max(0, CARDS_PER_VIEW - visible.length)).fill(null),
  ];

  return (
    <section className="bg-gray-50 py-14 px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-8">
          <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-2">
            Real Stories
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mb-1">
            Homeowner Testimonials
          </h2>
          <p className="text-gray-500 text-sm">
            Watch real homeowners share their experience from planning to handover
          </p>
        </div>

        {/* Plan filter tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {(["All", ...PLANS] as (Plan | "All")[]).map((plan) => {
            const isActive = activePlan === plan;
            const colors = plan !== "All" ? planColors[plan as Plan] : null;

            return (
              <button
                key={plan}
                onClick={() => handlePlanChange(plan)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                  isActive
                    ? plan === "All"
                      ? "bg-gray-900 text-white border-gray-900 shadow-md"
                      : `${colors!.bg} ${colors!.text} ${colors!.border} shadow-md`
                    : "bg-white text-gray-500 border-gray-200 hover:border-gray-300 hover:text-gray-700"
                }`}
              >
                {plan === "All" ? "✓ All" : plan + " Plan"}
              </button>
            );
          })}
        </div>

        {/* Slider */}
        <div className="relative">
          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 min-h-[420px]">
            {paddedVisible.map((testimonial, idx) =>
              testimonial ? (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                  onPlay={() => setActiveVideo(testimonial)}
                />
              ) : (
                <div key={`empty-${idx}`} className="hidden lg:block" />
              )
            )}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-1.5">
              {filtered.length > CARDS_PER_VIEW &&
                Array.from({ length: maxIndex + 1 }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`rounded-full transition-all duration-200 ${
                      currentIndex === i
                        ? "w-6 h-2 bg-gray-900"
                        : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
            </div>

            {/* Arrow buttons */}
            <div className="flex gap-2">
              <button
                onClick={prev}
                disabled={currentIndex === 0}
                className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-600 hover:border-gray-900 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
                aria-label="Previous"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={next}
                disabled={currentIndex >= maxIndex}
                className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-600 hover:border-gray-900 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
                aria-label="Next"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Count */}
          <p className="mt-3 text-xs text-gray-400 text-right">
            Showing {Math.min(currentIndex + CARDS_PER_VIEW, filtered.length)} of {filtered.length} reviews
          </p>
        </div>

        {/* CTA */}
        { Button && (<div className="text-center mt-10">
          <button className="px-6 py-2.5 rounded-full border-2 border-gray-900 text-gray-900 text-sm font-semibold hover:bg-[#f26522] hover:border-[#f26522] hover:text-white transition-all duration-200">
            View more reviews
          </button>
        </div>
)}
      </div>

      {activeVideo && (
        <VideoModal testimonial={activeVideo} onClose={() => setActiveVideo(null)} />
      )}
    </section>
  );
}