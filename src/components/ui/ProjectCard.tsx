import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, BookOpen, ChevronDown, ExternalLink, Github } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Project } from '@/types'
import { useSpotlight } from '@/hooks/useSpotlight'
import Badge from './Badge'
import Button from './Button'
import { surfaceBase, surfaceHover } from './Surface'

interface ProjectCardProps {
  project: Project
  index?: number
}

const bulletColors: Record<string, string> = {
  Problem: 'text-red-600 dark:text-red-300',
  Approach: 'text-amber-600 dark:text-amber-300',
  Result: 'text-emerald-600 dark:text-emerald-300',
}

const categoryStyles: Record<Project['category'], { label: string; chip: string }> = {
  web: {
    label: 'Web product',
    chip: 'bg-teal-500/10 text-teal-700 ring-1 ring-teal-500/25 dark:text-teal-300',
  },
  ml: {
    label: 'ML / AI',
    chip: 'bg-violet-500/10 text-violet-700 ring-1 ring-violet-500/25 dark:text-violet-300',
  },
  systems: {
    label: 'Systems',
    chip: 'bg-amber-500/10 text-amber-700 ring-1 ring-amber-500/25 dark:text-amber-300',
  },
  tool: {
    label: 'Tooling',
    chip: 'bg-rose-500/10 text-rose-700 ring-1 ring-rose-500/25 dark:text-rose-300',
  },
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const { ref: cardRef, onMouseMove } = useSpotlight<HTMLElement>()
  const category = categoryStyles[project.category]

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={onMouseMove}
      className={`group relative flex h-full flex-col overflow-hidden p-6 ${surfaceBase} ${surfaceHover}`}
      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {/* Cursor-tracking glow */}
      <div
        className="spotlight-overlay pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />
      {/* Gradient hairline on hover */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />
      {/* Oversized index numeral */}
      <span
        className="pointer-events-none absolute -right-1 -top-4 select-none font-display text-[5.2rem] font-bold leading-none text-zinc-950/[0.045] transition-colors duration-300 group-hover:text-indigo-500/10 dark:text-white/[0.05] dark:group-hover:text-indigo-300/10"
        aria-hidden="true"
      >
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className="relative mb-5 flex items-start justify-between gap-4">
        <div>
          <span
            className={`mb-3 inline-flex items-center rounded-full px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] ${category.chip}`}
          >
            {category.label}
          </span>
          <h3 className="font-display text-xl font-semibold leading-snug text-zinc-950 transition-colors duration-300 group-hover:text-indigo-700 dark:text-zinc-50 dark:group-hover:text-indigo-300">
            {project.title}
          </h3>
        </div>
        <Link
          to={`/projects/${project.slug}`}
          aria-label={`Read ${project.title} case study`}
          className="mt-1 grid h-9 w-9 flex-shrink-0 place-items-center rounded-xl border border-zinc-200 text-zinc-500 transition duration-300 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 group-hover:-rotate-45 dark:border-zinc-800 dark:hover:border-indigo-500/50 dark:hover:bg-indigo-950/40 dark:hover:text-indigo-300"
        >
          <ArrowRight size={16} />
        </Link>
      </div>

      <p className="relative mb-5 text-sm leading-7 text-zinc-600 dark:text-zinc-400">{project.tagline}</p>

      <div className="relative mb-5 flex flex-wrap gap-2">
        {project.tech.slice(0, 7).map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
        {project.tech.length > 7 && <Badge>+{project.tech.length - 7}</Badge>}
      </div>

      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        className="relative mb-3 inline-flex items-center gap-1 self-start rounded-md text-xs font-medium text-zinc-500 transition hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-300"
        aria-expanded={expanded}
      >
        <ChevronDown size={14} className={`transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`} />
        {expanded ? 'Hide details' : 'Show details'}
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.ul
            className="relative mb-5 space-y-3 border-l-2 border-indigo-200 pl-4 dark:border-indigo-500/30"
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

      <div className="relative mt-auto flex flex-wrap items-center gap-2 border-t border-zinc-200/80 pt-4 dark:border-zinc-800">
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

        <Link
          to={`/projects/${project.slug}`}
          className="group/link ml-auto inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-800 dark:text-indigo-300 dark:hover:text-indigo-200"
        >
          Case study
          <ArrowRight size={14} className="transition-transform duration-200 group-hover/link:translate-x-0.5" />
        </Link>
      </div>
    </motion.article>
  )
}
