import { useState, useEffect } from 'react'
import { Sun, Moon, Github, Download, Menu, X } from 'lucide-react'
import { useDarkMode } from '@/hooks/useDarkMode'
import { personalInfo } from '@/data'
import Button from '@/components/ui/Button'

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

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Close mobile menu on nav click
  const handleNavClick = () => setMenuOpen(false)

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-zinc-50/90 dark:bg-neutral-950/90 backdrop-blur-md border-b border-zinc-200/60 dark:border-zinc-800/60 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo / Name */}
        <a
          href="#"
          className="font-display font-bold text-lg text-zinc-900 dark:text-zinc-50 hover:text-accent dark:hover:text-accent-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
          aria-label="Go to top"
        >
          {personalInfo.name.split(' ')[0] || '[NAME]'}
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-6" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-2">
          {/* GitHub */}
          {personalInfo.github && personalInfo.github !== '[GITHUB LINK]' && (
            <Button as="a" href={personalInfo.github} external variant="ghost" size="sm" aria-label="GitHub profile">
              <Github size={16} />
            </Button>
          )}

          {/* Dark mode toggle */}
          <button
            onClick={toggle}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Download CV */}
          <Button
            as="a"
            href={personalInfo.cvLink}
            external={personalInfo.cvLink !== '[CV LINK]'}
            variant="primary"
            size="sm"
          >
            <Download size={14} />
            Download CV
          </Button>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggle}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 rounded-lg text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-zinc-50/95 dark:bg-neutral-950/95 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 px-4 pb-4">
          <ul className="flex flex-col gap-1 pt-2" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleNavClick}
                  className="block py-2.5 px-3 rounded-lg text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-2 mt-3 pt-3 border-t border-zinc-200 dark:border-zinc-800">
            {personalInfo.github && personalInfo.github !== '[GITHUB LINK]' && (
              <Button as="a" href={personalInfo.github} external variant="secondary" size="sm">
                <Github size={14} />
                GitHub
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
              Download CV
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
