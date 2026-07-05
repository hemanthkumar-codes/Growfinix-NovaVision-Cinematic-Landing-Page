import { motion, useScroll, useTransform } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 760], [0, 120]);
  const sceneScale = useTransform(scrollY, [0, 760], [1, 1.08]);

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] overflow-hidden border-b border-white/10 bg-[#050608] pt-16 sm:pt-20"
    >
      <motion.div
        aria-hidden="true"
        style={{ y: backgroundY, scale: sceneScale }}
        className="absolute inset-0"
      >
        <div className="hero-scene absolute inset-0" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,6,8,0.72)_0%,rgba(5,6,8,0.42)_48%,rgba(5,6,8,0.9)_100%)] sm:bg-[linear-gradient(90deg,rgba(5,6,8,0.92)_0%,rgba(5,6,8,0.58)_44%,rgba(5,6,8,0.2)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-[linear-gradient(180deg,rgba(5,6,8,0)_0%,#050608_82%)]" />
      </motion.div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-4rem)] w-full max-w-7xl items-center px-4 pb-20 pt-12 sm:min-h-[calc(100svh-5rem)] sm:px-8 sm:pb-24 sm:pt-16 lg:px-10">
        <div className="max-w-3xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-5 inline-flex max-w-full items-center gap-3 rounded-lg border border-cyan-200/20 bg-white/8 px-3 py-2 text-xs font-medium leading-5 text-cyan-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-xl sm:mb-6 sm:px-4 sm:text-sm"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.8)]" />
            Real-time synthetic intelligence for spatial teams
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.12, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl text-4xl font-semibold leading-[1.04] text-white sm:text-6xl lg:text-7xl"
          >
            NovaVision
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.24, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-2xl text-base leading-7 text-white/72 sm:mt-6 sm:text-xl sm:leading-8"
          >
            A cinematic AI command layer that turns live video, sensor streams, and enterprise
            data into instant decisions for the next generation of autonomous operations.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.36, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row"
          >
            <motion.a
              href="#features"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-cyan-200 px-6 py-3 text-sm font-bold text-[#071013] shadow-[0_18px_45px_rgba(103,232,249,0.24)] transition hover:bg-white hover:shadow-[0_22px_60px_rgba(103,232,249,0.3)]"
            >
              Start the Tour
            </motion.a>
            <motion.a
              href="#stats"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/15 bg-white/10 px-6 py-3 text-sm font-bold text-white transition hover:border-amber-200/45 hover:bg-amber-200/10 hover:shadow-[0_22px_54px_rgba(251,191,36,0.12)]"
            >
              See Impact
            </motion.a>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none relative z-10 mx-auto -mt-24 hidden w-full max-w-7xl px-5 pb-12 sm:block sm:px-8 lg:px-10">
        <div className="h-px w-full bg-white/12" />
        <div className="mt-5 grid max-w-3xl grid-cols-3 gap-3 text-xs text-white/52">
          <span>Neural mapping</span>
          <span>Spatial inference</span>
          <span>Autonomous response</span>
        </div>
      </div>
    </section>
  );
}
