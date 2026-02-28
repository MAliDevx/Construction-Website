import { motion } from "framer-motion";
import { ReactNode } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────

interface PageHeroProps {
  /** Large headline – supports JSX for line breaks / highlights */
  heading: ReactNode;
  /** Subheading / lead paragraph below the headline */
  subheading?: ReactNode;
  /** Full image URL used as the background */
  imageSrc: string;
  /** Alt text for the background image */
  imageAlt?: string;
  /** Optional eyebrow label above the heading */
  eyebrow?: string;
  /** Overlay darkness 0–1, default 0.52 */
  overlayOpacity?: number;
  /** Optional bottom-slot: breadcrumbs, CTA buttons, etc. */
  children?: ReactNode;
  /** Min height, default "60vh" */
  minHeight?: string;
  /** Align content: "left" | "center" (default "center") */
  align?: "left" | "center";
}

// ─── Component ───────────────────────────────────────────────────────────────

export const PageHero = ({
  heading,
  subheading,
  imageSrc,
  imageAlt = "Hero background",
  eyebrow,
  overlayOpacity = 0.52,
  children,
  minHeight = "60vh",
  align = "center",
}: PageHeroProps) => {
  const isCenter = align === "center";

  return (
    <section
      className="relative flex items-center justify-center overflow-hidden pt-20"
      style={{ minHeight }}
    >
      {/* ── Background image ── */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* ── Dark overlay matching reference image ── */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: `linear-gradient(
            to bottom,
            rgba(10,20,50,${overlayOpacity + 0.1}) 0%,
            rgba(10,20,50,${overlayOpacity}) 50%,
            rgba(10,20,50,${overlayOpacity + 0.15}) 100%
          )`,
        }}
      />

      {/* ── Content ── */}
      <div
        className={`relative z-10 w-full max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-24 ${
          isCenter ? "text-center" : "text-left"
        }`}
      >
        {/* Optional eyebrow */}
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white/70 uppercase tracking-widest text-xs font-semibold mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {eyebrow}
          </motion.p>
        )}

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="text-white font-bold leading-tight mb-6"
          style={{
            fontFamily: "'Manrope', 'DM Sans', sans-serif",
            fontSize: "clamp(2.2rem, 5.5vw, 4rem)",
            letterSpacing: "-0.01em",
            textShadow: "0 2px 20px rgba(0,0,0,0.4)",
          }}
        >
          {heading}
        </motion.h1>

        {subheading && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.22 }}
            className={`text-white/75 leading-relaxed font-normal ${isCenter ? "mx-auto" : ""}`}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(0.9rem, 1.3vw, 1.05rem)",
              maxWidth: "52ch",
            }}
          >
            {subheading}
          </motion.p>
        )}

        {/* Optional children slot */}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className={`mt-8 ${isCenter ? "flex justify-center" : ""}`}
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
};

