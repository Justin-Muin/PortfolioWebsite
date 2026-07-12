import { useState } from 'react'
import { Mail, Github, Linkedin, Copy, CheckCheck } from 'lucide-react'
import { personalInfo } from '@/data'
import SectionHeader from '@/components/ui/SectionHeader'
import Button from '@/components/ui/Button'
import RevealWrapper from '@/components/ui/RevealWrapper'
import Container from '@/components/ui/Container'
import SpotlightCard from '@/components/ui/SpotlightCard'
import ParallaxLayer from '@/components/ui/ParallaxLayer'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    if (personalInfo.email === '[YOUR EMAIL]') return
    try {
      await navigator.clipboard.writeText(personalInfo.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback: open mail client
      window.location.href = `mailto:${personalInfo.email}`
    }
  }

  return (
    <section id="contact" className="section-band relative overflow-hidden py-20 sm:py-28" aria-label="Contact">
      <ParallaxLayer from={120} to={-120} className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="aurora-field h-[26rem] w-[60rem] flex-shrink-0 opacity-60" />
      </ParallaxLayer>
      <ParallaxLayer from={100} to={-100} rotateFrom={0} rotateTo={100} className="absolute left-[7%] top-1/3 -z-10 hidden md:block">
        <div className="h-28 w-28 rounded-full border-2 border-dashed border-violet-400/40 dark:border-violet-500/30" />
      </ParallaxLayer>
      <Container>
        <RevealWrapper>
          <SectionHeader
            index="06"
            label="Contact"
            title="Let's build something together."
            description="Open to internships, part-time roles, and collaborations. My inbox is always open."
            centered
          />
        </RevealWrapper>

        <RevealWrapper delay={0.1}>
          <div className="mx-auto max-w-lg">
            <SpotlightCard className="mb-6 p-6">
              <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                Email
              </p>
              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="truncate font-display text-lg font-medium text-zinc-900 transition-colors hover:text-accent dark:text-zinc-50 dark:hover:text-accent-dark"
                >
                  {personalInfo.email.toLowerCase()}
                </a>
                <button
                  onClick={copyEmail}
                  aria-label="Copy email address"
                  className="flex-shrink-0 rounded-lg p-2 text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
                >
                  {copied ? <CheckCheck size={16} className="text-emerald-500" /> : <Copy size={16} />}
                </button>
              </div>
            </SpotlightCard>

            <div className="mb-8 grid grid-cols-2 gap-4">
              {personalInfo.linkedin && personalInfo.linkedin !== '[LINKEDIN LINK]' && (
                <Button
                  as="a"
                  href={personalInfo.linkedin}
                  external
                  variant="secondary"
                  size="lg"
                  className="w-full justify-center"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </Button>
              )}
              {personalInfo.github && personalInfo.github !== '[GITHUB LINK]' && (
                <Button
                  as="a"
                  href={personalInfo.github}
                  external
                  variant="secondary"
                  size="lg"
                  className="w-full justify-center"
                >
                  <Github size={18} />
                  GitHub
                </Button>
              )}
            </div>

            <SpotlightCard className="p-6" interactive={false}>
              <p className="mb-4 text-center text-sm text-zinc-500 dark:text-zinc-400">
                Or send a quick message directly:
              </p>
              <ContactForm email={personalInfo.email} />
            </SpotlightCard>
          </div>
        </RevealWrapper>
      </Container>
    </section>
  )
}

function ContactForm({ email }: { email: string }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`)
    const body = encodeURIComponent(`Hi,\n\n${form.message}\n\n— ${form.name}\n${form.email}`)
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
  }

  const inputClasses =
    'w-full rounded-xl border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:focus:ring-accent-dark'

  return (
    <form onSubmit={handleSubmit} className="space-y-4" aria-label="Contact form">
      <div>
        <label htmlFor="contact-name" className="mb-1.5 block text-xs font-medium text-zinc-600 dark:text-zinc-400">
          Your name
        </label>
        <input
          id="contact-name"
          type="text"
          required
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          placeholder="Jane Smith"
          className={inputClasses}
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="mb-1.5 block text-xs font-medium text-zinc-600 dark:text-zinc-400">
          Your email
        </label>
        <input
          id="contact-email"
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          placeholder="jane@company.com"
          className={inputClasses}
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-xs font-medium text-zinc-600 dark:text-zinc-400">
          Message
        </label>
        <textarea
          id="contact-message"
          required
          rows={4}
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          placeholder="Hi! I'm reaching out about..."
          className={`${inputClasses} resize-none`}
        />
      </div>
      <Button type="submit" variant="primary" size="md" className="w-full justify-center">
        <Mail size={16} />
        Send via Email Client
      </Button>
    </form>
  )
}
