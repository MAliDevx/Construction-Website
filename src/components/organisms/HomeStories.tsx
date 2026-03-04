import { useState } from "react";
import { useBooking } from "@/src/context/BookingContext";

type Plan = "Basic" | "Standard" | "Premium" | "Custom";
type FloorType = "G" | "G+1" | "G+2" | "G+3" | "G+4";

interface HomeownerStory {
  id: number;
  name: string;
  image: string;
  location: string;
  package: Plan;
  floor: FloorType;
  description: string;
}

// ─── SAMPLE DATA — replace with your own ───────────────────────────────────
const stories: HomeownerStory[] = [
  {
    id: 1,
    name: "Naroju Niharika",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&q=80",
    location: "Hyderabad",
    package: "Basic",
    floor: "G+1",
    description:
      "Building our home with SHAAH INFRA was seamless and professional. Even on a budget package, key customizations were possible, while rigorous 470+ quality checks ensured every detail met expectations.",
  },
  {
    id: 2,
    name: "Anil Kumar Bejjanki",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80",
    location: "Hyderabad",
    package: "Basic",
    floor: "G+2",
    description:
      "After a challenging first build, we chose SHAAH INFRA for our second home. Their transparent process, tech-driven updates, and patience with design changes made construction smooth and stress-free.",
  },
  {
    id: 3,
    name: "Rayabarapu Raghavendar",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&q=80",
    location: "Hyderabad",
    package: "Custom",
    floor: "G+3",
    description:
      "Rebuilding our duplex with SHAAH INFRA Infra was seamless. Clear processes, timely updates, and a dependable team that handled every detail smoothly and delivered our home on time.",
  },
  {
    id: 4,
    name: "Priya Mehta",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=500&q=80",
    location: "Bangalore",
    package: "Premium",
    floor: "G+2",
    description:
      "The premium package was worth every rupee. Exceptional materials, a dedicated project manager, and zero compromises on quality made our dream home a reality.",
  },
  {
    id: 5,
    name: "Suresh Iyer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&q=80",
    location: "Chennai",
    package: "Standard",
    floor: "G+1",
    description:
      "Standard plan offered the perfect balance of quality and cost. The team was punctual, professional, and kept us informed at every step of the construction journey.",
  },
  {
    id: 6,
    name: "Deepa Nair",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&q=80",
    location: "Pune",
    package: "Custom",
    floor: "G+4",
    description:
      "We had very specific requirements and the custom plan delivered exactly what we envisioned. The flexibility and attention to detail was outstanding throughout the project.",
  },
];
// ────────────────────────────────────────────────────────────────────────────

const CARDS_PER_VIEW = 3;
const PLANS: Plan[] = ["Basic", "Standard", "Premium", "Custom"];

const planColors: Record<Plan, {
  btnActiveBg: string;
  btnActiveText: string;
  btnActiveBorder: string;
  btnHoverBorder: string;
  btnHoverText: string;
  badgeBg: string;
  badgeText: string;
}> = {
  Basic: {
    btnActiveBg:     "bg-sky-100",
    btnActiveText:   "text-sky-700",
    btnActiveBorder: "border-sky-200",
    btnHoverBorder:  "hover:border-sky-300",
    btnHoverText:    "hover:text-sky-700",
    badgeBg:         "bg-sky-100",
    badgeText:       "text-sky-700",
  },
  Standard: {
    btnActiveBg:     "bg-emerald-50",
    btnActiveText:   "text-emerald-700",
    btnActiveBorder: "border-emerald-200",
    btnHoverBorder:  "hover:border-emerald-300",
    btnHoverText:    "hover:text-emerald-700",
    badgeBg:         "bg-emerald-100",
    badgeText:       "text-emerald-700",
  },
  Premium: {
    btnActiveBg:     "bg-amber-50",
    btnActiveText:   "text-amber-700",
    btnActiveBorder: "border-amber-200",
    btnHoverBorder:  "hover:border-amber-300",
    btnHoverText:    "hover:text-amber-700",
    badgeBg:         "bg-amber-100",
    badgeText:       "text-amber-700",
  },
  Custom: {
    btnActiveBg:     "bg-violet-50",
    btnActiveText:   "text-violet-700",
    btnActiveBorder: "border-violet-200",
    btnHoverBorder:  "hover:border-violet-300",
    btnHoverText:    "hover:text-violet-700",
    badgeBg:         "bg-violet-100",
    badgeText:       "text-violet-700",
  },
};

