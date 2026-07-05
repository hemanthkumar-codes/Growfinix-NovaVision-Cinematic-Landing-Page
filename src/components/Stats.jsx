import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';

const stats = [
  { value: 98, suffix: '%', label: 'Signal accuracy' },
  { value: 42, suffix: 'ms', label: 'Average inference' },
  { value: 128, suffix: '+', label: 'Live data channels' },
  { value: 9, suffix: 'x', label: 'Faster response' },
];

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 28, stiffness: 90 });
  const rounded = useTransform(springValue, (latest) => `${Math.round(latest)}${suffix}`);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  return (
    <motion.span ref={ref} aria-label={`${value}${suffix}`}>
      {rounded}
    </motion.span>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="bg-[#08090c] px-4 py-20 sm:px-8 sm:py-24 lg:px-10">
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-6 sm:gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
        >
          <div>
            <p className="text-sm font-semibold text-amber-200">Measured at scale</p>
            <h2 className="mt-4 text-2xl font-semibold leading-tight text-white sm:text-4xl">
              Built for teams that cannot wait for insight to catch up.
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-white/62 sm:text-base sm:leading-8 lg:ml-auto">
            NovaVision compresses perception, analysis, and action into a single operational
            layer, helping teams move from observation to response with cinematic clarity.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="rounded-lg border border-white/10 bg-[#0e1117] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition duration-300 hover:border-cyan-200/24 hover:bg-[#111620] hover:shadow-[0_22px_60px_rgba(0,0,0,0.24)] sm:p-6"
            >
              <p className="min-h-12 text-4xl font-semibold text-white sm:min-h-14 sm:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-sm text-white/58">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
