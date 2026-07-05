import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll } from 'framer-motion';

const navItems = [
  { label: 'Vision', href: '#hero' },
  { label: 'Features', href: '#features' },
  { label: 'Impact', href: '#stats' },
  { label: 'Contact', href: '#footer' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (event, href) => {
    event.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition duration-300 ${
        isScrolled
          ? 'border-white/10 bg-[#050608]/78 shadow-[0_18px_60px_rgba(0,0,0,0.32)] backdrop-blur-2xl'
          : 'border-white/5 bg-[#050608]/20 backdrop-blur-md'
      }`}
    >
      <motion.div
        aria-hidden="true"
        style={{ scaleX: scrollYProgress }}
        className="absolute left-0 top-0 h-1 w-full origin-left bg-[linear-gradient(90deg,#67e8f9,#fde68a,#f9a8d4)]"
      />

      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-8 lg:px-10">
        <a
          href="#hero"
          onClick={(event) => handleNavClick(event, '#hero')}
          className="group flex items-center gap-3"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-300/35 bg-cyan-300/10 shadow-[0_0_34px_rgba(45,212,191,0.22)] transition duration-300 group-hover:scale-105 group-hover:border-cyan-200/60 sm:h-10 sm:w-10">
            <span className="h-3 w-3 rounded-sm bg-cyan-200 shadow-[0_0_18px_rgba(103,232,249,0.75)]" />
          </span>
          <span className="text-base font-semibold text-white sm:text-lg">NovaVision</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(event) => handleNavClick(event, item.href)}
              className="text-sm font-medium text-white/70 transition duration-300 hover:-translate-y-0.5 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#features"
          onClick={(event) => handleNavClick(event, '#features')}
          className="hidden rounded-lg border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200/45 hover:bg-cyan-200/15 hover:shadow-[0_16px_38px_rgba(103,232,249,0.16)] md:inline-flex"
        >
          Explore Platform
        </a>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 bg-white/10 text-white transition hover:border-cyan-200/45 hover:bg-cyan-200/12 md:hidden"
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-5 flex-col gap-1.5">
            <span className={`h-0.5 rounded-full bg-white transition ${isOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`h-0.5 rounded-full bg-white transition ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 rounded-full bg-white transition ${isOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-white/10 bg-[#050608]/95 px-4 pb-5 pt-2 backdrop-blur-2xl md:hidden"
          >
            <div className="mx-auto grid max-w-7xl gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(event) => handleNavClick(event, item.href)}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-white/75 transition hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
