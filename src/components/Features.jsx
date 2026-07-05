import { motion } from 'framer-motion';

const features = [
  {
    title: 'Multimodal Perception',
    description:
      'Fuse video, lidar, telemetry, and business signals into one continuously learning intelligence fabric.',
    accent: 'bg-cyan-200',
  },
  {
    title: 'Predictive Command',
    description:
      'Surface risks, opportunities, and operational next steps before teams need to ask for them.',
    accent: 'bg-amber-200',
  },
  {
    title: 'Trust-Grade Automation',
    description:
      'Deploy guarded AI workflows with audit trails, human approvals, and adaptive policy controls.',
    accent: 'bg-rose-200',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-[#050608] px-4 py-20 sm:px-8 sm:py-24 lg:px-10">
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <p className="text-sm font-semibold text-cyan-200">NovaVision platform</p>
          <h2 className="mt-4 text-2xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            Intelligence that feels less like software and more like foresight.
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:mt-12 md:grid-cols-3 lg:gap-5">
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="group rounded-lg border border-white/12 bg-white/[0.07] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-2xl transition duration-300 hover:border-white/24 hover:bg-white/[0.1] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_28px_80px_rgba(0,0,0,0.28)] sm:p-6"
            >
              <span className={`mb-7 block h-1.5 w-12 rounded-full transition duration-300 group-hover:w-16 ${feature.accent}`} />
              <h3 className="text-lg font-semibold text-white sm:text-xl">{feature.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/62">{feature.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
