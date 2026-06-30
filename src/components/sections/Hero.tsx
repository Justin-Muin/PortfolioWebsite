import {
  ArrowDown,
  CalendarCheck,
  Clock,
  Code2,
  Download,
  Mail,
  MapPin,
  Sparkles,
  TerminalSquare,
} from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { personalInfo, quickFacts, projects, skills } from '@/data'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import Metric from '@/components/ui/Metric'
import Surface from '@/components/ui/Surface'

const HEADLINE_INDEX = 1
const quickFactIcons = [MapPin, Clock, CalendarCheck, Code2]

const metrics = [
  { label: 'Selected projects', value: `${projects.length}`, accent: 'teal' as const },
  { label: 'Core stacks', value: `${skills.length}`, accent: 'indigo' as const },
  { label: 'Timezone', value: personalInfo.timezone.replace(' (UTC+9)', ''), accent: 'amber' as const },
]

const codeLines = [
  { k: 'const', t: 'portfolio = {' },
  { k: '  stack', t: ': ["React", "TypeScript", "Tailwind"],' },
  { k: '  focus', t: ': "usable systems, clean interfaces",' },
  { k: '  ships', t: ': ["web apps", "NLP pipelines", "student tools"],' },
  { k: '}' },
]

export default function Hero() {
  const shouldReduceMotion = useReducedMotion()

  const fadeUp = (delay: number) => ({
    initial: shouldReduceMotion ? false : { opacity: 0, y: 24, filter: 'blur(8px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
    transition: { duration: 0.62, delay, ease: [0.21, 0.47, 0.32, 0.98] },
  })

  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] items-center overflow-hidden px-0 pb-16 pt-24 sm:pb-20"
      aria-label="Hero section"
    >
      <div className="premium-grid absolute inset-0 -z-20" aria-hidden="true" />
      <div className="aurora-field absolute -top-28 left-1/2 -z-10 h-[34rem] w-[80rem] -translate-x-1/2 opacity-70" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-gradient-to-t from-[#f7f8fb] to-transparent dark:from-neutral-950" aria-hidden="true" />

      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:gap-14">
          <div>
            <motion.div {...fadeUp(0)} className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-lg border border-zinc-200/80 bg-white/70 px-3 py-1.5 text-xs font-semibold text-zinc-700 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/70 dark:text-zinc-300">
                <Sparkles size={14} className="text-teal-500" aria-hidden="true" />
                {personalInfo.location} based · {personalInfo.availability}
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.08)}
              className="max-w-4xl font-display text-4xl font-bold leading-[1.04] text-zinc-950 text-balance sm:text-5xl md:text-6xl lg:text-7xl dark:text-zinc-50"
            >
              {personalInfo.headlines[HEADLINE_INDEX]}
            </motion.h1>

            <motion.p
              {...fadeUp(0.16)}
              className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 text-pretty dark:text-zinc-300 sm:text-xl"
            >
              {personalInfo.subheadline}
            </motion.p>

            <motion.p {...fadeUp(0.22)} className="mt-4 max-w-2xl leading-7 text-zinc-600 dark:text-zinc-400">
              {personalInfo.focus}
            </motion.p>

            <motion.div {...fadeUp(0.3)} className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button as="a" href="#projects" size="lg" className="justify-center">
                View Projects
                <ArrowDown size={16} />
              </Button>
              <Button as="a" href="#contact" variant="secondary" size="lg" className="justify-center">
                <Mail size={16} />
                Contact
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

            <motion.div {...fadeUp(0.38)} className="mt-9 grid max-w-2xl grid-cols-3 gap-4">
              {metrics.map((metric) => (
                <Metric key={metric.label} {...metric} />
              ))}
            </motion.div>
          </div>

          <motion.div
            {...fadeUp(0.18)}
            className="relative"
            aria-label="Developer workflow preview"
          >
            <Surface className="overflow-hidden">
              <div className="flex items-center justify-between border-b border-zinc-200/80 px-4 py-3 dark:border-zinc-800">
                <div className="flex items-center gap-2">
                  <TerminalSquare size={16} className="text-teal-500" aria-hidden="true" />
                  <span className="font-mono text-xs font-medium text-zinc-600 dark:text-zinc-300">justin.dev</span>
                </div>
                <div className="flex gap-1.5" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
              </div>

              <div className="grid gap-0 lg:grid-cols-[1fr_0.72fr]">
                <div className="border-b border-zinc-200/80 p-5 dark:border-zinc-800 lg:border-b-0 lg:border-r">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-xs font-semibold uppercase text-zinc-500 dark:text-zinc-500">system profile</p>
                    <span className="rounded-md bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-300">
                      deployable
                    </span>
                  </div>
                  <pre className="overflow-x-auto rounded-md bg-zinc-950 p-4 text-[12px] leading-6 text-zinc-100 shadow-inner">
                    {codeLines.map((line, index) => (
                      <motion.code
                        key={`${line.k}-${index}`}
                        className="block"
                        initial={shouldReduceMotion ? false : { opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.08, duration: 0.32 }}
                      >
                        <span className="text-zinc-500">{String(index + 1).padStart(2, '0')}</span>{' '}
                        <span className="text-teal-300">{line.k}</span>
                        {line.t && <span className="text-zinc-200">{line.t}</span>}
                      </motion.code>
                    ))}
                  </pre>
                </div>

                <div className="p-5">
                  <p className="mb-4 text-xs font-semibold uppercase text-zinc-500 dark:text-zinc-500">quick facts</p>
                  <div className="space-y-3">
                    {quickFacts.map((fact, i) => {
                      const Icon = quickFactIcons[i % quickFactIcons.length]
                      return (
                        <motion.div
                          key={fact.label}
                          initial={shouldReduceMotion ? false : { opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.42 + i * 0.07, duration: 0.36 }}
                          className="flex items-start gap-3 rounded-md border border-zinc-200/70 bg-zinc-50/80 p-3 dark:border-zinc-800 dark:bg-zinc-900/55"
                        >
                          <Icon size={15} className="mt-0.5 flex-shrink-0 text-indigo-500 dark:text-indigo-300" aria-hidden="true" />
                          <div>
                            <p className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">{fact.label}</p>
                            <p className="mt-0.5 text-xs leading-5 text-zinc-600 dark:text-zinc-400">{fact.value}</p>
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </Surface>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
