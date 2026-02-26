import {
  ArrowDown,
  Download,
  Mail,
  MapPin,
  Clock,
  Code2,
  CalendarCheck,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { personalInfo, quickFacts } from "@/data";
import Button from "@/components/ui/Button";

// Change index 0, 1, or 2 to pick a different headline from data.ts
const HEADLINE_INDEX = 1;

const quickFactIcons = [MapPin, Clock, CalendarCheck, Code2];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: shouldReduceMotion ? {} : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] },
  });

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col justify-center pt-20 pb-16 px-4 sm:px-6 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      {/* Accent glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[600px] h-[400px] rounded-full bg-accent/5 dark:bg-accent-dark/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto w-full">
        {/* Eyebrow */}
        <motion.div {...fadeUp(0)} className="mb-6">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-accent dark:text-accent-dark">
            <span
              className="w-6 h-px bg-accent dark:bg-accent-dark"
              aria-hidden="true"
            />
            {personalInfo.location} · {personalInfo.timezone}
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          {...fadeUp(0.1)}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-zinc-900 dark:text-zinc-50 leading-[1.1] tracking-tight text-balance mb-6 max-w-4xl"
        >
          {personalInfo.headlines[HEADLINE_INDEX]}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          {...fadeUp(0.2)}
          className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed mb-4"
        >
          {personalInfo.subheadline}
        </motion.p>

        <motion.p
          {...fadeUp(0.25)}
          className="text-base text-zinc-500 dark:text-zinc-500 max-w-xl leading-relaxed mb-10"
        >
          {personalInfo.focus}
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.35)} className="flex flex-col sm:flex-row flex-wrap gap-3 mb-10 sm:mb-14">
          <Button as="a" href="#projects" size="lg" className="justify-center sm:justify-start">
            View Projects
            <ArrowDown size={16} />
          </Button>
          <Button as="a" href="#contact" variant="secondary" size="lg" className="justify-center sm:justify-start">
            <Mail size={16} />
            Contact
          </Button>
          <Button
            as="a"
            href={personalInfo.cvLink}
            external={personalInfo.cvLink !== "[CV LINK]"}
            variant="ghost"
            size="lg"
            className="justify-center sm:justify-start"
          >
            <Download size={16} />
            Download CV
          </Button>
        </motion.div>

        {/* Quick Facts row */}
        <motion.div {...fadeUp(0.45)}>
          <div className="flex flex-wrap gap-3">
            {quickFacts.map((fact, i) => {
              const Icon = quickFactIcons[i % quickFactIcons.length];
              return (
                <div
                  key={fact.label}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm"
                >
                  <Icon
                    size={13}
                    className="text-accent dark:text-accent-dark flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-xs text-zinc-500 dark:text-zinc-400">
                    {fact.label}:
                  </span>
                  <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                    {fact.value}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={shouldReduceMotion ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-zinc-400"
        aria-hidden="true"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
