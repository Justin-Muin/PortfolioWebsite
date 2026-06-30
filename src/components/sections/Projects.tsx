import { useState } from 'react'
import { projects } from '@/data'
import type { Project } from '@/types'
import SectionHeader from '@/components/ui/SectionHeader'
import ProjectCard from '@/components/ui/ProjectCard'
import RevealWrapper from '@/components/ui/RevealWrapper'
import Container from '@/components/ui/Container'
import { motion, useReducedMotion } from 'framer-motion'

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
    <section id="projects" className="py-16 sm:py-24" aria-label="Projects">
      <Container>
        <RevealWrapper>
          <SectionHeader
            label="Projects"
            title="Things I've built."
            description="Selected web and machine learning work."
          />
        </RevealWrapper>

        {/* Category filter */}
        <RevealWrapper delay={0.1}>
          <div className="mb-10 inline-flex max-w-full flex-wrap gap-1 rounded-lg border border-zinc-200/80 bg-white/70 p-1 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/70" role="tablist" aria-label="Filter projects by category">
            {categories.map((cat) => (
              <button
                key={cat.value}
                role="tab"
                aria-selected={active === cat.value}
                onClick={() => setActive(cat.value)}
                className={`relative rounded-md px-4 py-2 text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  active === cat.value ? 'text-white dark:text-neutral-950' : 'text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100'
                }`}
              >
                {active === cat.value && (
                  <motion.span
                    layoutId="project-filter-pill"
                    className="absolute inset-0 rounded-md bg-zinc-950 dark:bg-zinc-50"
                    transition={shouldReduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 420, damping: 34 }}
                    aria-hidden="true"
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            ))}
          </div>
        </RevealWrapper>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <RevealWrapper key={project.slug} delay={i * 0.08} className="h-full">
              <ProjectCard project={project} />
            </RevealWrapper>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-zinc-400 dark:text-zinc-600 py-12">No projects in this category yet.</p>
        )}
      </Container>
    </section>
  )
}
