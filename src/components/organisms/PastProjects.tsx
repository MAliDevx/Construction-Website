import { useState } from 'react';
import { Heading, Text } from '../atoms/Typography';
import { motion, AnimatePresence } from 'motion/react';
import Project1 from '../../assets/PastProject/Project1.jpeg';
import Project2 from '../../assets/PastProject/Project2.jpeg';
import Project3 from '../../assets/PastProject/Project3.jpeg';
import Project4 from '../../assets/PastProject/Project4.jpeg';
import Project5 from '../../assets/PastProject/Project5.jpeg';
import Project6 from '../../assets/PastProject/Project6.jpeg';
import Project7 from '../../assets/PastProject/Project7.jpeg';
import Project8 from '../../assets/PastProject/Project8.jpeg';
import Project9 from '../../assets/PastProject/Project9.jpeg';
import Project10 from '../../assets/PastProject/Project10.jpeg';
import Project11 from '../../assets/PastProject/Project11.jpeg';
import Project12 from '../../assets/PastProject/Project12.jpeg';
import Project13 from '../../assets/PastProject/Project13.jpeg';
import Project14 from '../../assets/PastProject/Project14.jpeg';
import Project15 from '../../assets/PastProject/Project15.jpeg';
import Project16 from '../../assets/PastProject/Project16.jpeg';
import Project17 from '../../assets/PastProject/Project17.jpeg';
import Project18 from '../../assets/PastProject/Project18.jpeg';
import Project19 from '../../assets/PastProject/Project19.jpeg';
import Project20 from '../../assets/PastProject/Project20.jpeg';
import { Link } from 'react-router-dom';

const projects = [
  { id: 1,  image: Project1  },
  { id: 2,  image: Project2  },
  { id: 3,  image: Project3  },
  { id: 4,  image: Project4  },
  { id: 5,  image: Project5  },
  { id: 6,  image: Project6  },
  { id: 7,  image: Project7  },
  { id: 8,  image: Project8  },
  { id: 9,  image: Project9  },
  { id: 10, image: Project10 },
  { id: 11, image: Project11 },
  { id: 12, image: Project12 },
  { id: 13, image: Project13 },
  { id: 14, image: Project14 },
  { id: 15, image: Project15 },
  { id: 16, image: Project16 },
  { id: 17, image: Project17 },
  { id: 18, image: Project18 },
  { id: 19, image: Project19 },
  { id: 20, image: Project20 },
];

// ── Lightbox ─────────────────────────────────────────────────────────────────
function Lightbox({
  project,
  total,
  onClose,
  onPrev,
  onNext,
}: {
  project: { id: number; image: string };
  total: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  // Close on backdrop click
  const handleBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  // Keyboard nav
  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft') onPrev();
    if (e.key === 'ArrowRight') onNext();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={handleBackdrop}
      onKeyDown={handleKey}
      tabIndex={0}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-10"
        aria-label="Close"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Counter */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/50 text-sm font-medium">
        {project.id} / {total}
      </div>

      {/* Prev */}
      <button
        onClick={onPrev}
        className="absolute left-4 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
        aria-label="Previous"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Image */}
      <motion.div
        key={project.id}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.25 }}
        className="max-w-5xl max-h-[85vh] mx-16 rounded-2xl overflow-hidden shadow-2xl"
      >
        <img
          src={project.image}
          alt={`Project ${project.id}`}
          className="w-full h-full object-contain max-h-[85vh]"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Next */}
      <button
        onClick={onNext}
        className="absolute right-4 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
        aria-label="Next"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </motion.div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export const PastProjects = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openAt = (index: number) => setActiveIndex(index);
  const close = () => setActiveIndex(null);
  const prev = () => setActiveIndex((i) => (i !== null ? (i - 1 + projects.length) % projects.length : 0));
  const next = () => setActiveIndex((i) => (i !== null ? (i + 1) % projects.length : 0));

  return (
    <section className="bg-white py-20">
      <div className="section-padding">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 space-y-4"
        >
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-orange-400 bg-orange-50 px-4 py-1.5 rounded-full">
            Portfolio
          </span>
          <Heading level={2} className="text-4xl md:text-5xl">
            Our Past Projects
          </Heading>
          <Text variant="muted" className="max-w-xl mx-auto text-base leading-relaxed">
            Every home we build is a story of trust, craftsmanship, and care — from foundation to finish.
          </Text>
        </motion.div>

        {/* Uniform square grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: (index % 4) * 0.07 }}
              className="relative group aspect-square overflow-hidden rounded-xl bg-gray-100 cursor-pointer"
              onClick={() => openAt(index)}
            >
              <img
                src={project.image}
                alt={`Project ${project.id}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />

              {/* Hover overlay with expand icon */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                  <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-sm mb-4">Want to see your home in this gallery?</p>
          <Link to={'/packages'} className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm px-7 py-3 rounded-full transition-colors duration-200 shadow-md shadow-orange-100">
            Start Your Project
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {activeIndex !== null && (
          <Lightbox
            project={projects[activeIndex]}
            total={projects.length}
            onClose={close}
            onPrev={prev}
            onNext={next}
          />
        )}
      </AnimatePresence>
    </section>
  );
};