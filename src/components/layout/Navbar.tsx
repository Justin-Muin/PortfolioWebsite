import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Download, Github, Linkedin, Menu, Moon, Sun, X } from 'lucide-react'
import { useDarkMode } from '@/hooks/useDarkMode'
import { personalInfo } from '@/data'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const { isDark, toggle } = useDarkMode()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 14)
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [menuOpen])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 py-3">
      <Container>
        <nav
          className={`flex h-14 items-center justify-between rounded-lg border px-3 transition duration-300 sm:px-4 ${
            scrolled
              ? 'border-zinc-200/80 bg-white/82 shadow-[0_10px_35px_rgba(24,24,27,0.08)] backdrop-blur-xl dark:border-zinc-800/80 dark:bg-neutral-950/80 dark:shadow-[0_18px_45px_rgba(0,0,0,0.28)]'
              : 'border-transparent bg-white/48 backdrop-blur-md dark:bg-neutral-950/42'
          }`}
          aria-label="Main navigation"
        >
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-md pr-2 font-display text-sm font-semibold text-zinc-950 transition-colors hover:text-accent dark:text-zinc-50 dark:hover:text-accent-dark"
            aria-label="Go to top"
          >
            <span className="grid h-8 w-8 place-items-center rounded-md bg-zinc-950 text-xs font-bold text-white shadow-sm dark:bg-zinc-50 dark:text-neutral-950">
              JM
            </span>
            <span className="hidden sm:inline">{personalInfo.name.split(' ')[0]}</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-zinc-600 transition hover:bg-zinc-100/80 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2 md:flex">
            {personalInfo.github && personalInfo.github !== '[GITHUB LINK]' && (
              <Button as="a" href={personalInfo.github} external variant="ghost" size="sm" aria-label="GitHub profile">
                <Github size={16} />
              </Button>
            )}
            {personalInfo.linkedin && personalInfo.linkedin !== '[LINKEDIN LINK]' && (
              <Button as="a" href={personalInfo.linkedin} external variant="ghost" size="sm" aria-label="LinkedIn profile">
                <Linkedin size={16} />
              </Button>
            )}
            <button
              onClick={toggle}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="grid h-9 w-9 place-items-center rounded-lg text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Button
              as="a"
              href={personalInfo.cvLink}
              external={personalInfo.cvLink !== '[CV LINK]'}
              variant="primary"
              size="sm"
            >
              <Download size={14} />
              CV
            </Button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggle}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="grid h-9 w-9 place-items-center rounded-lg text-zinc-500 transition hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-900"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              className="grid h-9 w-9 place-items-center rounded-lg text-zinc-700 transition hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.18 }}
              className="mt-2 overflow-hidden rounded-lg border border-zinc-200/80 bg-white/92 p-2 shadow-xl backdrop-blur-xl dark:border-zinc-800 dark:bg-neutral-950/92 md:hidden"
            >
              <ul className="flex flex-col gap-1" role="list">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={handleNavClick}
                      className="block rounded-md px-3 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-2 grid grid-cols-3 gap-2 border-t border-zinc-200 pt-3 dark:border-zinc-800">
                {personalInfo.github && personalInfo.github !== '[GITHUB LINK]' && (
                  <Button as="a" href={personalInfo.github} external variant="secondary" size="sm">
                    <Github size={14} />
                    GitHub
                  </Button>
                )}
                {personalInfo.linkedin && personalInfo.linkedin !== '[LINKEDIN LINK]' && (
                  <Button as="a" href={personalInfo.linkedin} external variant="secondary" size="sm">
                    <Linkedin size={14} />
                    LinkedIn
                  </Button>
                )}
                <Button
                  as="a"
                  href={personalInfo.cvLink}
                  external={personalInfo.cvLink !== '[CV LINK]'}
                  variant="primary"
                  size="sm"
                >
                  <Download size={14} />
                  CV
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  )
}
