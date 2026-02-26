import { Github, Linkedin, Mail } from 'lucide-react'
import { personalInfo } from '@/data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          © {year} {personalInfo.name}. Built with React + Tailwind.
        </p>

        <div className="flex items-center gap-3">
          {personalInfo.email && personalInfo.email !== '[YOUR EMAIL]' && (
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
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
              className="text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
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
              className="text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
            >
              <Linkedin size={18} />
            </a>
          )}
        </div>

        <div className="flex gap-4 text-xs text-zinc-400 dark:text-zinc-500">
          <a href="#" className="hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
            Top
          </a>
          <a href="#projects" className="hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}
