import { Github, ExternalLink, ArrowRight, BookOpen } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Project } from '@/types'
import Badge from './Badge'
import Button from './Button'

interface ProjectCardProps {
  project: Project
}

const bulletColors: Record<string, string> = {
  Problem: 'text-red-500 dark:text-red-400',
  Approach: 'text-amber-500 dark:text-amber-400',
  Result: 'text-emerald-500 dark:text-emerald-400',
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex flex-col h-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
      {/* Header */}
      <div className="mb-4">
        <h3 className="font-display text-lg font-semibold text-zinc-900 dark:text-zinc-50 leading-snug mb-1.5">
          {project.title}
        </h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{project.tagline}</p>
      </div>

      {/* Tech badges */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tech.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>

      {/* Bullets */}
      <ul className="space-y-2 mb-6 flex-1">
        {project.bullets.map((b) => (
          <li key={b.label} className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
            <span className={`font-semibold ${bulletColors[b.label] ?? 'text-zinc-500'}`}>{b.label}: </span>
            {b.text}
          </li>
        ))}
      </ul>

      {/* Actions */}
      <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-100 dark:border-zinc-800">
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
            Live Demo
          </Button>
        ) : (
          <Button variant="secondary" size="sm" disabled aria-disabled="true" title="Demo not available">
            <ExternalLink size={14} />
            Live Demo
          </Button>
        )}

        <Link
          to={`/projects/${project.slug}`}
          className="ml-auto inline-flex items-center gap-1 text-sm font-medium text-accent dark:text-accent-dark hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
        >
          Case Study
          <ArrowRight size={14} />
        </Link>
      </div>
    </article>
  )
}
