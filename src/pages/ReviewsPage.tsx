import { Navbar } from '../components/organisms/Navbar';
import { TestimonialsContactAndFooterTemplate } from '../components/templates/TestimonialsAndContact';
import ReviewsSection from '../components/organisms/Reviews';
import HomeownerStories from '../components/organisms/HomeStories';



function WarmDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-center gap-4 py-10 px-4 ">
      <div className="flex-1 max-w-xs h-px bg-gradient-to-r from-transparent to-[#E8A87060]" />
      <span
        className="text-xs font-bold tracking-[0.18em] uppercase text-[#B07050] bg-white px-5 py-2 rounded-full border border-[#E8C09060] shadow-sm"
      >
        {label}
      </span>
      <div className="flex-1 max-w-xs h-px bg-gradient-to-l from-transparent to-[#E8A87060]" />
    </div>
  );
}

function WarmSection({ children, tint = false }: { children: React.ReactNode; tint?: boolean }) {
  return (
    <div
      className="relative"
      style={{ background: tint ? "#FFF8F0" : "#FFFFFF" }}
    >
      <div className="absolute top-0 left-0 right-0 h-px  from-transparent via-[#E8A87040] to-transparent" />
      {children}
    </div>
  );
}

// ── Main Page ────────────────────────────────────────────────────────────────
export const ReviewsPage = () => {
  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="relative mt-25" >
        <Navbar />

        <main>
     

          {/* Reviews Section */}
          <WarmDivider label="What Our Customers Say" />
          <WarmSection tint>
            <ReviewsSection />
          </WarmSection>

          {/* Homeowner Stories */}
          <WarmDivider label="Homeowner Stories" />
          <WarmSection>
            <HomeownerStories />
          </WarmSection>

          {/* Contact & Footer */}
          <TestimonialsContactAndFooterTemplate />
        </main>
      </div>
    </>
  );
};