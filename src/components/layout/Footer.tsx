import { Github, Linkedin, Mail } from 'lucide-react'
import { personalInfo } from '@/data'
import Container from '@/components/ui/Container'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-zinc-200/80 bg-white/50 dark:border-zinc-800/80 dark:bg-neutral-950/70">
      <div className="gradient-hairline absolute inset-x-0 top-0 h-px" aria-hidden="true" />
      <Container className="flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          © {year} {personalInfo.name}. Built with React + Tailwind.
        </p>

        <div className="flex items-center gap-3">
          {personalInfo.email && personalInfo.email !== '[YOUR EMAIL]' && (
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="rounded text-zinc-400 transition-colors hover:text-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:hover:text-indigo-300"
            >
              <Mail size={18} />
            </a>
          )}
          {personalInfo.github && personalInfo.github !== '[GITHUB LINK]' && (
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded text-zinc-400 transition-colors hover:text-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:hover:text-indigo-300"
            >
              <Github size={18} />
            </a>
          )}
          {personalInfo.linkedin && personalInfo.linkedin !== '[LINKEDIN LINK]' && (
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded text-zinc-400 transition-colors hover:text-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:hover:text-indigo-300"
            >
              <Linkedin size={18} />
            </a>
          )}
        </div>

        <div className="flex gap-4 font-mono text-xs text-zinc-400 dark:text-zinc-500">
          <a href="#" className="transition-colors hover:text-zinc-600 dark:hover:text-zinc-300">
            Top
          </a>
          <a href="#projects" className="transition-colors hover:text-zinc-600 dark:hover:text-zinc-300">
            Projects
          </a>
          <a href="#contact" className="transition-colors hover:text-zinc-600 dark:hover:text-zinc-300">
            Contact
          </a>
        </div>
      </Container>
    </footer>
  )
}