// ── Story Card ───────────────────────────────────────────────────────────────
function StoryCard({ story }: { story: HomeownerStory }) {
  const colors = planColors[story.package];
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 bg-white group flex flex-col h-full">
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: "300px" }}>
        <img
          src={story.image}
          alt={story.name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />

        {/* Location pill */}
        <div className="absolute top-3 left-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">
          <svg className="w-3 h-3 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          {story.location}
        </div>

        {/* Badges — uses planColors */}
        <div className="absolute bottom-3 left-3 flex gap-1.5">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-md backdrop-blur-sm ${colors.badgeBg} ${colors.badgeText}`}>
            {story.package.toUpperCase()}
          </span>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-gray-700/80 text-white backdrop-blur-sm">
            {story.floor}
          </span>
        </div>
      </div>

      {/* Text */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-bold text-gray-900 text-lg leading-tight mb-2">{story.name}</h3>
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-4">{story.description}</p>
      </div>
    </div>
  );
}

// ── Main Section ─────────────────────────────────────────────────────────────
export default function HomeownerStories() {
  const [activePlan, setActivePlan] = useState<Plan | "All">("All");
  const [currentIndex, setCurrentIndex] = useState(0);

  const filtered = activePlan === "All" ? stories : stories.filter((s) => s.package === activePlan);
  const maxIndex = Math.max(0, filtered.length - CARDS_PER_VIEW);

  const prev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const next = () => setCurrentIndex((i) => Math.min(maxIndex, i + 1));
  const { openBookingModal } = useBooking();

  const handlePlanChange = (plan: Plan | "All") => {
    setActivePlan(plan);
    setCurrentIndex(0);
  };

  const visible = filtered.slice(currentIndex, currentIndex + CARDS_PER_VIEW);
  const padded = [
    ...visible,
    ...Array(Math.max(0, CARDS_PER_VIEW - visible.length)).fill(null),
  ];

  return (
    <section className="bg-white py-14 px-4 font-sans">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-1">Homeowner Stories</h2>
          <p className="text-gray-400 text-sm">Hear from our happy homeowners</p>
        </div>

        {/* Filter tabs — uses planColors */}
        <div className="flex flex-wrap gap-2 mb-8">
          {/* All button */}
          <button
            onClick={() => handlePlanChange("All")}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
              activePlan === "All"
                ? "bg-gray-900 text-white border-gray-900 shadow-md"
                : "bg-white text-gray-500 border-gray-200 hover:border-gray-400 hover:text-gray-700"
            }`}
          >
            ✓ All
          </button>

          {/* Plan buttons */}
          {PLANS.map((plan) => {
            const c = planColors[plan];
            const isActive = activePlan === plan;
            return (
              <button
                key={plan}
                onClick={() => handlePlanChange(plan)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                  isActive
                    ? `${c.btnActiveBg} ${c.btnActiveText} ${c.btnActiveBorder} shadow-md`
                    : `bg-white text-gray-500 border-gray-200 ${c.btnHoverBorder} ${c.btnHoverText}`
                }`}
              >
                {plan} Plan
              </button>
            );
          })}
        </div>

        {/* Cards */}
        {filtered.length === 0 ? (
          <div className="flex items-center justify-center min-h-[300px] text-gray-400 text-sm">
            No stories found for this package.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 min-h-[480px]">
            {padded.map((story, idx) =>
              story ? (
                <StoryCard key={story.id} story={story} />
              ) : (
                <div key={`empty-${idx}`} className="hidden lg:block" />
              )
            )}
          </div>
        )}

        {/* Bottom row */}
        <div className="flex items-center justify-between mt-8">
          <button onClick={openBookingModal} className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm px-6 py-3 rounded-lg transition-colors duration-200 shadow-sm">
            Talk to an Expert
          </button>

          <div className="flex items-center gap-4">
            {/* Dots */}
            <div className="flex gap-1.5 items-center">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`rounded-full transition-all duration-200 ${
                    currentIndex === i ? "w-6 h-2 bg-gray-900" : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={prev}
                disabled={currentIndex === 0}
                className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-600 hover:border-gray-900 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={next}
                disabled={currentIndex >= maxIndex}
                className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-600 hover:border-gray-900 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}