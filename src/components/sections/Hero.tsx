import { useRef } from 'react'
import {
  ArrowDown,
  CalendarCheck,
  ChevronDown,
  Clock,
  Code2,
  Download,
  Mail,
  MapPin,
  Plus,
  TerminalSquare,
} from 'lucide-react'
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import { personalInfo, quickFacts, projects, skills, education } from '@/data'
import { useSpotlight } from '@/hooks/useSpotlight'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import CountUp from '@/components/ui/CountUp'
import Typewriter from '@/components/ui/Typewriter'

const HEADLINE_INDEX = 0
const GRADIENT_WORDS = new Set(['ideas', 'impact'])
const quickFactIcons = [MapPin, Clock, CalendarCheck, Code2]

const typedPhrases = [
  'web apps that feel effortless.',
  'NLP pipelines in Python.',
  'clean, accessible interfaces.',
  'tools students actually use.',
]

const codeLines = [
  { k: 'const', t: ' portfolio = {' },
  { k: '  stack', t: ': ["React", "TypeScript", "Tailwind"],' },
  { k: '  focus', t: ': "usable systems, clean interfaces",' },
  { k: '  ships', t: ': ["web apps", "NLP pipelines", "student tools"],' },
  { k: '}' },
]

const metrics = [
  { label: 'Projects built', value: projects.length, decimals: 0, suffix: '' },
  { label: 'Technologies', value: skills.flatMap((g) => g.skills).length, decimals: 0, suffix: '+' },
  { label: 'GPA', value: parseFloat(education[0].gpa ?? '0'), decimals: 2, suffix: '' },
]

