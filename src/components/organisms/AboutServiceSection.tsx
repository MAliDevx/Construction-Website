import { motion } from 'framer-motion';
import { Heading, Text } from '../atoms/Typography';

// ─── Types ────────────────────────────────────────────────────────────────────

interface FeatureItem {
  number: string;
  label: string;
}

interface AboutServiceSectionProps {
  heading: string;
  description: string;
  features?: FeatureItem[];
  imageSrc: string;
  imageAlt?: string;
}

// ─── Component ────────────────────────────────────────────────────────────────

export const AboutServiceSection = ({
  heading,
  description,
  features = [],
  imageSrc,
  imageAlt = 'Service image',
}: AboutServiceSectionProps) => {
  return (
    <section className="bg-[#F8F8F8] py-14 px-4 md:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* ── LEFT: Text content ── */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-6"
        >
          {/* Heading — uses shared atom, level 2 matches reference size */}
          <Heading level={2} className="text-gray-900 text-3xl md:text-4xl leading-tight">
            {heading}
          </Heading>

          {/* Description — muted variant for the grey paragraph */}
          <Text variant="body" className="text-gray-500 max-w-[48ch]">
            {description}
          </Text>

          {/* Feature grid – 2 columns */}
          {features.length > 0 && (
            <div className="grid grid-cols-2 gap-x-6 gap-y-4 mt-2">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.1 + i * 0.07 }}
                  className="flex items-center gap-3"
                >
                  {/* Orange number badge */}
                  <span className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center bg-[#F26522] text-white text-xs font-bold">
                    {f.number}
                  </span>
                  {/* Label — small Text atom */}
                  <Text variant="small" className="text-gray-700 font-medium">
                    {f.label}
                  </Text>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* ── RIGHT: Image ── */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="w-full"
        >
          <div className="rounded-2xl overflow-hidden w-full aspect-[4/3]">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

