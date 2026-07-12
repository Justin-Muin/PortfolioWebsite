import { useState } from 'react'
import { Trophy, ChevronDown } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { achievements } from '@/data'
import SectionHeader from '@/components/ui/SectionHeader'
import RevealWrapper from '@/components/ui/RevealWrapper'
import Container from '@/components/ui/Container'
import SpotlightCard from '@/components/ui/SpotlightCard'
import ParallaxLayer from '@/components/ui/ParallaxLayer'

export default function Achievements() {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({})
  const shouldReduceMotion = useReducedMotion()

  const toggle = (i: number) => setExpanded((prev) => ({ ...prev, [i]: !prev[i] }))

  if (achievements.length === 0) return null

  return (
    <section id="achievements" className="relative overflow-hidden py-20 sm:py-28" aria-label="Achievements">
      <ParallaxLayer from={120} to={-120} className="absolute -left-24 top-20 -z-10">
        <div className="h-80 w-80 rounded-full bg-amber-400/15 blur-3xl dark:bg-amber-500/10" />
      </ParallaxLayer>
      <ParallaxLayer from={-80} to={80} className="absolute -right-24 bottom-16 -z-10">
        <div className="h-72 w-72 rounded-full bg-orange-400/10 blur-3xl dark:bg-orange-500/10" />
      </ParallaxLayer>
      <Container>
        <RevealWrapper>
          <SectionHeader index="05" label="Achievements" title="Recognition & awards." />
        </RevealWrapper>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, i) => (
            <RevealWrapper key={i} delay={(i % 3) * 0.08} className="h-full">
              <SpotlightCard className="flex h-full flex-col p-6">
                <div className="mb-3 flex items-start gap-3">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-md">
                    <Trophy size={15} aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-sm font-semibold leading-snug text-zinc-900 dark:text-zinc-50">
                      {item.title}
                    </h3>
                    <div className="mt-1 flex items-center gap-2">
                      <span className="truncate text-xs text-zinc-500 dark:text-zinc-400">{item.org}</span>
                      <span className="text-xs text-zinc-400">·</span>
                      <span className="whitespace-nowrap font-mono text-xs text-zinc-400 dark:text-zinc-500">
                        {item.date}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="mt-3 flex items-center gap-1 self-start text-xs text-zinc-500 transition-colors hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-300"
                  aria-expanded={expanded[i] === true}
                >
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${expanded[i] ? 'rotate-180' : ''}`}
                  />
                  {expanded[i] ? 'Hide details' : 'Show details'}
                </button>

                <AnimatePresence initial={false}>
                  {expanded[i] && (
                    <motion.p
                      initial={shouldReduceMotion ? false : { opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={shouldReduceMotion ? undefined : { opacity: 0, height: 0 }}
                      transition={{ duration: 0.22 }}
                      className="mt-3 overflow-hidden text-sm leading-relaxed text-zinc-600 dark:text-zinc-300"
                    >
                      {item.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </SpotlightCard>
            </RevealWrapper>
          ))}
        </div>
      </Container>
    </section>
  )
}