function toTitleCase(value: string) {
  return value
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

function HeadlineWords({ text }: { text: string }) {
  const shouldReduceMotion = useReducedMotion()
  const words = text.split(' ')

  return (
    <>
      {words.map((word, i) => {
        const clean = word.replace(/[^a-zA-Z]/g, '').toLowerCase()
        const gradient = GRADIENT_WORDS.has(clean)
        return (
          <motion.span
            key={`${word}-${i}`}
            className={`inline-block ${gradient ? 'text-gradient' : ''}`}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 26, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.55, delay: 0.14 + i * 0.055, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            {word}
            {i < words.length - 1 && ' '}
          </motion.span>
        )
      })}
    </>
  )
}

function TerminalPanel() {
  const shouldReduceMotion = useReducedMotion()
  const panelRef = useRef<HTMLDivElement>(null)

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [6, -6]), { stiffness: 180, damping: 22 })
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-7, 7]), { stiffness: 180, damping: 22 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return
    const rect = panelRef.current?.getBoundingClientRect()
    if (!rect) return
    rawX.set((e.clientX - rect.left) / rect.width - 0.5)
    rawY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    rawX.set(0)
    rawY.set(0)
  }

  return (
    <div style={{ perspective: 1100 }}>
      <motion.div
        ref={panelRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={shouldReduceMotion ? undefined : { rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/85 shadow-[0_1px_0_rgba(24,24,27,0.04),0_30px_80px_rgba(24,24,27,0.14)] backdrop-blur-xl dark:border-zinc-800/80 dark:bg-zinc-950/75 dark:shadow-[0_1px_0_rgba(255,255,255,0.05),0_30px_90px_rgba(0,0,0,0.45)]"
      >
        {/* Window chrome */}
        <div className="flex items-center justify-between border-b border-zinc-200/80 px-4 py-3 dark:border-zinc-800">
          <div className="flex items-center gap-2">
            <TerminalSquare size={16} className="text-teal-500" aria-hidden="true" />
            <span className="font-mono text-xs font-medium text-zinc-600 dark:text-zinc-300">
              justin@dev ~ portfolio
            </span>
          </div>
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </div>
        </div>

        <div className="p-5">
          <div className="mb-4 flex items-center justify-between">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-500">
              system profile
            </p>
            <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-500/10 px-2 py-1 font-mono text-[11px] font-medium text-emerald-700 dark:text-emerald-300">
              <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-emerald-500" aria-hidden="true" />
              deployable
            </span>
          </div>

          <pre className="overflow-x-auto rounded-xl bg-zinc-950 p-4 font-mono text-[12px] leading-6 text-zinc-100 shadow-inner ring-1 ring-white/10">
            {codeLines.map((line, index) => (
              <motion.code
                key={`${line.k}-${index}`}
                className="block"
                initial={shouldReduceMotion ? false : { opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.65 + index * 0.14, duration: 0.32 }}
              >
                <span className="select-none text-zinc-600">{String(index + 1).padStart(2, '0')}</span>{' '}
                <span className="text-teal-300">{line.k}</span>
                {line.t && <span className="text-zinc-200">{line.t}</span>}
                {index === codeLines.length - 1 && (
                  <span className="animate-caret text-indigo-300" aria-hidden="true">
                    ▍
                  </span>
                )}
              </motion.code>
            ))}
          </pre>

          <div className="mt-4 grid grid-cols-2 gap-2.5">
            {quickFacts.map((fact, i) => {
              const Icon = quickFactIcons[i % quickFactIcons.length]
              return (
                <motion.div
                  key={fact.label}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.15 + i * 0.09, duration: 0.36 }}
                  className="flex items-start gap-2.5 rounded-xl border border-zinc-200/70 bg-zinc-50/80 p-3 transition-colors hover:border-indigo-300/60 dark:border-zinc-800 dark:bg-zinc-900/55 dark:hover:border-indigo-500/40"
                >
                  <Icon size={14} className="mt-0.5 flex-shrink-0 text-indigo-500 dark:text-indigo-300" aria-hidden="true" />
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold text-zinc-900 dark:text-zinc-100">{fact.label}</p>
                    <p className="mt-0.5 truncate text-[11px] leading-4 text-zinc-600 dark:text-zinc-400">{fact.value}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function Hero() {
  const shouldReduceMotion = useReducedMotion()
  const { ref: sectionRef, onMouseMove: handleMouseMove } = useSpotlight<HTMLElement>('hero')

  // Scroll-linked parallax: background layers drift down at different rates
  // while the content lifts and fades as the hero scrolls out of view.
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 90])
  const auroraY = useTransform(scrollYProgress, [0, 1], [0, 160])
  const orbLeftY = useTransform(scrollYProgress, [0, 1], [0, 210])
  const orbRightY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -90])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0])

  // Terminal panel lifts faster than the text column — differential depth.
  const panelY = useTransform(scrollYProgress, [0, 1], [0, -110])
  // Sharp geometric accents: translation + rotation reads far better than blurred blobs.
  const squareY = useTransform(scrollYProgress, [0, 1], [0, 240])
  const squareRotate = useTransform(scrollYProgress, [0, 1], [12, 140])
  const ringY = useTransform(scrollYProgress, [0, 1], [0, 170])
  const ringRotate = useTransform(scrollYProgress, [0, 1], [0, 120])
  const plusY = useTransform(scrollYProgress, [0, 1], [0, 300])
  const plusRotate = useTransform(scrollYProgress, [0, 1], [0, -90])

  const fadeUp = (delay: number) => ({
    initial: shouldReduceMotion ? false : { opacity: 0, y: 24, filter: 'blur(8px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
    transition: { duration: 0.62, delay, ease: [0.21, 0.47, 0.32, 0.98] },
  })

  return (
    <section
      id="hero"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-[100dvh] items-center overflow-hidden px-0 pb-24 pt-28 sm:pb-28"
      aria-label="Hero section"
    >
      {/* Layered background: grid + aurora + cursor spotlight, each on its own parallax depth */}
      <motion.div
        className="premium-grid absolute inset-0 -z-20"
        style={shouldReduceMotion ? undefined : { y: gridY }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute -top-28 inset-x-0 -z-10 flex justify-center"
        style={shouldReduceMotion ? undefined : { y: auroraY }}
        aria-hidden="true"
      >
        <div className="aurora-field h-[34rem] w-[80rem] flex-shrink-0 opacity-70" />
      </motion.div>
      <div className="hero-spotlight absolute inset-0 -z-10" aria-hidden="true" />
      <motion.div
        className="absolute -left-24 top-1/3 -z-10"
        style={shouldReduceMotion ? undefined : { y: orbLeftY }}
        aria-hidden="true"
      >
        <div className="h-72 w-72 animate-float-slow rounded-full bg-indigo-400/15 blur-3xl dark:bg-indigo-500/15" />
      </motion.div>
      <motion.div
        className="absolute -right-16 bottom-1/4 -z-10"
        style={shouldReduceMotion ? undefined : { y: orbRightY }}
        aria-hidden="true"
      >
        <div className="h-80 w-80 animate-float-slower rounded-full bg-teal-400/15 blur-3xl dark:bg-teal-500/10" />
      </motion.div>
      {/* Sharp geometric accents — the most legible parallax layer */}
      <motion.div
        className="absolute left-[3%] top-[22%] -z-10 hidden lg:block"
        style={shouldReduceMotion ? undefined : { y: squareY, rotate: squareRotate }}
        aria-hidden="true"
      >
        <div className="h-6 w-6 rounded-md bg-gradient-to-br from-indigo-500/60 to-violet-500/60 shadow-[0_0_24px_rgba(99,102,241,0.35)]" />
      </motion.div>
      <motion.div
        className="absolute right-[5%] top-[13%] -z-10 hidden md:block"
        style={shouldReduceMotion ? undefined : { y: ringY, rotate: ringRotate }}
        aria-hidden="true"
      >
        <div className="h-24 w-24 rounded-full border-2 border-dashed border-teal-500/50 dark:border-teal-400/40" />
      </motion.div>
      <motion.div
        className="absolute left-[47%] top-[12%] -z-10 hidden lg:block"
        style={shouldReduceMotion ? undefined : { y: plusY, rotate: plusRotate }}
        aria-hidden="true"
      >
        <Plus size={30} strokeWidth={2.5} className="text-violet-500/50 dark:text-violet-400/45" />
      </motion.div>
      <div
        className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-gradient-to-t from-[#f7f8fb] to-transparent dark:from-neutral-950"
        aria-hidden="true"
      />

      <motion.div className="w-full" style={shouldReduceMotion ? undefined : { y: contentY, opacity: contentOpacity }}>
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div className="min-w-0">
            <motion.div {...fadeUp(0)} className="mb-7">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-zinc-200/80 bg-white/70 px-4 py-1.5 text-xs font-semibold text-zinc-700 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/70 dark:text-zinc-300">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                {personalInfo.availability} · {personalInfo.location} ({personalInfo.timezone.split(' ')[0]})
              </span>
            </motion.div>

            <motion.p
              {...fadeUp(0.06)}
              className="mb-4 font-mono text-sm font-medium text-indigo-600 dark:text-indigo-300"
            >
              Hi, I'm {toTitleCase(personalInfo.name)} — {personalInfo.title}.
            </motion.p>

            <h1 className="max-w-4xl font-display text-4xl font-bold leading-[1.06] text-zinc-950 text-balance sm:text-5xl md:text-6xl lg:text-[4.4rem] dark:text-zinc-50">
              <HeadlineWords text={personalInfo.headlines[HEADLINE_INDEX]} />
            </h1>

            <motion.p
              {...fadeUp(0.5)}
              className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 text-pretty dark:text-zinc-300"
            >
              {personalInfo.subheadline}
            </motion.p>

            <motion.p {...fadeUp(0.56)} className="mt-3 font-mono text-sm text-zinc-500 dark:text-zinc-400">
              <span className="text-teal-600 dark:text-teal-300">$</span> I build{' '}
              <Typewriter phrases={typedPhrases} className="font-medium text-zinc-800 dark:text-zinc-200" />
            </motion.p>

            <motion.div {...fadeUp(0.64)} className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button as="a" href="#projects" size="lg" className="group justify-center">
                View projects
                <ArrowDown size={16} className="transition-transform duration-300 group-hover:translate-y-0.5" />
              </Button>
              <Button as="a" href="#contact" variant="secondary" size="lg" className="justify-center">
                <Mail size={16} />
                Get in touch
              </Button>
              <Button
                as="a"
                href={personalInfo.cvLink}
                external={personalInfo.cvLink !== '[CV LINK]'}
                variant="ghost"
                size="lg"
                className="justify-center"
              >
                <Download size={16} />
                Download CV
              </Button>
            </motion.div>

            <motion.div
              {...fadeUp(0.74)}
              className="mt-10 grid max-w-xl grid-cols-3 divide-x divide-zinc-200/80 dark:divide-zinc-800"
            >
              {metrics.map((metric, i) => (
                <div key={metric.label} className={`min-w-0 ${i === 0 ? '' : 'pl-5'}`}>
                  <p className="font-display text-2xl font-bold text-zinc-950 sm:text-3xl dark:text-zinc-50">
                    <CountUp value={metric.value} decimals={metric.decimals} suffix={metric.suffix} />
                  </p>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-zinc-500 sm:text-[11px] sm:tracking-[0.14em] dark:text-zinc-500">
                    {metric.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div {...fadeUp(0.3)} className="min-w-0" aria-label="Developer workflow preview">
            <motion.div className="relative" style={shouldReduceMotion ? undefined : { y: panelY }}>
              <div
                className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-indigo-500/12 via-violet-500/10 to-teal-400/12 blur-2xl"
                aria-hidden="true"
              />
              <TerminalPanel />
            </motion.div>
          </motion.div>
        </div>
      </Container>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1.5 text-zinc-400 transition-colors hover:text-zinc-700 sm:flex dark:text-zinc-600 dark:hover:text-zinc-300"
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        <span className="font-mono text-[10px] font-medium uppercase tracking-[0.3em]">scroll</span>
        <motion.span
          animate={shouldReduceMotion ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        >
          <ChevronDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  )
}
