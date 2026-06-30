import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, BookOpen, ChevronDown, ExternalLink, Github } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Project } from '@/types'
import Badge from './Badge'
import Button from './Button'

interface ProjectCardProps {
  project: Project
}

const bulletColors: Record<string, string> = {
  Problem: 'text-red-600 dark:text-red-300',
  Approach: 'text-amber-600 dark:text-amber-300',
  Result: 'text-emerald-600 dark:text-emerald-300',
}

const categoryLabels: Record<Project['category'], string> = {
  web: 'Web product',
  ml: 'ML / AI',
  systems: 'Systems',
  tool: 'Tooling',
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.article
      className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-zinc-200/80 bg-white/82 p-6 shadow-[0_1px_0_rgba(24,24,27,0.04),0_18px_60px_rgba(24,24,27,0.08)] backdrop-blur-xl transition duration-200 hover:border-zinc-300 dark:border-zinc-800/80 dark:bg-zinc-950/72 dark:shadow-[0_1px_0_rgba(255,255,255,0.04),0_18px_70px_rgba(0,0,0,0.32)] dark:hover:border-zinc-700"
      whileHover={shouldReduceMotion ? undefined : { y: -3 }}
      transition={{ duration: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-400/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />

      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase text-zinc-500 dark:text-zinc-500">
            {categoryLabels[project.category]}
          </p>
          <h3 className="font-display text-xl font-semibold leading-snug text-zinc-950 dark:text-zinc-50">
            {project.title}
          </h3>
        </div>
        <Link
          to={`/projects/${project.slug}`}
          aria-label={`Read ${project.title} case study`}
          className="mt-1 grid h-9 w-9 flex-shrink-0 place-items-center rounded-lg border border-zinc-200 text-zinc-500 transition hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-950 dark:border-zinc-800 dark:hover:border-zinc-700 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"
        >
          <ArrowRight size={16} />
        </Link>
      </div>

      <p className="mb-5 text-sm leading-7 text-zinc-600 dark:text-zinc-400">{project.tagline}</p>

      <div className="mb-5 flex flex-wrap gap-2">
        {project.tech.slice(0, 7).map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
        {project.tech.length > 7 && <Badge>+{project.tech.length - 7}</Badge>}
      </div>

      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        className="mb-3 inline-flex items-center gap-1 self-start rounded-md text-xs font-medium text-zinc-500 transition hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100"
        aria-expanded={expanded}
      >
        <ChevronDown size={14} className={`transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`} />
        {expanded ? 'Hide details' : 'Show details'}
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.ul
            className="mb-5 space-y-3 border-l border-zinc-200 pl-4 dark:border-zinc-800"
            initial={shouldReduceMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
          >
            {project.bullets.map((b) => (
              <li key={b.label} className="text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                <span className={`font-semibold ${bulletColors[b.label] ?? 'text-zinc-500'}`}>{b.label}: </span>
                {b.text}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      <div className="mt-auto flex flex-wrap items-center gap-2 border-t border-zinc-200/80 pt-4 dark:border-zinc-800">
        {project.website && (
          <Button as="a" href={project.website} external variant="secondary" size="sm">
            <BookOpen size={14} />
            Website
          </Button>
        )}

        {project.github && project.github !== '[GITHUB LINK]' ? (
          <Button as="a" href={project.github} external variant="secondary" size="sm">
            <Github size={14} />
            GitHub
          </Button>
        ) : (
          <Button variant="secondary" size="sm" disabled aria-disabled="true" title="GitHub link not available">
            <Github size={14} />
            GitHub
          </Button>
        )}

        {project.demo && project.demo !== '[DEMO LINK]' ? (
          <Button as="a" href={project.demo} external variant="secondary" size="sm">
            <ExternalLink size={14} />
            Demo
          </Button>
        ) : (
          <Button variant="secondary" size="sm" disabled aria-disabled="true" title="Demo not available">
            <ExternalLink size={14} />
            Demo
          </Button>
        )}
      </div>
    </motion.article>
  )
}
