import { useState } from 'react'
import { projects } from '@/data'
import type { Project } from '@/types'
import SectionHeader from '@/components/ui/SectionHeader'
import ProjectCard from '@/components/ui/ProjectCard'
import RevealWrapper from '@/components/ui/RevealWrapper'
import Container from '@/components/ui/Container'
import ParallaxLayer from '@/components/ui/ParallaxLayer'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

type Category = 'all' | Project['category']

const categories: { value: Category; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'web', label: 'Web' },
  { value: 'ml', label: 'ML / AI' },
  { value: 'systems', label: 'Systems' },
  { value: 'tool', label: 'Tools' },
]

export default function Projects() {
  const [active, setActive] = useState<Category>('all')
  const shouldReduceMotion = useReducedMotion()

  const filtered = active === 'all' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="relative overflow-hidden py-20 sm:py-28" aria-label="Projects">
      <ParallaxLayer from={140} to={-140} className="absolute -right-24 top-24 -z-10">
        <div className="h-96 w-96 rounded-full bg-indigo-400/15 blur-3xl dark:bg-indigo-500/15" />
      </ParallaxLayer>
      <ParallaxLayer from={-90} to={90} className="absolute -left-28 bottom-32 -z-10">
        <div className="h-80 w-80 rounded-full bg-teal-400/15 blur-3xl dark:bg-teal-500/15" />
      </ParallaxLayer>
      <ParallaxLayer from={100} to={-100} rotateFrom={0} rotateTo={110} className="absolute right-[6%] top-16 -z-10 hidden md:block">
        <div className="h-32 w-32 rounded-full border-2 border-dashed border-teal-500/40 dark:border-teal-400/30" />
      </ParallaxLayer>
      <Container>
        <RevealWrapper>
          <SectionHeader
            index="03"
            label="Projects"
            title="Things I've built."
            description="Selected web and machine learning work — each with a full case study."
          />
        </RevealWrapper>

        {/* Category filter */}
        <RevealWrapper delay={0.1}>
          <div
            className="mb-10 inline-flex max-w-full flex-wrap gap-1 rounded-xl border border-zinc-200/80 bg-white/70 p-1 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/70"
            role="tablist"
            aria-label="Filter projects by category"
          >
            {categories.map((cat) => (
              <button
                key={cat.value}
                role="tab"
                aria-selected={active === cat.value}
                onClick={() => setActive(cat.value)}
                className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  active === cat.value
                    ? 'text-white'
                    : 'text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100'
                }`}
              >
                {active === cat.value && (
                  <motion.span
                    layoutId="project-filter-pill"
                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-500 shadow-[0_6px_20px_rgba(99,102,241,0.35)]"
                    transition={shouldReduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 420, damping: 34 }}
                    aria-hidden="true"
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            ))}
          </div>
        </RevealWrapper>

        {/* Project grid with animated filtering */}
        <motion.div layout={!shouldReduceMotion} className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout" initial={false}>
            {filtered.map((project, i) => (
              <motion.div
                key={project.slug}
                layout={!shouldReduceMotion}
                initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.96, y: 16 }}
                transition={{ duration: 0.32, delay: i * 0.04, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="h-full"
              >
                <ProjectCard project={project} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="py-12 text-center text-zinc-400 dark:text-zinc-600">No projects in this category yet.</p>
        )}
      </Container>
    </section>
  )
}
