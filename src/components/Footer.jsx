import { motion } from 'framer-motion';

const socialLinks = [
  {
    label: 'X',
    href: 'https://x.com',
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817-5.966 6.817H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z',
  },
  {
    label: 'GitHub',
    href: 'https://github.com',
    path: 'M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.95.58.1.79-.25.79-.56v-2.1c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.29-1.68-1.29-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.04 0 0 .98-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.58.24 2.75.12 3.04.74.8 1.18 1.83 1.18 3.08 0 4.42-2.69 5.39-5.25 5.67.42.36.78 1.06.78 2.15v3.18c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    path: 'M4.98 3.5C4.98 4.88 3.86 6 2.5 6S.02 4.88.02 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8h4V23h-4V8Zm7.5 0h3.84v2.05h.05c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.67 4.8 6.14V23h-4v-7.85c0-1.87-.03-4.28-2.61-4.28-2.61 0-3.01 2.04-3.01 4.15V23h-4V8Z',
  },
];

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-white/10 bg-[#050608] px-4 py-12 sm:px-8 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto flex w-full max-w-7xl flex-col gap-8 text-center sm:text-left md:flex-row md:items-center md:justify-between"
      >
        <div>
          <a href="#hero" className="text-xl font-semibold text-white transition hover:text-cyan-100">
            NovaVision
          </a>
          <p className="mt-3 max-w-md text-sm leading-6 text-white/55">
            Cinematic intelligence infrastructure for teams building tomorrow's autonomous
            operations.
          </p>
        </div>

        <div className="flex items-center justify-center gap-3 md:justify-end">
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/12 bg-white/8 text-white/72 transition hover:border-cyan-200/45 hover:bg-cyan-200/12 hover:text-white hover:shadow-[0_16px_40px_rgba(103,232,249,0.12)]"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                <path d={social.path} />
              </svg>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </footer>
  );
}
