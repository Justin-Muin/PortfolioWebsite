import { useLayoutEffect } from 'react'
import { useParams, Link, Navigate, useNavigate } from 'react-router-dom'
import { ArrowLeft, Github, ExternalLink, CheckCircle2, AlertTriangle, Lightbulb, Rocket, BookOpen } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { projects, personalInfo } from '@/data'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Container from '@/components/ui/Container'
import Surface from '@/components/ui/Surface'

export default function ProjectCaseStudy() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const shouldReduceMotion = useReducedMotion()
  const project = projects.find((p) => p.slug === slug)

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!project) {
    return <Navigate to="/" replace />
  }

  const cs = project.caseStudy
  const entrance = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 18, filter: 'blur(8px)' },
        animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
        transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] },
      }

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen overflow-hidden pb-24 pt-28" id="main-content">
        <div className="premium-grid absolute inset-x-0 top-0 -z-20 h-[32rem]" aria-hidden="true" />
        <div className="aurora-field absolute -top-40 left-1/2 -z-10 h-[28rem] w-[70rem] -translate-x-1/2 opacity-55" aria-hidden="true" />

        <Container className="max-w-4xl">
          <button
            type="button"
            onClick={() => navigate('/', { state: { scrollTo: 'projects' } })}
            className="group mb-8 inline-flex items-center gap-2 rounded-md text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:hover:text-zinc-100"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
            Back to projects
          </button>

          <motion.header {...entrance} className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
            <h1 className="mb-4 font-display text-4xl font-bold leading-tight text-zinc-950 text-balance dark:text-zinc-50 sm:text-5xl">
              {project.title}
            </h1>
            <p className="mb-7 text-lg leading-8 text-zinc-600 text-pretty dark:text-zinc-400">{project.tagline}</p>

            <div className="flex flex-wrap gap-3">
              {project.website && (
                <Button as="a" href={project.website} external variant="secondary" size="md">
                  <BookOpen size={16} />
                  Website
                </Button>
              )}
              {project.github && project.github !== '[GITHUB LINK]' && (
                <Button as="a" href={project.github} external variant="secondary" size="md">
                  <Github size={16} />
                  View on GitHub
                </Button>
              )}
              {project.demo && project.demo !== '[DEMO LINK]' && (
                <Button as="a" href={project.demo} external variant="primary" size="md">
                  <ExternalLink size={16} />
                  Live Demo
                </Button>
              )}
            </div>
          </motion.header>

          <div className="space-y-6">
            <CaseSection icon={<Rocket size={18} />} title="Overview">
              <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">{cs.overview}</p>
            </CaseSection>

            <CaseSection icon={<CheckCircle2 size={18} />} title="Role & Responsibilities">
              <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">{cs.role}</p>
              <ul className="space-y-2">
                {cs.responsibilities.slice(0, 3).map((r, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-600 dark:text-zinc-300">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent dark:bg-accent-dark flex-shrink-0" aria-hidden="true" />
                    {r}
                  </li>
                ))}
              </ul>
            </CaseSection>

            <CaseSection icon={<AlertTriangle size={18} />} title="Challenges & Constraints">
              <ul className="space-y-2">
                {cs.challenges.slice(0, 2).map((c, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-600 dark:text-zinc-300">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" aria-hidden="true" />
                    {c}
                  </li>
                ))}
              </ul>
            </CaseSection>

            <CaseSection icon={<Lightbulb size={18} />} title="Key Decisions">
              <div className="space-y-4">
                {cs.keyDecisions.slice(0, 2).map((d, i) => (
                  <div key={i} className="rounded-lg border border-zinc-200/80 bg-zinc-50/70 p-4 dark:border-zinc-800 dark:bg-zinc-900/45">
                    <h4 className="font-display font-semibold text-sm text-zinc-900 dark:text-zinc-50 mb-1.5">
                      {d.title}
                    </h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">{d.description}</p>
                  </div>
                ))}
              </div>
            </CaseSection>

            <CaseSection icon={<CheckCircle2 size={18} />} title="Implementation Highlights">
              <ul className="space-y-2">
                {cs.implementationHighlights.slice(0, 4).map((h, i) => (
                  <li
                    key={i}
                    className="rounded-lg border border-zinc-200/80 bg-zinc-950 px-4 py-3 font-mono text-sm leading-relaxed text-zinc-100 dark:border-zinc-800"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </CaseSection>

            <CaseSection icon={<Rocket size={18} />} title="Outcome">
              <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">{cs.outcome}</p>

              {cs.learned.length > 0 && (
                <>
                  <h4 className="font-display font-semibold text-sm text-zinc-700 dark:text-zinc-300 mb-2">
                    What I learned
                  </h4>
                  <ul className="space-y-1.5 mb-4">
                    {cs.learned.slice(0, 2).map((l, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-600 dark:text-zinc-300">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" aria-hidden="true" />
                        {l}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {cs.nextSteps.length > 0 && (
                <>
                  <h4 className="font-display font-semibold text-sm text-zinc-700 dark:text-zinc-300 mb-2">
                    Next steps
                  </h4>
                  <ul className="space-y-1.5">
                    {cs.nextSteps.slice(0, 3).map((s, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-600 dark:text-zinc-300">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" aria-hidden="true" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </CaseSection>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4">
              <Link
                to="/#projects"
                className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors group"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
                All projects
              </Link>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-sm font-medium text-accent dark:text-accent-dark hover:underline"
              >
                Interested? Let's talk →
              </a>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}

function CaseSection({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode
  title: string
  children: React.ReactNode
}) {
  return (
    <Surface className="p-5 sm:p-6">
      <section aria-labelledby={`cs-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex items-center gap-2.5 mb-5">
        <span className="grid h-8 w-8 place-items-center rounded-md bg-zinc-950 text-white dark:bg-zinc-50 dark:text-zinc-950" aria-hidden="true">
          {icon}
        </span>
        <h2
          id={`cs-${title.toLowerCase().replace(/\s+/g, '-')}`}
          className="font-display text-xl font-semibold text-zinc-950 dark:text-zinc-50"
        >
          {title}
        </h2>
      </div>
      {children}
      </section>
    </Surface>
  )
}
