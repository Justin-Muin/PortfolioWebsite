import { useState } from 'react'
import { projects } from '@/data'
import type { Project } from '@/types'
import SectionHeader from '@/components/ui/SectionHeader'
import ProjectCard from '@/components/ui/ProjectCard'
import RevealWrapper from '@/components/ui/RevealWrapper'

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

  const filtered = active === 'all' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6" aria-label="Projects">
      <div className="max-w-6xl mx-auto">
        <RevealWrapper>
          <SectionHeader
            label="Projects"
            title="Things I've built."
            description="Selected projects across web, systems, and machine learning."
          />
        </RevealWrapper>

        {/* Category filter */}
        <RevealWrapper delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Filter projects by category">
            {categories.map((cat) => (
              <button
                key={cat.value}
                role="tab"
                aria-selected={active === cat.value}
                onClick={() => setActive(cat.value)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  active === cat.value
                    ? 'bg-accent text-white dark:bg-accent-dark dark:text-neutral-950'
                    : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </RevealWrapper>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <RevealWrapper key={project.slug} delay={i * 0.08}>
              <ProjectCard project={project} />
            </RevealWrapper>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-zinc-400 dark:text-zinc-600 py-12">No projects in this category yet.</p>
        )}
      </div>
    </section>
  )
}
